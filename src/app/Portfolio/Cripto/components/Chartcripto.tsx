



'use client';

import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

interface ChartCriptoProps {
  data: Array<{
    formattedDate: string;
    open: number;
    close: number;
    low: number;
    high: number;
  }>;
}

export default function ChartCripto({ data }: ChartCriptoProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(1000);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const parseDate = d3.timeParse('%d/%m/%Y');
    const formattedData = data.map(d => ({
      date: parseDate(d.formattedDate as string)!,
      open: d.open,
      close: d.close,
      high: d.high,
      low: d.low,
    }));

    const margin = { top: 30, right: 20, bottom: 50, left: 60 };
    const width = containerWidth;
    const height = 400;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    svg.attr('width', width).attr('height', height);

    const xScale = d3.scaleBand()
      .domain(formattedData.map(d => d.date.toString()))
      .range([margin.left, width - margin.right])
      .padding(0.3);

    const yMin = d3.min(formattedData, d => d.low)!;
    const yMax = d3.max(formattedData, d => d.high)!;

    const yScale = d3.scaleLinear()
      .domain([yMin * 0.98, yMax * 1.02])
      .range([height - margin.bottom, margin.top]);

    const g = svg.append('g');

    const xTimeScale = d3.scaleTime()
      .domain(d3.extent(formattedData, d => d.date) as [Date, Date])
      .range([margin.left, width - margin.right]);

    // Detectar rango automáticamente según tamaño de datos
    let xTicks: d3.CountableTimeInterval;
    let xTickFormat: (d: Date) => string;

    if (data.length <= 35) {
      xTicks = d3.timeDay.every(5) as d3.CountableTimeInterval;
      xTickFormat = d3.timeFormat('%d/%m');
    } else if (data.length <= 370) {
      xTicks = d3.timeMonth.every(4) as d3.CountableTimeInterval;
      xTickFormat = d3.timeFormat('%b %Y');
    } else {
      xTicks = d3.timeYear.every(1) as d3.CountableTimeInterval;
      xTickFormat = d3.timeFormat('%Y');
    }


    g.append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(
        d3.axisBottom(xTimeScale)
          .ticks(xTicks)
          .tickFormat(d => xTickFormat(d as Date))
      )
      .selectAll('text')
      .attr('fill', '#aaa')
      .attr('transform', 'rotate(-40)')
      .style('text-anchor', 'end');

    g.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale).ticks(6).tickFormat(d => `$${(+d).toFixed(0)}`))
      .selectAll('text')
      .attr('fill', '#aaa');

    g.selectAll('g.candle')
      .data(formattedData)
      .enter()
      .append('g')
      .attr('class', 'candle')
      .each(function (d) {
        const group = d3.select(this);
        const x = xScale(d.date.toString())!;
        const color = d.close > d.open ? '#4ade80' : '#f87171';

        group.append('line')
          .attr('x1', x + xScale.bandwidth() / 2)
          .attr('x2', x + xScale.bandwidth() / 2)
          .attr('y1', yScale(d.high))
          .attr('y2', yScale(d.low))
          .attr('stroke', color)
          .attr('stroke-width', 1);

        group.append('rect')
          .attr('x', x)
          .attr('y', yScale(Math.max(d.open, d.close)))
          .attr('width', xScale.bandwidth())
          .attr('height', Math.abs(yScale(d.open) - yScale(d.close)))
          .attr('fill', color)
          .attr('rx', 1);
      });

    svg.append('rect')
      .attr('class', 'overlay')
      .attr('width', width)
      .attr('height', height)
      .style('fill', 'none')
      .style('pointer-events', 'all')
      .on('mousemove', function (event) {
        const [x] = d3.pointer(event);
        const index = Math.floor((x - margin.left) / xScale.step());
        const d = formattedData[index];
        if (!d) return;

        const tooltip = d3.select(tooltipRef.current);
        tooltip.html(`
          <div class="font-bold text-white mb-1">${d3.timeFormat('%d/%m/%Y')(d.date)}</div>
          <div>Apertura: $${d.open.toFixed(2)}</div>
          <div>Cierre: $${d.close.toFixed(2)}</div>
          <div>Mínimo: $${d.low.toFixed(2)}</div>
          <div>Máximo: $${d.high.toFixed(2)}</div>
        `);

        const tooltipNode = tooltipRef.current;
        if (tooltipNode) {
          const tooltipWidth = tooltipNode.offsetWidth;
          const tooltipHeight = tooltipNode.offsetHeight;

          const spaceToRight = containerWidth - event.offsetX;
          const spaceToBottom = height - event.offsetY;

          const tooltipX = spaceToRight < tooltipWidth + 20
            ? event.offsetX - tooltipWidth - 10
            : event.offsetX + 10;

          const tooltipY = spaceToBottom < tooltipHeight + 20
            ? event.offsetY - tooltipHeight - 10
            : event.offsetY + 10;

          tooltip
            .style('left', `${tooltipX}px`)
            .style('top', `${tooltipY}px`)
            .style('opacity', 1);
        }
      })
      .on('mouseleave', () => {
        d3.select(tooltipRef.current).style('opacity', 0);
      });
  }, [data, containerWidth]);

  useEffect(() => {
    const resize = () => {
      if (wrapperRef.current) {
        setContainerWidth(wrapperRef.current.clientWidth);
      }
    };
    resize();

    const resizeObserver = new ResizeObserver(resize);
    if (wrapperRef.current) resizeObserver.observe(wrapperRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div className="relative w-full">
      <div ref={wrapperRef} className="relative w-full">
        <div
          ref={tooltipRef}
          className="absolute bg-gray-800 text-white p-2 rounded-md text-xs pointer-events-none opacity-0 transition-opacity duration-200 z-50 whitespace-nowrap"
        ></div>
        <svg ref={svgRef} className="bg-gray-800 rounded-xl shadow-lg w-full h-auto" />
      </div>
    </div>
  );
}
