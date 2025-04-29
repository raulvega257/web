'use client';
import { useEffect, useRef } from "react";
import * as d3 from "d3";

type DataItem = {
  DATE: string;
  TOTAL_CRYPTO_MCAP: number | string;
  LAST_TM_GRADE_SIGNAL: number;
};

interface ChartCriptoProps {
  data: {
    data: DataItem[];
  };
}

export default function ChartCripto({ data }: ChartCriptoProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const yAxisRef = useRef<SVGSVGElement | null>(null);
  const tooltipRef = useRef<SVGSVGElement | null>(null);
  const wrapperRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!data || !data.data || !Array.isArray(data.data)) return;

    const dataset = data.data.map(d => ({
      date: new Date(d.DATE),
      marketCap: +d.TOTAL_CRYPTO_MCAP,
      signal: d.LAST_TM_GRADE_SIGNAL
    }));

    const margin = { top: 40, right: 20, bottom: 50, left: 80 };
    const width = Math.max(1000, dataset.length * 50);
    const height = 400;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();
    svg.attr("width", width).attr("height", height);

    const xScale = d3.scaleTime()
      .domain(d3.extent(dataset, d => d.date))
      .range([margin.left, width - margin.right]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset, d => d.marketCap)])
      .range([height - margin.bottom, margin.top]);

    const line = d3.line()
      .x(d => xScale(d.date))
      .y(d => yScale(d.marketCap))
      .curve(d3.curveMonotoneX);

    const g = svg.append("g").attr("class", "graph-content");

    const path = g.append("path")
      .datum(dataset)
      .attr("fill", "none")
      .attr("stroke", "#4f46e5")
      .attr("stroke-width", 2)
      .attr("d", line);

    const xAxisGroup = g.append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height - margin.bottom})`);

    const xAxis = d3.axisBottom(xScale)
      .ticks(10)
      .tickFormat(d3.timeFormat("%Y-%m-%d"));

    xAxisGroup.call(xAxis)
      .selectAll("text")
      .attr("fill", "#aaa")
      .attr("transform", "rotate(-40)")
      .style("text-anchor", "end");

    const yAxis = d3.axisLeft(yScale)
      .ticks(6)
      .tickFormat(d => `$${(d / 1e9).toFixed(1)}B`);

    const yAxisSvg = d3.select(yAxisRef.current);
    yAxisSvg.selectAll("*").remove();
    yAxisSvg
      .attr("width", margin.left)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left - 10}, 0)`)
      .call(yAxis)
      .selectAll("text")
      .attr("fill", "#aaa");

    // Señales (círculos de colores)
    const signalsGroup = g.append("g").attr("class", "signals");

    signalsGroup.selectAll("circle")
      .data(dataset)
      .enter()
      .append("circle")
      .attr("cx", d => xScale(d.date))
      .attr("cy", d => yScale(d.marketCap))
      .attr("r", 4)
      .attr("fill", d =>
        d.signal === 1 ? "#22c55e" : d.signal === -1 ? "#ef4444" : "#9ca3af"
      );

    // Líneas verticales por año
    const years = Array.from(new Set(dataset.map(d => d.date.getFullYear())));
    const yearLinesGroup = g.append("g").attr("class", "year-lines");

    years.forEach(year => {
      const date = new Date(`${year}-01-01`);
      yearLinesGroup.append("line")
        .datum(date)
        .attr("x1", xScale(date))
        .attr("x2", xScale(date))
        .attr("y1", margin.top)
        .attr("y2", height - margin.bottom)
        .attr("stroke", "#555")
        .attr("stroke-dasharray", "4 4");
    });

    // Tooltip
    const tooltip = d3.select(tooltipRef.current);

    const tooltipPointsGroup = g.append("g").attr("class", "tooltip-points");

    tooltipPointsGroup.selectAll("circle")
      .data(dataset)
      .enter()
      .append("circle")
      .attr("cx", d => xScale(d.date))
      .attr("cy", d => yScale(d.marketCap))
      .attr("r", 10)
      .attr("opacity", 0)
      .on("mouseover", (event, d) => {
        tooltip
          .style("opacity", 1)
          .html(`
            <strong>${d3.timeFormat("%Y-%m-%d")(d.date)}</strong><br/>
            Cap: $${(d.marketCap / 1e9).toFixed(2)}B<br/>
            Señal: ${d.signal === 1 ? "bullish" : d.signal === -1 ? "bearish" : "neutral"}
          `);
      })
      .on("mousemove", event => {
        const tooltipNode = tooltip.node();
        const wrapperRect = wrapperRef.current.getBoundingClientRect();
        const tooltipRect = tooltipNode.getBoundingClientRect();

        const mouseX = event.clientX - wrapperRect.left + wrapperRef.current.scrollLeft;
        const mouseY = event.clientY - wrapperRect.top;

        const offsetX = 10;
        const offsetY = 10;

        const finalX = mouseX + tooltipRect.width + offsetX > wrapperRef.current.scrollWidth
          ? mouseX - tooltipRect.width - offsetX
          : mouseX + offsetX;

        const finalY = mouseY + tooltipRect.height + offsetY > wrapperRef.current.clientHeight
          ? mouseY - tooltipRect.height - offsetY
          : mouseY + offsetY;

        tooltip.style("left", finalX + "px").style("top", finalY + "px");
      })
      .on("mouseout", () => tooltip.style("opacity", 0));

    // Zoom
    const zoom = d3.zoom()
      .scaleExtent([1, 10])
      .translateExtent([[margin.left, 0], [width, height]])
      .extent([[margin.left, 0], [width, height]])
      .on("zoom", ({ transform }) => {
        const newX = transform.rescaleX(xScale);

        path.attr("d", line.x(d => newX(d.date)));

        signalsGroup.selectAll("circle")
          .attr("cx", d => newX(d.date));

        tooltipPointsGroup.selectAll("circle")
          .attr("cx", d => newX(d.date));

        xAxisGroup.call(xAxis.scale(newX))
          .selectAll("text")
          .attr("fill", "#aaa")
          .attr("transform", "rotate(-40)")
          .style("text-anchor", "end");

        yearLinesGroup.selectAll("line")
          .attr("x1", d => newX(d))
          .attr("x2", d => newX(d));
      });

    svg.call(zoom);

  }, [data]);

  return (
    <div className="relative flex">
      {/* Eje Y fijo */}
      <div className="sticky left-0 z-10 bg-gray-900">
        <svg ref={yAxisRef}></svg>
      </div>

      {/* Gráfico con scroll */}
      <div ref={wrapperRef} className="relative overflow-x-auto">
        <div ref={tooltipRef}
          className="absolute bg-gray-800 text-white p-2 rounded-md text-xs pointer-events-none opacity-0 transition-opacity duration-200 z-50"
        ></div>
        <svg ref={svgRef} className="bg-gray-800 rounded-xl shadow-lg"></svg>
      </div>
    </div>
  );
}
