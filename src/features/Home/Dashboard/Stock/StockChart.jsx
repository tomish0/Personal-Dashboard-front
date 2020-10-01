import React from "react";
import { ChartCanvas, Chart } from "react-stockcharts";
import { CandlestickSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";

import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last } from "react-stockcharts/lib/utils";

function StockChart(props) {
  const { type, data: initialData, ratio } = props;

  console.log(initialData);

  const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(
    (d) => d.date
  );
  const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(
    initialData
  );
  const xExtents = [xAccessor(last(data)), xAccessor(last(data)) - 100];

//   StockChart = fitWidth(StockChart);

  console.log(xExtents);

  var height = 500

  var width = 2 * height
  return (
    <ChartCanvas
      height={height}
      ratio={2}
      width={width}
      margin={{ left: 30, right: 0, top: 0, bottom: 30 }}
      type={"hybrid"}
      seriesName="MSFT"
      data={data}
      xScale={xScale}
      xAccessor={xAccessor}
      displayXAccessor={displayXAccessor}
      xExtents={xExtents}
    >
      <Chart id={1} yExtents={(d) => [d.high, d.low]}>
        <XAxis axisAt="bottom" orient="bottom" ticks={6} />
        <YAxis axisAt="left" orient="left" ticks={5} />
        <CandlestickSeries />
      </Chart>
    </ChartCanvas>
  );
}

export default StockChart;
