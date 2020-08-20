import React, { useState } from "react";
import sportData from "../../../../Assets/sportData.json";
import BackButton from "../../../Button/BackButton"
import "../../../../css/Sport.css";

function Sport() {
  const [beatenTeams, setBeatenTeams] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    const beatenTeams = [];
    sportData.forEach((item) => {
      if (item.H.toLowerCase() === value && item.FTR === "H") {
        beatenTeams.push(item.A);
      }
      if (item.A.toLowerCase() === value && item.FTR === "A") {
        beatenTeams.push(item.H);
      }
    });
    setBeatenTeams(beatenTeams);
  };

  return (
    <div className="sport-container">
      <BackButton />
      <h1>Champion's League Challenge</h1>
      <div className='input-result-container'>
        <input
          type="text"
          placeholder="Input winning team..."
          onChange={handleChange}
          className="sport-input"
        />
        <div className="beaten-teams">
          {beatenTeams.map((team, index) => {
            return (
              <div key={index} className='each-team'>
                Team {index + 1}: <span>{team}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sport;
