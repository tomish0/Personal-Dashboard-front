import React, { useRef, useEffect, useState } from "react";
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

  const ref = useRef(null);

  var [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    setContainerWidth(ref.current.offsetWidth);
    window.onresize = () => {
      setContainerWidth(ref.current.offsetWidth);
    };
  }, []);

  return (
    <div className="stock-container" ref={ref}>
      <StockOptions allStocks={stockData.allStocks} />
      {dateValues ? (
        <StockChart
          dateValues={dateValues}
          openValues={openValues}
          closeValues={closeValues}
          highValues={highValues}
          lowValues={lowValues}
          containerWidth={containerWidth}
        />
      ) : null}
    </div>
  );
}

export default Stock;
