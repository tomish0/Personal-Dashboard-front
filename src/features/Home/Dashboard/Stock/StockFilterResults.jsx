import React from "react";
import "../../../../css/StockFilterResults.css"

function StockFilterResults(props) {
  return (
    <div className="stock-filter-results-container">
      {props.results.map((item, index) => {
        return (
          <div className="result" key={index} onClick={() => props.setStock(item)}>
            {item.description}
          </div>
        );
      })}
    </div>
  );
}

export default StockFilterResults;
