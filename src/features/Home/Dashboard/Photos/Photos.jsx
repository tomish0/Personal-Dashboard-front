import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { selectPhotos } from "./photosSlice";
import CameraFileRoute from "./CameraFileRoute";

function Photos(props) {
  return (
    <div>
      <Link to="/Home">Back</Link>
      photos
      <CameraFileRoute />
    </div>
  );
}

export default Photos;
