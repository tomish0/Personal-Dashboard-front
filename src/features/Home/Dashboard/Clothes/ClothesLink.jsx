import React from "react";
import { PieChart } from "react-minimal-pie-chart";

import data from "../../../../Assets/clothesPercentages.json";

function ClothesLink() {
  return (
    <div>
      <PieChart
        data={[
          { title: 'jumper', value: data.jumper.percentage, color: "#E38627" },
          { title: 'hoodie', value: data.hoodie.percentage, color: "#000000" },
          { title: 'jacket', value: data.jacket.percentage, color: "#222299" },
          { title: 'sweater', value: data.sweater.percentage, color: "#123456" },
          { title: 'blazer', value: data.blazer.percentage, color: "#999999" },
          { title: 'raincoat', value: data.raincoat.percentage, color: "#E55533" },

        ]}
        label={({ dataEntry }) => dataEntry.title}
      />
    </div>
  );
}

export default ClothesLink;
