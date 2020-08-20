import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPhotos } from "./photosSlice";
import CameraFileRoute from "./CameraFileRoute";
import EachPhoto from "./EachPhoto";

function Photos(props) {
  const photosData = useSelector(selectPhotos);

  console.log(photosData);
  return (
    <div>
      <Link to="/Home">Back</Link>
      {photosData.allPhotos
        ? photosData.allPhotos.map((photo, index) => {
            return <EachPhoto photo={photo.photo} key={index} />;
          })
        : null}
      <CameraFileRoute />
    </div>
  );
}

export default Photos;
