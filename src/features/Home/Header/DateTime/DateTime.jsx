import React, { useState, useEffect } from "react";
import "../../../../css/DateTime.css"

function DateTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(function () {
      setTime(new Date().toLocaleString());
    }, 1000);
  }, []);

  return <div className="date-time">{time}</div>;
}

export default DateTime;
