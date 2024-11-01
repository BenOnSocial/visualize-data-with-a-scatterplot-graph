const dataset = await d3.json(
  'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json'
);
dataset.forEach((d) => {
  const t = d.Time.split(':');
  d.Time = new Date(1970, 0, 1, 0, t[0], t[1]);
});

// Chart dimensions
const margin = { top: 70, right: 30, bottom: 40, left: 80 };
const width = 1200 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const svg = d3
  .select('#chart')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`);

svg
  .append('text')
  .attr('id', 'title')
  .attr('x', width / 2)
  .attr('y', 0 - margin.top / 2 + 25)
  .attr('text-anchor', 'middle')
  .style('font-family', 'sans-serif')
  .style('font-weight', 'bold')
  .style('font-size', '2rem')
  .text('Doping in Professional Bicycle Racing');

// Chart scales
const x = d3.scaleLinear().range([0, width]);
const y = d3.scaleTime().range([0, height]);

// Chart domains
x.domain([
  d3.min(dataset, (d) => d.Year) - 1,
  d3.max(dataset, (d) => d.Year) + 1,
]);
y.domain(d3.extent(dataset, (d) => d.Time)).nice();

// Chart x-axis
svg
  .append('g')
  .attr('id', 'x-axis')
  .attr('transform', `translate(0, ${height})`)
  .call(d3.axisBottom(x).tickFormat(d3.format('d')));

// Chart y-axis
svg
  .append('g')
  .attr('id', 'y-axis')
  .call(d3.axisLeft(y).tickFormat(d3.timeFormat('%M:%S')));

const tooltip = d3
  .select('#tooltip')
  .style('font-family', 'sans-serif')
  .style('font-size', '.8rem');

// Chart data event handlers
const onMouseOver = (event, d) => {
  tooltip
    .style('opacity', 1)
    .style('display', 'block')
    .html(
      `${d.Name}: ${d.Nationality}<br>Year: ${d.Year}, Time: ${d.Time}` +
        `${d.Doping !== '' ? `<p>${d.Doping}</p>` : ''}`
    )
    .style('left', `${event.x + 20}px`)
    .style('top', `${event.y - 20}px`)
    .attr('data-year', d.Year);
};
const onMouseOut = (event, d) => {
  tooltip.style('opacity', 0).style('display', 'hidden');
};

// Chart grid lines
const yGrid = d3.axisLeft(y).ticks(20).tickFormat('').tickSize(-width);
const yGridGroup = svg.append('g').attr('class', 'grid').call(yGrid);
const xGrid = d3.axisBottom(x).ticks(20).tickFormat('').tickSize(height);
const xGridGroup = svg.append('g').attr('class', 'grid').call(xGrid);

// Chart data
svg
  .selectAll('.dot')
  .data(dataset)
  .enter()
  .append('circle')
  .attr('class', 'dot')
  .attr('fill', (d) => (d.Doping !== '' ? 'steelblue' : 'orange'))
  .attr('r', 6)
  .attr('cx', (d) => x(d.Year))
  .attr('cy', (d) => y(d.Time))
  .attr('data-xvalue', (d) => d.Year)
  .attr('data-yvalue', (d) => d.Time.toISOString())
  .on('mouseover', onMouseOver)
  .on('mouseout', onMouseOut);

// Chart legend dimensions
const legendDimensions = { width: 280, height: 80, padding: 20 };
const legenItem = { width: 15, height: 15 };

// Chart legend
const legend = svg
  .append('g')
  .attr('id', 'legend')
  .attr(
    'transform',
    `translate(${width - legendDimensions.width - margin.right}, ${
      legendDimensions.height
    })`
  );

legend
  .append('rect')
  .attr('width', legendDimensions.width)
  .attr('height', legendDimensions.height)
  .attr('stroke', 'gray')
  .attr('fill', '#fff');

const categories = [
  { label: 'No doping allegations', color: 'steelblue' },
  { label: 'Riders with doping allegations', color: 'orange' },
];

categories.forEach((category, index) => {
  const item = legend
    .append('g')
    .attr(
      'transform',
      `translate(${legendDimensions.padding}, ${
        legendDimensions.padding + index * 30
      })`
    );
  item
    .append('rect')
    .attr('width', legenItem.width)
    .attr('height', legenItem.height)
    .attr('fill', category.color);
  item
    .append('text')
    .attr('x', 25)
    .attr('y', 12)
    .style('font-family', 'sans-serif')
    .style('font-size', '.9ddddrem')
    .text(category.label);
});
