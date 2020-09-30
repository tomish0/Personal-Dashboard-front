import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStock, selectStockData } from "./stockSlice";
import BackButton from "../../../Button/BackButton";
import "../../../../css/Sport.css";

function Stock() {
  const dispatch = useDispatch();

  const stockData = useSelector(selectStockData);

  console.log(stockData);

  useEffect(() => {
    dispatch(
      getStock({
        stock: "AAPL",
        timePeriod: "W",
      })
    );
  }, []);

  return (
    <div className="sport-container">
      <BackButton link={"/Home"} />
      <h1>Stock</h1>
    </div>
  );
}

export default Stock;
