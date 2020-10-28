import React from "react";

import StockChart from "./StockChart";
import StockOptions from "./StockOptions";
import "../../../../css/Stock.css";

function Stock(props) {
  const { stockData } = props;

  const dateValues = stockData.stock.t;
  const openValues = stockData.stock.o;
  const closeValues = stockData.stock.c;
  const highValues = stockData.stock.h;
  const lowValues = stockData.stock.l;
  
  return (
    <div className="stock-container">
      <StockOptions
        allStocks={stockData.allStocks}
      />
      {dateValues? (
        <StockChart
          dateValues={dateValues}
          openValues={openValues}
          closeValues={closeValues}
          highValues={highValues}
          lowValues={lowValues}
        />
      ) : null}
    </div>
  );
}

export default Stock;
