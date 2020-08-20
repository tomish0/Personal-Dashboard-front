import React, { useState } from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import Button from "../../../../Button/Button";

function UseCamera(props) {
  const [dataUri, setDataUri] = useState(""); // state to store base64 img data
  const [usePhoto, setUsePhoto] = useState(false); // state to remove Use Photo btn if clicked

  const handleTakePhotoAnimationDone = (dataUri) => {
    // put img data into state after photo taken
    setDataUri(dataUri);
  };

  const handleUsePhoto = () => {
    // Use Photo btn clicked to add img data to state in SingleItemUpdate
    props.setPhoto(dataUri);
    // remove Use Photo btn
    props.setUseCamera(false);
    props.setPictureOn(true);
  };

  const handleTakeNew = () => {
    // Take New btn clicked so
    // reset state to no img data
    setDataUri("");
    // add Use Photo btn if previously removed
    setUsePhoto(false);
  };

  const handleCameraCancel = () => {
    // Cancel btn is clicked so
    // turn camera off in SingleItemUpdate
    props.setCameraFile({ camera: false, files: false });
    props.setPictureOn(false);
    // add Use Photo btn if previously removed
    setUsePhoto(false);
  };

  return (
    <div className="use-camera-container">
      {/* if a photo hasn't been added to the state then show the camera */}
      {!dataUri || dataUri.length === 0 ? (
        <div className="camera-container">
          <Camera
            onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
            imageType={IMAGE_TYPES.JPG}
            idealFacingMode={FACING_MODES.ENVIRONMENT}
          />
        </div>
      ) : (
        //   otherwise show the img preview
        <div className="preview-image-container">
          <div
            className="preview-image"
            style={{
              backgroundImage: `url(${dataUri})`,
            }}
          ></div>
          <div className="preview-btns">
            {!usePhoto ? (
              <Button btnMessage={"Use"} onClick={handleUsePhoto} />
            ) : null}
            <Button btnMessage={"Take New"} onClick={handleTakeNew} />
            <Button btnMessage={"Cancel"} onClick={handleCameraCancel} />
          </div>
        </div>
      )}
    </div>
  );
}

export default UseCamera;
