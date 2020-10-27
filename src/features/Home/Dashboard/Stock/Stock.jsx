import React from "react";
import { useDispatch } from "react-redux";
import { getStock } from "./stockSlice";
import StockChart from "./StockChart";
import StockOptions from "./StockOptions";
import "../../../../css/Sport.css";

function Stock(props) {
  const { stockData } = props;

  const dispatch = useDispatch();

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

  const dateValues = stockData.stock.t;
  const openValues = stockData.stock.o;
  const closeValues = stockData.stock.c;
  const highValues = stockData.stock.h;
  const lowValues = stockData.stock.l;
  
  return (
    <div className="stock-container">
      <StockOptions
        allStocks={stockData.allStocks}
        handleStockSelect={handleStockSelect}
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
