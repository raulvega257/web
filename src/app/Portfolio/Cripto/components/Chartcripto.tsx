'use client';
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
// import type { Selection } from 'd3';

interface ChartCriptoProps {
  data: {
    ['Time Series (Digital Currency Daily)']: {
      [date: string]: {
        '4. close': string;
      };
    };
  };
}

export default function ChartCripto({ data }: ChartCriptoProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const yAxisRef = useRef<SVGSVGElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timeSeries = data?.['Time Series (Digital Currency Daily)'];
    if (!timeSeries || typeof timeSeries !== 'object') return;

    const dataset = Object.entries(timeSeries)
      .map(([date, values]) => ({
        date: new Date(date),
        close: parseFloat(values['4. close']),
      }))
      .sort((a, b) => a.date.getTime() - b.date.getTime());

    const margin = { top: 40, right: 20, bottom: 50, left: 80 };
    const width = Math.max(1000, dataset.length * 10); // más compacto
    const height = 400;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    svg.attr('width', width).attr('height', height);

    const extent = d3.extent(dataset, d => d.date);
    if (!extent[0] || !extent[1]) return;

    const xScale = d3.scaleTime()
      .domain([extent[0], extent[1]])
      .range([margin.left, width - margin.right]);

    const yMax = d3.max(dataset, d => d.close);
    if (yMax === undefined) return;

    const yScale = d3.scaleLinear()
      .domain([0, yMax])
      .range([height - margin.bottom, margin.top]);

    const line = d3.line<{ date: Date; close: number }>()
      .x(d => xScale(d.date))
      .y(d => yScale(d.close))
      .curve(d3.curveMonotoneX);

    const g = svg.append('g').attr('class', 'graph-content');

    const path = g.append('path')
      .datum(dataset)
      .attr('fill', 'none')
      .attr('stroke', '#4f46e5')
      .attr('stroke-width', 2)
      .attr('d', line);

    const xAxisGroup = g.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height - margin.bottom})`);

    // const xAxis = d3.axisBottom(xScale)
    //   .ticks(10)
    //   // .tickFormat((d: Date) => d3.timeFormat('%Y-%m-%d')(d));
    //   .tickFormat((d, i) => {
    //     const date = d instanceof Date ? d : new Date(d);
    //     return d3.timeFormat('%Y-%m-%d')(date);
    //   });
      const xAxis = d3.axisBottom(xScale)
        .ticks(10)
        .tickFormat((d) => {
          const date = new Date(d as number); // ✅ aseguras que se convierte a Date
          return d3.timeFormat('%Y-%m-%d')(date);
        });

    xAxisGroup.call(xAxis)
      .selectAll('text')
      .attr('fill', '#aaa')
      .attr('transform', 'rotate(-40)')
      .style('text-anchor', 'end');

    const yAxis = d3.axisLeft(yScale)
      .ticks(6)
      .tickFormat(d => `€${(+d / 1000).toFixed(1)}k`);

    const yAxisSvg = d3.select(yAxisRef.current);
    yAxisSvg.selectAll('*').remove();
    yAxisSvg
      .attr('width', margin.left)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${margin.left - 10}, 0)`)
      .call(yAxis)
      .selectAll('text')
      .attr('fill', '#aaa');

    const tooltip = d3.select(tooltipRef.current);

    const tooltipPointsGroup = g.append('g').attr('class', 'tooltip-points');

    tooltipPointsGroup.selectAll('circle')
      .data(dataset)
      .enter()
      .append('circle')
      .attr('cx', d => xScale(d.date))
      .attr('cy', d => yScale(d.close))
      .attr('r', 10)
      .attr('opacity', 0)
      .on('mouseover', (event, d) => {
        tooltip
          .style('opacity', 1)
          .html(
            `<strong>${d3.timeFormat('%Y-%m-%d')(d.date)}</strong><br/>
            Cierre: €${d.close.toFixed(2)}`
          );
      })
      .on('mousemove', event => {
        const tooltipNode = tooltip.node();
        const wrapper = wrapperRef.current;

        if (!tooltipNode || !wrapper) return;

        const wrapperRect = wrapper.getBoundingClientRect();
        const tooltipRect = tooltipNode.getBoundingClientRect();

        const mouseX = event.clientX - wrapperRect.left + wrapper.scrollLeft;
        const mouseY = event.clientY - wrapperRect.top;

        const offsetX = 10;
        const offsetY = 10;

        const finalX =
          mouseX + tooltipRect.width + offsetX > wrapper.scrollWidth
            ? mouseX - tooltipRect.width - offsetX
            : mouseX + offsetX;

        const finalY =
          mouseY + tooltipRect.height + offsetY > wrapper.clientHeight
            ? mouseY - tooltipRect.height - offsetY
            : mouseY + offsetY;

        tooltip.style('left', `${finalX}px`).style('top', `${finalY}px`);
      })
      .on('mouseout', () => tooltip.style('opacity', 0));

    // Líneas por año
    const years = Array.from(new Set(dataset.map(d => d.date.getFullYear())));
    const yearLinesGroup = g.append('g').attr('class', 'year-lines');

    years.forEach(year => {
      const date = new Date(`${year}-01-01`);
      yearLinesGroup.append('line')
        .datum(date)
        .attr('x1', xScale(date))
        .attr('x2', xScale(date))
        .attr('y1', margin.top)
        .attr('y2', height - margin.bottom)
        .attr('stroke', '#555')
        .attr('stroke-dasharray', '4 4');
    });

    const dayLinesGroup = g.append('g').attr('class', 'day-lines');

    function drawDayLines(scale: d3.ScaleTime<number, number>) {
      const [start, end] = scale.domain();
      const days: Date[] = [];

      const current = new Date(start);
      current.setHours(0, 0, 0, 0);

      while (current <= end) {
        days.push(new Date(current));
        current.setDate(current.getDate() + 1);
      }

      const lines = dayLinesGroup
      .selectAll<SVGLineElement, Date>('line')
      .data<Date>(days, d => d.toISOString());



      lines.enter()
        .append('line')
        .attr('y1', margin.top)
        .attr('y2', height - margin.bottom)
        .attr('stroke', '#555') // ← color más claro
        .attr('stroke-width', 1) // ← línea más gruesa
        .merge(lines as d3.Selection<SVGLineElement, Date, SVGGElement, unknown>)
        .attr('x1', d => scale(d))
        .attr('x2', d => scale(d));

      lines.exit().remove();
    }


    drawDayLines(xScale); // inicial

    // Zoom
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 10])
      .translateExtent([[margin.left, 0], [width, height]])
      .extent([[margin.left, 0], [width, height]])
      .on('zoom', event => {
        const newX = event.transform.rescaleX(xScale);

        path.attr('d', line.x(d => newX(d.date)));

        tooltipPointsGroup.selectAll('circle')
          .attr('cx', d => newX((d as { date: Date }).date));

        xAxisGroup.call(xAxis.scale(newX))
          .selectAll('text')
          .attr('fill', '#aaa')
          .attr('transform', 'rotate(-40)')
          .style('text-anchor', 'end');

        yearLinesGroup.selectAll('line')
          .attr('x1', d => newX(d as Date))
          .attr('x2', d => newX(d as Date));

        drawDayLines(newX); // dinámico
      });

    const svgElement = svgRef.current;
    if (svgElement) {
      d3.select(svgElement).call(zoom);
    }

    // Auto scroll hacia la derecha
    if (wrapperRef.current) {
      wrapperRef.current.scrollLeft = wrapperRef.current.scrollWidth;
    }


  }, [data]);

  return (
    <div className="relative flex">
      <div className="sticky left-0 z-10 bg-gray-900">
        <svg ref={yAxisRef}></svg>
      </div>

      <div ref={wrapperRef} className="relative overflow-x-auto">
        <div
          ref={tooltipRef}
          className="absolute bg-gray-800 text-white p-2 rounded-md text-xs pointer-events-none opacity-0 transition-opacity duration-200 z-50"
        ></div>
        <svg ref={svgRef} className="bg-gray-800 rounded-xl shadow-lg"></svg>
      </div>
    </div>
  );
}
