import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllStocks, selectStockData } from "./stockSlice";

function StockOptions(props) {
  const dispatch = useDispatch();

  const stockData = useSelector(selectStockData);

  useEffect(() => {
    dispatch(getAllStocks());
  }, [dispatch]);

  console.log(stockData);

  return <div>
      stockoptions
  </div>;
}

export default StockOptions;
