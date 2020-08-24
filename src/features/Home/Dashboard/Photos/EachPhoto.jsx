import React from "react";
import "../../../../css/EachPhoto.css";
import addPicture from "../../../../Assets/Add_picture.png";
import plusIcon from "../../../../Assets/Plus_button.png";

function EachPhoto(props) {
  return (
    <div
      style={{ backgroundImage: `url(${addPicture})` }}
      className="image-container"
    >
      {props.photo ? (
        <img
          onClick={
            props.photo === "plus" ? () => props.setAddPicture(true) : null
          }
          src={props.photo === "plus" ? plusIcon : props.photo}
          alt="each-img-found-for-user"
          className="image"
        />
      ) : null}
    </div>
  );
}

export default EachPhoto;
