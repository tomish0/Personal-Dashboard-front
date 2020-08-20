import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import data from "../../../../Assets/clothesPercentages.json";
import "../../../../css/ClothesLink.css";

function ClothesLink() {
  return (
    <div className="clothes-link-container">
      <div className="pie-chart">
        <PieChart
          data={[
            {
              title: "jumper",
              value: data.jumper.percentage,
              color: "#E38627",
            },
            {
              title: "hoodie",
              value: data.hoodie.percentage,
              color: "#A11212",
            },
            {
              title: "jacket",
              value: data.jacket.percentage,
              color: "#222299",
            },
            {
              title: "sweater",
              value: data.sweater.percentage,
              color: "#123456",
            },
            {
              title: "blazer",
              value: data.blazer.percentage,
              color: "#999999",
            },
            {
              title: "raincoat",
              value: data.raincoat.percentage,
              color: "#E55533",
            },
          ]}
          label={({ dataEntry }) => dataEntry.title}
          labelStyle={(index) => ({
            fontSize: "8px",
          })}
          radius={17}
          labelPosition={120}
        />
      </div>
    </div>
  );
}

export default ClothesLink;
