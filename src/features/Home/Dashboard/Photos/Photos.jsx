import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPhotos } from "./photosSlice";
import CameraFileRoute from "./CameraFileRoute";
import EachPhoto from "./EachPhoto";
import "../../../../css/Photos.css";

function Photos(props) {
  const photosData = useSelector(selectPhotos);
  return (
    <div>
      <Link to="/Home">Back</Link>
      <div className="photos-container">
        {photosData.allPhotos
          ? photosData.allPhotos.map((photo, index) => {
              return <EachPhoto photo={photo.photo} key={index} />;
            })
          : null}

        <CameraFileRoute />
      </div>
    </div>
  );
}

export default Photos;
