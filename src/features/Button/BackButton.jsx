import React from "react";
import { Link } from "react-router-dom";
import "../../css/BackButton.css"

function BackButton(props) {
  return (
    <div className="back-button">
      <Link to="/Home" className="link">Back</Link>
    </div>
  );
}

export default BackButton;