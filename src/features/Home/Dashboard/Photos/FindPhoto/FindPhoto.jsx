import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import "../../../../../css/FindPhoto.css";

function FindPhoto(props) {
  const handleNewPhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = () => {
        var image = new Image();
        image.src = reader.result;
        image.onload = function () {
          image.width = 280;
          image.height = 280;
        };
      };
      reader.onloadend = () => {
        props.setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        id="file-upload"
        accept="image/*"
        onChange={handleNewPhoto}
        onClick={() => {
          props.setPhoto("");
          props.setUseCamera(false);
        }}
      />
      <label htmlFor="file-upload" className="custom-file-upload">
        <FontAwesomeIcon icon={faUpload} /> Custom Upload
      </label>
    </div>
  );
}

export default FindPhoto;
