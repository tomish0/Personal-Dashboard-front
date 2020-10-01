import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStock, selectStockData } from "./stockSlice";
import BackButton from "../../../Button/BackButton";
import "../../../../css/Sport.css";
import StockChart from "./StockChart";
import { TypeChooser } from "react-stockcharts/lib/helper";

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
  }, []);

  var arr = [];

  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      if (key === "o") {
        data[key].forEach((item) => {
          var initialObject = new Object();
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
      {stockData.stock.o ? (
        <TypeChooser>
          {(type) => <StockChart data={arr} type={type} />}
        </TypeChooser>
      ) : null}
    </div>
  );
}

export default Stock;
