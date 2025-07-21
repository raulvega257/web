


// 'use client';
// import { useEffect, useRef, useState } from 'react';
// import * as d3 from 'd3';

// interface ChartCriptoProps {
//   data: Array<{
//     formattedDate: string;
//     [key: string]: number | string;
//   }>;
// }

// export default function ChartCripto({ data }: ChartCriptoProps) {
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   const tooltipRef = useRef<HTMLDivElement | null>(null);
//   const wrapperRef = useRef<HTMLDivElement | null>(null);
//   const [containerWidth, setContainerWidth] = useState(1000);

//   useEffect(() => {
//     if (!data || data.length === 0) return;

//     const parseDate = d3.timeParse('%d/%m/%Y');

//     const numericKeys = Object.keys(data[0]).filter(
//       key => key !== 'formattedDate' && typeof data[0][key] === 'number'
//     );

//     const prettyNames: Record<string, string> = {
//       precio: 'Precio',
//       maximo: 'Máximo',
//       minimo: 'Mínimo',
//       apertura: 'Apertura',
//       cierre: 'Cierre',
//     };

//     const datasets = numericKeys.map(key => ({
//       name: key,
//       values: data.map(d => ({
//         date: parseDate(d.formattedDate as string)!,
//         value: d[key] as number,
//       })),
//     }));

//     const allValues = datasets.flatMap(s => s.values.map(v => v.value));

//     const margin = { top: 50, right: 20, bottom: 50, left: 80 };
//     const width = containerWidth;
//     const height = 400;

//     const svg = d3.select(svgRef.current);
//     svg.selectAll('*').remove();
//     svg.attr('width', width).attr('height', height);

//     const xScale = d3.scaleTime()
//       .domain(d3.extent(data, d => parseDate(d.formattedDate as string)!) as [Date, Date])
//       .range([margin.left, width - margin.right]);

//     const originalMin = d3.min(allValues)!;
//     const originalMax = d3.max(allValues)!;
//     const paddingRatio = 0.1;
//     const valueRange = originalMax - originalMin;
//     const paddingAmount = valueRange * paddingRatio;
//     const applyZoom = originalMin > paddingAmount && originalMax < originalMax + paddingAmount * 0.95;

//     const yMin = applyZoom ? originalMin - paddingAmount : 0;
//     const yMax = applyZoom ? originalMax + paddingAmount : originalMax;

//     const yScale = d3.scaleLinear()
//       .domain([yMin, yMax])
//       .range([height - margin.bottom, margin.top]);

//     const colorScale = d3.scaleOrdinal<string>()
//       .domain(numericKeys)
//       .range(d3.schemeCategory10);

//     const line = d3.line<{ date: Date; value: number }>()
//       .x(d => xScale(d.date))
//       .y(d => yScale(d.value))
//       .curve(d3.curveMonotoneX);

//     const g = svg.append('g').attr('class', 'graph-content');

//     const rangeType = data.length <= 31 ? '30' : data.length <= 370 ? '365' : 'all';
//     let divisionDates: Date[] = [];

//     if (rangeType === '30') {
//       for (let i = 7; i < data.length; i += 7) {
//         const date = parseDate(data[i].formattedDate as string);
//         if (date) divisionDates.push(date);
//       }
//     } else if (rangeType === '365') {
//       for (let i = 30; i < data.length; i += 30) {
//         const date = parseDate(data[i].formattedDate as string);
//         if (date) divisionDates.push(date);
//       }
//     } else {
//       const parsedDates = data.map(d => parseDate(d.formattedDate as string)!);
//       const years = [...new Set(parsedDates.map(d => d.getFullYear()))];

//       if (years.length > 2) {
//         years.slice(1).forEach(year => {
//           const janFirst = new Date(year, 0, 1);
//           divisionDates.push(janFirst);
//         });
//       } else {
//         for (let i = 60; i < data.length; i += 60) {
//           const date = parseDate(data[i].formattedDate as string);
//           if (date) divisionDates.push(date);
//         }
//       }
//     }

//     g.selectAll('.division-line')
//       .data(divisionDates)
//       .enter()
//       .append('line')
//       .attr('class', 'division-line')
//       .attr('x1', d => xScale(d))
//       .attr('x2', d => xScale(d))
//       .attr('y1', margin.top)
//       .attr('y2', height - margin.bottom)
//       .attr('stroke', '#444')
//       .attr('stroke-dasharray', '4 2')
//       .attr('stroke-width', 1);

//     g.append('text')
//       .attr('x', width / 2)
//       .attr('y', margin.top / 2)
//       .attr('text-anchor', 'middle')
//       .attr('fill', '#fff')
//       .style('font-size', '16px')
//       // .text(`Rango: ${d3.timeFormat('%d/%m/%Y')(parseDate(data[0].formattedDate)!)}`);

//     const legendGroup = svg.append('g')
//       .attr('class', 'legend-group')
//       .attr('transform', `translate(${margin.left}, ${margin.top - 10})`);

//     numericKeys.forEach((key, i) => {
//       const legend = legendGroup.append('g')
//         .attr('transform', `translate(0, ${i * 20})`);

//       legend.append('line')
//         .attr('x1', 0).attr('x2', 20).attr('y1', 0).attr('y2', 0)
//         .attr('stroke', colorScale(key)!).attr('stroke-width', 3);

//       legend.append('text')
//         .attr('x', 25).attr('y', 5).attr('fill', '#ccc')
//         .style('font-size', '12px')
//         .text(prettyNames[key] || key);
//     });

//     datasets.forEach(series => {
//       g.append('path')
//         .datum(series.values)
//         .attr('fill', 'none')
//         .attr('stroke', colorScale(series.name)!)
//         .attr('stroke-width', 2)
//         .attr('d', line);
//     });

//     g.append('g')
//       .attr('transform', `translate(0,${height - margin.bottom})`)
//       .call(d3.axisBottom(xScale).ticks(10).tickFormat(d => d3.timeFormat('%d/%m/%Y')(d as Date)))
//       .selectAll('text')
//       .attr('fill', '#aaa')
//       .attr('transform', 'rotate(-40)')
//       .style('text-anchor', 'end');

//     g.append('g')
//       .attr('transform', `translate(${margin.left},0)`)
//       .call(d3.axisLeft(yScale).ticks(6).tickFormat(d => `$${(+d).toFixed(0)}`))
//       .selectAll('text')
//       .attr('fill', '#aaa');

//     const bisectDate = d3.bisector((d: any) => d.date).left;

//     svg.append('rect')
//       .attr('class', 'overlay')
//       .attr('width', width)
//       .attr('height', height)
//       .style('fill', 'none')
//       .style('pointer-events', 'all')
//       .on('mousemove', function (event) {
//         const [x] = d3.pointer(event);
//         const x0 = xScale.invert(x);

//         let closest: { name: string; d: { date: Date; value: number }; dist: number } | null = null;

//         datasets.forEach(series => {
//           const idx = bisectDate(series.values, x0);
//           const d0 = series.values[idx - 1];
//           const d1 = series.values[idx];
//           if (!d0 || !d1) return;
//           const d = x0.getTime() - d0.date.getTime() < d1.date.getTime() - x0.getTime() ? d0 : d1;
//           const xPoint = xScale(d.date);
//           const yPoint = yScale(d.value);
//           const distance = Math.hypot(x - xPoint, d3.pointer(event)[1] - yPoint);
//           if (!closest || distance < closest.dist) {
//             closest = { name: series.name, d, dist: distance };
//           }
//         });

//         if (closest && closest.dist < 30) {
//           const tooltip = d3.select(tooltipRef.current);
//           tooltip.html(`
//             <div class="font-bold text-white mb-1">${d3.timeFormat('%d/%m/%Y')(closest.d.date)}</div>
//             <div><span style="color:${colorScale(closest.name)}">●</span> ${prettyNames[closest.name] || closest.name}: $${closest.d.value.toFixed(2)}</div>
//           `);

//           const tooltipNode = tooltipRef.current;
//           if (tooltipNode) {
//             const tooltipWidth = tooltipNode.offsetWidth;
//             const spaceToRight = containerWidth - event.offsetX;
//             const tooltipX = spaceToRight < tooltipWidth + 20
//               ? event.offsetX - tooltipWidth - 10
//               : event.offsetX + 10;

//             tooltip
//               .style('left', `${tooltipX}px`)
//               .style('top', `${event.offsetY}px`)
//               .style('opacity', 1);
//           }
//         } else {
//           d3.select(tooltipRef.current).style('opacity', 0);
//         }
//       })
//       .on('mouseleave', () => {
//         d3.select(tooltipRef.current).style('opacity', 0);
//       });
//   }, [data, containerWidth]);

//   useEffect(() => {
//     const resize = () => {
//       if (wrapperRef.current) {
//         setContainerWidth(wrapperRef.current.clientWidth);
//       }
//     };
//     resize();

//     const resizeObserver = new ResizeObserver(resize);
//     if (wrapperRef.current) resizeObserver.observe(wrapperRef.current);
//     return () => resizeObserver.disconnect();
//   }, []);

//   return (
//     <div className="relative w-full">
//       <div ref={wrapperRef} className="relative w-full">
//         <div
//           ref={tooltipRef}
//           className="absolute bg-gray-800 text-white p-2 rounded-md text-xs pointer-events-none opacity-0 transition-opacity duration-200 z-50 whitespace-nowrap"
//         ></div>
//         <svg ref={svgRef} className="bg-gray-800 rounded-xl shadow-lg w-full h-auto" />
//       </div>
//     </div>
//   );
// }



































// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import * as d3 from 'd3';

// interface ChartCriptoProps {
//   data: Array<{
//     formattedDate: string;
//     open: number;
//     close: number;
//     low: number;
//     high: number;
//   }>;
// }

// export default function ChartCripto({ data }: ChartCriptoProps) {
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   const wrapperRef = useRef<HTMLDivElement | null>(null);
//   const [containerWidth, setContainerWidth] = useState(1000);

//   useEffect(() => {
//     if (!data || data.length === 0) return;

//     const parseDate = d3.timeParse('%d/%m/%Y');
//     const formattedData = data.map(d => ({
//       date: parseDate(d.formattedDate as string)!,
//       open: d.open,
//       close: d.close,
//       high: d.high,
//       low: d.low,
//     }));

//     const margin = { top: 30, right: 20, bottom: 50, left: 80 };
//     const width = containerWidth;
//     const height = 400;

//     const svg = d3.select(svgRef.current);
//     svg.selectAll('*').remove();
//     svg.attr('width', width).attr('height', height);

//     const xScale = d3.scaleBand()
//       .domain(formattedData.map(d => d.date.toString()))
//       .range([margin.left, width - margin.right])
//       .padding(0.3);

//     const yMin = d3.min(formattedData, d => d.low)!;
//     const yMax = d3.max(formattedData, d => d.high)!;

//     const yScale = d3.scaleLinear()
//       .domain([yMin * 0.98, yMax * 1.02])
//       .range([height - margin.bottom, margin.top]);

//     const g = svg.append('g');

//     // Ejes
//     g.append('g')
//       .attr('transform', `translate(0,${height - margin.bottom})`)
//       .call(
//         d3.axisBottom(d3.scaleTime()
//           .domain(d3.extent(formattedData, d => d.date) as [Date, Date])
//           .range([margin.left, width - margin.right])
//         ).ticks(10).tickFormat(d => d3.timeFormat('%d/%m')(d as Date))
//       )
//       .selectAll('text')
//       .attr('fill', '#aaa')
//       .attr('transform', 'rotate(-40)')
//       .style('text-anchor', 'end');

//     g.append('g')
//       .attr('transform', `translate(${margin.left},0)`)
//       .call(d3.axisLeft(yScale).ticks(6).tickFormat(d => `$${(+d).toFixed(0)}`))
//       .selectAll('text')
//       .attr('fill', '#aaa');

//     // Velas
//     g.selectAll('g.candle')
//       .data(formattedData)
//       .enter()
//       .append('g')
//       .attr('class', 'candle')
//       .each(function (d) {
//         const group = d3.select(this);
//         const x = xScale(d.date.toString())!;
//         const color = d.close > d.open ? '#4ade80' : '#f87171';

//         // Mecha
//         group.append('line')
//           .attr('x1', x + xScale.bandwidth() / 2)
//           .attr('x2', x + xScale.bandwidth() / 2)
//           .attr('y1', yScale(d.high))
//           .attr('y2', yScale(d.low))
//           .attr('stroke', color)
//           .attr('stroke-width', 1);

//         // Cuerpo
//         group.append('rect')
//           .attr('x', x)
//           .attr('y', yScale(Math.max(d.open, d.close)))
//           .attr('width', xScale.bandwidth())
//           .attr('height', Math.abs(yScale(d.open) - yScale(d.close)))
//           .attr('fill', color)
//           .attr('rx', 1);
//       });
//   }, [data, containerWidth]);

//   useEffect(() => {
//     const resize = () => {
//       if (wrapperRef.current) {
//         setContainerWidth(wrapperRef.current.clientWidth);
//       }
//     };
//     resize();

//     const resizeObserver = new ResizeObserver(resize);
//     if (wrapperRef.current) resizeObserver.observe(wrapperRef.current);
//     return () => resizeObserver.disconnect();
//   }, []);

//   return (
//     <div className="relative w-full">
//       <div ref={wrapperRef} className="relative w-full">
//         <svg ref={svgRef} className="bg-gray-800 rounded-xl shadow-lg w-full h-auto" />
//       </div>
//     </div>
//   );
// }



























// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import * as d3 from 'd3';

// interface ChartCriptoProps {
//   data: Array<{
//     formattedDate: string;
//     open: number;
//     close: number;
//     low: number;
//     high: number;
//   }>;
// }

// export default function ChartCripto({ data }: ChartCriptoProps) {
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   const wrapperRef = useRef<HTMLDivElement | null>(null);
//   const tooltipRef = useRef<HTMLDivElement | null>(null);
//   const [containerWidth, setContainerWidth] = useState(1000);

//   useEffect(() => {
//     if (!data || data.length === 0) return;

//     const parseDate = d3.timeParse('%d/%m/%Y');
//     const formattedData = data.map(d => ({
//       date: parseDate(d.formattedDate as string)!,
//       open: d.open,
//       close: d.close,
//       high: d.high,
//       low: d.low,
//     }));

//     const margin = { top: 30, right: 20, bottom: 50, left: 80 };
//     const width = containerWidth;
//     const height = 400;

//     const svg = d3.select(svgRef.current);
//     svg.selectAll('*').remove();
//     svg.attr('width', width).attr('height', height);

//     const xScale = d3.scaleBand()
//       .domain(formattedData.map(d => d.date.toString()))
//       .range([margin.left, width - margin.right])
//       .padding(0.3);

//     const yMin = d3.min(formattedData, d => d.low)!;
//     const yMax = d3.max(formattedData, d => d.high)!;

//     const yScale = d3.scaleLinear()
//       .domain([yMin * 0.98, yMax * 1.02])
//       .range([height - margin.bottom, margin.top]);

//     const g = svg.append('g');

//     g.append('g')
//       .attr('transform', `translate(0,${height - margin.bottom})`)
//       .call(
//         d3.axisBottom(d3.scaleTime()
//           .domain(d3.extent(formattedData, d => d.date) as [Date, Date])
//           .range([margin.left, width - margin.right])
//         ).ticks(10).tickFormat(d => d3.timeFormat('%d/%m')(d as Date))
//       )
//       .selectAll('text')
//       .attr('fill', '#aaa')
//       .attr('transform', 'rotate(-40)')
//       .style('text-anchor', 'end');

//     g.append('g')
//       .attr('transform', `translate(${margin.left},0)`)
//       .call(d3.axisLeft(yScale).ticks(6).tickFormat(d => `$${(+d).toFixed(0)}`))
//       .selectAll('text')
//       .attr('fill', '#aaa');

//     g.selectAll('g.candle')
//       .data(formattedData)
//       .enter()
//       .append('g')
//       .attr('class', 'candle')
//       .each(function (d) {
//         const group = d3.select(this);
//         const x = xScale(d.date.toString())!;
//         const color = d.close > d.open ? '#4ade80' : '#f87171';

//         group.append('line')
//           .attr('x1', x + xScale.bandwidth() / 2)
//           .attr('x2', x + xScale.bandwidth() / 2)
//           .attr('y1', yScale(d.high))
//           .attr('y2', yScale(d.low))
//           .attr('stroke', color)
//           .attr('stroke-width', 1);

//         group.append('rect')
//           .attr('x', x)
//           .attr('y', yScale(Math.max(d.open, d.close)))
//           .attr('width', xScale.bandwidth())
//           .attr('height', Math.abs(yScale(d.open) - yScale(d.close)))
//           .attr('fill', color)
//           .attr('rx', 1);
//       });

//     const overlay = svg.append('rect')
//       .attr('class', 'overlay')
//       .attr('width', width)
//       .attr('height', height)
//       .style('fill', 'none')
//       .style('pointer-events', 'all')
//       .on('mousemove', function (event) {
//         const [x] = d3.pointer(event);
//         const index = Math.floor((x - margin.left) / xScale.step());
//         const d = formattedData[index];
//         if (!d) return;

//         const tooltip = d3.select(tooltipRef.current);
//         tooltip.html(`
//           <div class="font-bold text-white mb-1">${d3.timeFormat('%d/%m/%Y')(d.date)}</div>
//           <div><span class="text-green-400">●</span> Apertura: $${d.open.toFixed(2)}</div>
//           <div><span class="text-red-400">●</span> Cierre: $${d.close.toFixed(2)}</div>
//           <div><span class="text-blue-400">●</span> Mínimo: $${d.low.toFixed(2)}</div>
//           <div><span class="text-yellow-400">●</span> Máximo: $${d.high.toFixed(2)}</div>
//         `);

//         const tooltipNode = tooltipRef.current;
//         if (tooltipNode) {
//           const tooltipWidth = tooltipNode.offsetWidth;
//           const spaceToRight = containerWidth - event.offsetX;
//           const tooltipX = spaceToRight < tooltipWidth + 20
//             ? event.offsetX - tooltipWidth - 10
//             : event.offsetX + 10;

//           tooltip
//             .style('left', `${tooltipX}px`)
//             .style('top', `${event.offsetY}px`)
//             .style('opacity', 1);
//         }
//       })
//       .on('mouseleave', () => {
//         d3.select(tooltipRef.current).style('opacity', 0);
//       });
//   }, [data, containerWidth]);

//   useEffect(() => {
//     const resize = () => {
//       if (wrapperRef.current) {
//         setContainerWidth(wrapperRef.current.clientWidth);
//       }
//     };
//     resize();

//     const resizeObserver = new ResizeObserver(resize);
//     if (wrapperRef.current) resizeObserver.observe(wrapperRef.current);
//     return () => resizeObserver.disconnect();
//   }, []);

//   return (
//     <div className="relative w-full">
//       <div ref={wrapperRef} className="relative w-full">
//         <div
//           ref={tooltipRef}
//           className="absolute bg-gray-800 text-white p-2 rounded-md text-xs pointer-events-none opacity-0 transition-opacity duration-200 z-50 whitespace-nowrap"
//         ></div>
//         <svg ref={svgRef} className="bg-gray-800 rounded-xl shadow-lg w-full h-auto" />
//       </div>
//     </div>
//   );
// }




















// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import * as d3 from 'd3';

// interface ChartCriptoProps {
//   data: Array<{
//     formattedDate: string;
//     open: number;
//     close: number;
//     low: number;
//     high: number;
//   }>;
// }

// export default function ChartCripto({ data }: ChartCriptoProps) {
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   const wrapperRef = useRef<HTMLDivElement | null>(null);
//   const tooltipRef = useRef<HTMLDivElement | null>(null);
//   const [containerWidth, setContainerWidth] = useState(1000);

//   useEffect(() => {
//     if (!data || data.length === 0) return;

//     const parseDate = d3.timeParse('%d/%m/%Y');
//     const formattedData = data.map(d => ({
//       date: parseDate(d.formattedDate as string)!,
//       open: d.open,
//       close: d.close,
//       high: d.high,
//       low: d.low,
//     }));

//     const margin = { top: 30, right: 20, bottom: 50, left: 80 };
//     const width = containerWidth;
//     const height = 400;

//     const svg = d3.select(svgRef.current);
//     svg.selectAll('*').remove();
//     svg.attr('width', width).attr('height', height);

//     const xScale = d3.scaleBand()
//       .domain(formattedData.map(d => d.date.toString()))
//       .range([margin.left, width - margin.right])
//       .padding(0.3);

//     const yMin = d3.min(formattedData, d => d.low)!;
//     const yMax = d3.max(formattedData, d => d.high)!;

//     const yScale = d3.scaleLinear()
//       .domain([yMin * 0.98, yMax * 1.02])
//       .range([height - margin.bottom, margin.top]);

//     const g = svg.append('g');

//     g.append('g')
//       .attr('transform', `translate(0,${height - margin.bottom})`)
//       .call(
//         d3.axisBottom(d3.scaleTime()
//           .domain(d3.extent(formattedData, d => d.date) as [Date, Date])
//           .range([margin.left, width - margin.right])
//         ).ticks(10).tickFormat(d => d3.timeFormat('%d/%m')(d as Date))
//       )
//       .selectAll('text')
//       .attr('fill', '#aaa')
//       .attr('transform', 'rotate(-40)')
//       .style('text-anchor', 'end');

//     g.append('g')
//       .attr('transform', `translate(${margin.left},0)`)
//       .call(d3.axisLeft(yScale).ticks(6).tickFormat(d => `$${(+d).toFixed(0)}`))
//       .selectAll('text')
//       .attr('fill', '#aaa');

//     g.selectAll('g.candle')
//       .data(formattedData)
//       .enter()
//       .append('g')
//       .attr('class', 'candle')
//       .each(function (d) {
//         const group = d3.select(this);
//         const x = xScale(d.date.toString())!;
//         const color = d.close > d.open ? '#4ade80' : '#f87171';

//         group.append('line')
//           .attr('x1', x + xScale.bandwidth() / 2)
//           .attr('x2', x + xScale.bandwidth() / 2)
//           .attr('y1', yScale(d.high))
//           .attr('y2', yScale(d.low))
//           .attr('stroke', color)
//           .attr('stroke-width', 1);

//         group.append('rect')
//           .attr('x', x)
//           .attr('y', yScale(Math.max(d.open, d.close)))
//           .attr('width', xScale.bandwidth())
//           .attr('height', Math.abs(yScale(d.open) - yScale(d.close)))
//           .attr('fill', color)
//           .attr('rx', 1);
//       });

//     const overlay = svg.append('rect')
//       .attr('class', 'overlay')
//       .attr('width', width)
//       .attr('height', height)
//       .style('fill', 'none')
//       .style('pointer-events', 'all')
//       .on('mousemove', function (event) {
//         const [x, y] = d3.pointer(event);
//         const index = Math.floor((x - margin.left) / xScale.step());
//         const d = formattedData[index];
//         if (!d) return;

//         const tooltip = d3.select(tooltipRef.current);
//         tooltip.html(`
//           <div class="font-bold text-white mb-1">${d3.timeFormat('%d/%m/%Y')(d.date)}</div>
//           <div>Apertura: $${d.open.toFixed(2)}</div>
//           <div>Cierre: $${d.close.toFixed(2)}</div>
//           <div>Mínimo: $${d.low.toFixed(2)}</div>
//           <div>Máximo: $${d.high.toFixed(2)}</div>
//         `);

//         const tooltipNode = tooltipRef.current;
//         if (tooltipNode) {
//           const tooltipWidth = tooltipNode.offsetWidth;
//           const tooltipHeight = tooltipNode.offsetHeight;

//           const spaceToRight = containerWidth - event.offsetX;
//           const spaceToBottom = height - event.offsetY;

//           const tooltipX = spaceToRight < tooltipWidth + 20
//             ? event.offsetX - tooltipWidth - 10
//             : event.offsetX + 10;

//           const tooltipY = spaceToBottom < tooltipHeight + 20
//             ? event.offsetY - tooltipHeight - 10
//             : event.offsetY + 10;

//           tooltip
//             .style('left', `${tooltipX}px`)
//             .style('top', `${tooltipY}px`)
//             .style('opacity', 1);
//         }
//       })
//       .on('mouseleave', () => {
//         d3.select(tooltipRef.current).style('opacity', 0);
//       });
//   }, [data, containerWidth]);

//   useEffect(() => {
//     const resize = () => {
//       if (wrapperRef.current) {
//         setContainerWidth(wrapperRef.current.clientWidth);
//       }
//     };
//     resize();

//     const resizeObserver = new ResizeObserver(resize);
//     if (wrapperRef.current) resizeObserver.observe(wrapperRef.current);
//     return () => resizeObserver.disconnect();
//   }, []);

//   return (
//     <div className="relative w-full">
//       <div ref={wrapperRef} className="relative w-full">
//         <div
//           ref={tooltipRef}
//           className="absolute bg-gray-800 text-white p-2 rounded-md text-xs pointer-events-none opacity-0 transition-opacity duration-200 z-50 whitespace-nowrap"
//         ></div>
//         <svg ref={svgRef} className="bg-gray-800 rounded-xl shadow-lg w-full h-auto" />
//       </div>
//     </div>
//   );
// }














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

    const margin = { top: 30, right: 20, bottom: 50, left: 80 };
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
