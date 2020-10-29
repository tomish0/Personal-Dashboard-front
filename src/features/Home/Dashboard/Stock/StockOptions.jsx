import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getStock } from "./stockSlice";
import StockFilterResults from "./StockFilterResults";
import StockTimePeriod from "./StockTimePeriod";

function StockOptions(props) {
  const dispatch = useDispatch();

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

  const handleStockSelect = (value, type) => {
    // eslint-disable-next-line
    if (type === "stock" || stock.symbol && type === "timePeriod") {
    dispatch(
      getStock({
        stock: type === "stock" ? value : stock.symbol,
        timePeriod: type === "timePeriod" ? value : timePeriod,
      })
    );
    }
  };

  return (
    <div className="stock-options-container">
      <div className="search-time-period-container">
        <input
          type="text"
          placeholder="Find a US company..."
          onChange={search}
          style={
            filteredData.length > 0 ? { borderBottom: "2px dashed grey" } : null
          }
        />
        <StockFilterResults
          filteredData={filteredData}
          setStock={setStock}
          handleStockSelect={handleStockSelect}
          setFilteredData={setFilteredData}
        />
      </div>
      <StockTimePeriod
        setTimePeriod={setTimePeriod}
        handleStockSelect={handleStockSelect}
      />
    </div>
  );
}

export default StockOptions;
