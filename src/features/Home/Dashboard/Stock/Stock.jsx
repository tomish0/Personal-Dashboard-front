import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStock, getAllStocks, selectStockData } from "./stockSlice";
import StockChart from "./StockChart";
import StockOptions from "./StockOptions";
import BackButton from "../../../Button/BackButton";
import "../../../../css/Sport.css";

function Stock() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStocks());
  }, [dispatch]);

  const handleStockSelect = (stock, timePeriod) => {
    if (stock.symbol) {
      dispatch(
        getStock({
          stock: stock.symbol,
          timePeriod: timePeriod,
        })
      );
    }
  };

  const stockData = useSelector(selectStockData);

  const data = stockData.stock;

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
    <div className="stock-container">
      <BackButton link={"/Home"} />
      <h1>US Stock Market</h1>
      <StockOptions
        allStocks={stockData.allStocks}
        handleStockSelect={handleStockSelect}
      />
      {stockData.stock.o ? <StockChart data={arr} /> : null}
    </div>
  );
}

export default Stock;
