import React from "react";

function StockTimePeriod(props) {
  const { setTimePeriod, handleStockSelect } = props;

  return (
    <select
      className="stock-time-period"
      onChange={(e) => {
        handleStockSelect(e.target.value, "timePeriod");
        setTimePeriod(e.target.value);
      }}
    >
      <option value="M">Month</option>
      <option value="W">Week</option>
      <option value="D">Day</option>
      <option value="60">Hour</option>
    </select>
  );
}

export default StockTimePeriod;
