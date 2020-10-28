import React from "react";
import Plot from "react-plotly.js";
import "../../../../css/StockChart.css";

function StockChart(props) {
  const { dateValues, openValues, closeValues, highValues, lowValues, containerWidth } = props;

  const dates = [];
  dateValues.forEach((date) => {
    var item = new Date(date * 1000);
    dates.push(item);
  });

  var low = lowValues[0];
  var high = highValues[0];
  highValues.forEach((value) => {
    if (value >= high) {
      high = value;
    }
  });
  lowValues.forEach((value) => {
    if (value <= low) {
      low = value;
    }
  });

  var data = [
    {
      x: dates,
      close: closeValues,
      decreasing: { line: { color: "#7F7F7F" } },
      high: highValues,
      increasing: { line: { color: "#00BFFF" } },
      line: { color: "#00BFFF" },
      low: lowValues,
      open: openValues,
      type: "candlestick",
      xaxis: "x",
      yaxis: "y",
    },
  ];

  var layout = {
    // plot_bgcolor: "rgb(1,1,1)",
    dragmode: "zoom",
    margin: {
      r: 10,
      t: 25,
      b: 40,
      l: 50,
    },
    showlegend: false,
    xaxis: {
      autorange: true,
      domain: [0, 1],
      range: [dates[0], dates[dates.length - 1]],
      rangeslider: {
        range: [dates[0], dates[dateValues.length - 1]],
      },
      type: "date",
      color: "rgb(200, 200, 200)",
    },
    yaxis: {
      autorange: true,
      domain: [0, 1],
      range: [low, high],
      type: "linear",
      color: "rgb(200, 200, 200)",
    },
    width: containerWidth * 0.9,
    height: containerWidth / 1.7,
    autoresize: true
  };

  var config = { displayModeBar: false };

  return (
    <Plot
      data={data}
      layout={layout}
      config={config}
      className={"stock-chart"}
    />
  );
}

export default StockChart;
