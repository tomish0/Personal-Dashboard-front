import React from "react";
import { ChartCanvas, Chart } from "react-stockcharts";
import { CandlestickSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
import { last } from "react-stockcharts/lib/utils";

function StockChart(props) {
  const { data: initialData } = props;

  const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(
    (d) => d.date
  );
  const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(
    initialData
  );

  const end = xAccessor(data[Math.max(0, data.length - 150)]);

  const xExtents = [xAccessor(last(data)), end];


  var height = 400

  var width = 2 * height


  return (
    <ChartCanvas
      height={height}
      ratio={4}
      width={width}
      margin={{ left: 30, right: 30, top: 0, bottom: 30 }}
      type={"hybrid"}
      seriesName="MSFT"
      data={data}
      xScale={xScale}
      xAccessor={xAccessor}
      displayXAccessor={displayXAccessor}
      xExtents={xExtents}
    >
      <Chart id={1} yExtents={(d) => [d.high, d.low]}>
        <XAxis axisAt="bottom" orient="bottom" ticks={8} />
        <YAxis axisAt="left" orient="left" ticks={5} />
        <CandlestickSeries />
      </Chart>
    </ChartCanvas>
  );

}

export default StockChart;
