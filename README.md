# Visualize Data with a Scatterplot Graph

[![Deploy to GitHub Pages](https://github.com/BenOnSocial/visualize-data-with-a-scatterplot-graph/actions/workflows/deploy.yml/badge.svg)](https://github.com/BenOnSocial/visualize-data-with-a-scatterplot-graph/actions/workflows/deploy.yml)

This project is part of my [Data Visualization V8 certification from freeCodeCamp](https://www.freecodecamp.org/certification/benonsocial/data-visualization).

## Objective

Build an app that is functionally similar to this: https://scatterplot-graph.freecodecamp.rocks.

Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.

You can use HTML, JavaScript, CSS, and the D3 svg-based visualization library. The tests require axes to be generated using the D3 axis property, which automatically generates ticks along the axis. These ticks are required for passing the D3 tests because their positions are used to determine alignment of graphed elements. You will find information about generating axes at https://d3js.org/d3-axis. Required DOM elements are queried on the moment of each test. If you use a front-end framework (like Vue for example), the test results may be inaccurate for dynamic content. We hope to accommodate them eventually, but these frameworks are not currently supported for D3 projects.

## User Stories

1. I can see a title element that has a corresponding `id="title"`.

2. I can see an x-axis that has a corresponding `id="x-axis"`.

3. I can see a y-axis that has a corresponding `id="y-axis"`.

4. I can see dots, that each have a class of `dot` which represent the data being plotted.

5. Each dot should have the properties `data-xvalue` and `data-yvalue` containing their corresponding `x` and `y` values.

6. The `data-xvalue` and `data-yvalue` of each dot should be within the range of the actual data and in the correct data format. For `data-xvalue`, integers (full years) or `Date` objects are acceptable for test evaluation. For `data-yvalue` (minutes), use `Date` objects.

7. The `data-xvalue` and its corresponding dot should align with the corresponding point/value on the x-axis.

8. The `data-yvalue` and its corresponding dot should align with the corresponding point/value on the y-axis.

9. I can see multiple tick labels on the y-axis with `%M:%S` time format.

10. I can see multiple tick labels on the x-axis that show the year.

11. I can see that the range of the x-axis labels are within the range of the actual x-axis data.

12. I can see that the range of the y-axis labels are within the range of the actual y-axis data.

13. I can see a legend containing descriptive text that has `id="legend"`.

14. I can mouse over an area and see a tooltip with a corresponding `id="tooltip"` which displays more information about the area.

15. My tooltip should have a `data-year` property that corresponds to the `data-xvalue` of the active area.

## Datasets used in this project

- Cyclist Sample Dataset

  https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json
