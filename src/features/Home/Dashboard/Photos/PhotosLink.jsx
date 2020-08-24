import React from "react";
import picContainer from "../../../../Assets/Container.png";
import "../../../../css/PhotosLink.css";

function PhotosLink() {
  return (
    <div className="photo-link-container">
      <div>
        <div className="img-container">
          <img src={picContainer} alt='icon-img-container'/>
        </div>
        <div className="img-container">
          <img src={picContainer} alt='icon-img-container'/> 
        </div>
      </div>
      <div>
        <div className="img-container">
          <img src={picContainer} alt='icon-img-container'/>
        </div>
        <div className="img-container">
          <img src={picContainer} alt='icon-img-container'/>
        </div>
      </div>
    </div>
  );
}

export default PhotosLink;
