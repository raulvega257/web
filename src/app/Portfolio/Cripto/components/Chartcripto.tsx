

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

type NumberValue = number | { valueOf(): number };

export default function ChartCripto({ data }: ChartCriptoProps) {
  const svgRef = useRef<SVGSVGElement | null>(null); // Asegúrate de declararlo aquí, fuera del useEffect
  const yAxisRef = useRef<SVGSVGElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

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

    const extent = d3.extent(dataset, d => d.date);
    if (!extent[0] || !extent[1]) return;

    const xScale = d3.scaleTime()
      .domain([extent[0], extent[1]])
      .range([margin.left, width - margin.right]);

    const yMax = d3.max(dataset, d => d.marketCap);
    if (yMax === undefined) return;

    const yScale = d3.scaleLinear()
      .domain([0, yMax])
      .range([height - margin.bottom, margin.top]);

    const line = d3.line<{ date: Date; marketCap: number }>()
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
      .tickFormat((d: Date | NumberValue, _i: number) =>
        d3.timeFormat("%Y-%m-%d")(d instanceof Date ? d : new Date(d.valueOf()))
      );

    xAxisGroup.call(xAxis)
      .selectAll("text")
      .attr("fill", "#aaa")
      .attr("transform", "rotate(-40)")
      .style("text-anchor", "end");

    const yAxis = d3.axisLeft(yScale)
      .ticks(6)
      .tickFormat(d => {
        const value = typeof d === 'number' ? d : d.valueOf();
        return `$${(value / 1e9).toFixed(1)}B`;
      });

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

        tooltip.style("left", `${finalX}px`).style("top", `${finalY}px`);
      })
      .on("mouseout", () => tooltip.style("opacity", 0));

    // Añadir el zoom para el gráfico
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 10])
      .translateExtent([[margin.left, 0], [width, height]])
      .extent([[margin.left, 0], [width, height]])
      .on("zoom", (event) => {
        const newX = event.transform.rescaleX(xScale);

        path.attr("d", line.x(d => newX(d.date)));

        signalsGroup.selectAll("circle")
          .attr("cx", d => newX((d as DataItem).DATE));

        tooltipPointsGroup.selectAll("circle")
          .attr("cx", d => newX((d as DataItem).DATE));

        xAxisGroup.call(xAxis.scale(newX))
          .selectAll("text")
          .attr("fill", "#aaa")
          .attr("transform", "rotate(-40)")
          .style("text-anchor", "end");

        yearLinesGroup.selectAll("line")
          .attr("x1", d => newX(d))
          .attr("x2", d => newX(d));
      });

    const svgElement = svgRef.current;
    if (svgElement) {
      d3.select(svgElement).call(zoom);
    }

  }, [data]);

  return (
    <div className="relative flex">
      <div className="sticky left-0 z-10 bg-gray-900">
        <svg ref={yAxisRef}></svg>
      </div>

      <div ref={wrapperRef} className="relative overflow-x-auto">
        <div ref={tooltipRef}
          className="absolute bg-gray-800 text-white p-2 rounded-md text-xs pointer-events-none opacity-0 transition-opacity duration-200 z-50"
        ></div>
        <svg ref={svgRef} className="bg-gray-800 rounded-xl shadow-lg"></svg>
      </div>
    </div>
  );
}
