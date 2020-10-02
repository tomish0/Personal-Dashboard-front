import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStock, selectStockData } from "./stockSlice";
import StockChart from "./StockChart";
import StockOptions from "./StockOptions";
import BackButton from "../../../Button/BackButton";
import "../../../../css/Sport.css";

function Stock() {
  const dispatch = useDispatch();

  const stockData = useSelector(selectStockData);

  const data = stockData.stock;

  useEffect(() => {
    dispatch(
      getStock({
        stock: "AAPL",
        timePeriod: "W",
      })
    );
    // var intervalRequest = setInterval(function () {
    //   dispatch(
    //     getStock({
    //       stock: "AAPL",
    //       timePeriod: "W",
    //     })
    //   );
    // }, 5000);
    // return function () {
    //   clearInterval(intervalRequest);
    // };
  }, [dispatch]);

  var arr = [];

  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      if (key === "o") {
        data[key].forEach((item) => {
          var initialObject = {};
          initialObject.open = item;
          arr.push(initialObject);
        });
      }
      if (key !== "o" && key !== "s") {
        data[key].forEach((item, index) => {
          if (key === "c") {
            key = "close";
          }
          if (key === "h") {
            key = "high";
          }
          if (key === "l") {
            key = "low";
          }
          if (key === "v") {
            key = "volume";
          }
          if (key === "t") {
            item = new Date(item);
            key = "date";
          }
          if (key === "date") {
            item = new Date(item * 1000);
          }
          arr[index][key] = item;
        });
      }
    }
  }

  return (
    <div className="sport-container">
      <BackButton link={"/Home"} />
      <h1>Stocks</h1>
      <StockOptions />
      {stockData.stock.o ? <StockChart data={arr} /> : null}
    </div>
  );
}

export default Stock;
