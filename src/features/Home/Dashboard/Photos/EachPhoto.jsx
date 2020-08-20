import React from "react";
import "../../../../css/EachPhoto.css"

function EachPhoto(props) {
  return (
    <div className='image-container'>
      <img src={props.photo} className="image"/>
    </div>
  );
}

export default EachPhoto;
