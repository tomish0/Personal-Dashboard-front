import React from "react";
import "../../../../css/StockFilterResults.css";

function StockFilterResults(props) {
  const { results, setStock } = props;

  return (
    <div className="stock-filter-results-container">
      {results.map((item, index) => {
        return (
          <div className="result" key={index} onClick={() => setStock(item)}>
            {item.description}
          </div>
        );
      })}
    </div>
  );
}

export default StockFilterResults;
