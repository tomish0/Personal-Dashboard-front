import React from "react";

function StockTimePeriod(props) {
  const handleSetTimePeriod = (e) => {
    props.setTimePeriod(e.target.value)
  };

  return (
    <select name="stock-time-period" id="stock-time-period" onChange={handleSetTimePeriod}>
      <option value="M">Month</option>
      <option value="W">Week</option>
      <option value="D">Day</option>
      <option value="60">Hour</option>
    </select>
  );
}

export default StockTimePeriod;
