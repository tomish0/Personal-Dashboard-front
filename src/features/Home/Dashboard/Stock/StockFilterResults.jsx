import React from "react";
import "../../../../css/StockFilterResults.css";

function StockFilterResults(props) {
  const { filteredData, setStock, handleStockSelect, setFilteredData } = props;

  return (
    <ul className="stock-filter-results">
      {filteredData.map((item, index) => {
        return (
          <li
            className="result"
            key={index}
            onClick={() => {
              handleStockSelect(item.symbol, "stock");
              setStock(item);
              setFilteredData([item])
            }}
          >
            {item.description}
          </li>
        );
      })}
    </ul>
  );
}

export default StockFilterResults;
