import React, { useState, useEffect } from "react";
import CameraFileRoute from "./CameraFileRoute";
import EachPhoto from "./EachPhoto";

function AllPhotos(props) {
  var sixImages = ["plus", null, null, null, null, null];
  props.photos.forEach((photo) => {
    sixImages.unshift(photo.photo);
  });
  var newArr = sixImages.slice(0, 6);

  useEffect(() => {
    setAddPicture(false);
  }, [props.addedPhoto]);

  const [addPicture, setAddPicture] = useState(false);

  return (
    <div>
      {!addPicture ? (
        <div className="photos-container">
          {newArr.map((photo, index) => {
            return (
              <div key={index}>
                <EachPhoto
                  photo={photo}
                  setAddPicture={setAddPicture}
                  key={index}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <CameraFileRoute setAddPicture={setAddPicture} />
      )}
    </div>
  );
}

export default AllPhotos;
