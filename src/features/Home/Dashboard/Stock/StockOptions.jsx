import React, { useState } from "react";
import StockFilterResults from "./StockFilterResults";
import StockTimePeriod from "./StockTimePeriod";
import Button from "../../../Button/Button";

function StockOptions(props) {
  const [filteredData, setFilteredData] = useState([]);

  const search = (e) => {
    setFilteredData([]);
    setStock({});
    const inputValue = e.target.value.toLowerCase();
    if (inputValue.length >= 3) {
      props.allStocks.forEach((item) => {
        if (item.description.toLowerCase().includes(inputValue)) {
          setFilteredData((filteredData) => [...filteredData, item]);
        }
      });
    }
  };

  const [timePeriod, setTimePeriod] = useState("M");

  const [stock, setStock] = useState({});

  return (
    <div className="stock-options-container">
      <div className="search-time-period-container">
        <input
          type="text"
          placeholder="Find a US company"
          onChange={search}
          className="search-input"
        />
        <StockTimePeriod setTimePeriod={setTimePeriod} />
      </div>
      {!stock.description ? (
        <StockFilterResults results={filteredData} setStock={setStock} />
      ) : (
        <div>{stock.description}</div>
      )}
      <Button
        btnMessage={"Select Stock"}
        onClick={() => props.handleStockSelect(stock, timePeriod)}
      />
    </div>
  );
}

export default StockOptions;
