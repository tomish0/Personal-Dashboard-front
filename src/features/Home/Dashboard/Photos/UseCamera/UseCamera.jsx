import React from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

function UseCamera(props) {
  const handleTakePhotoAnimationDone = (dataUri) => {
    // put img data into state after photo taken
    props.setPhoto(dataUri);
    props.setUseCamera(false);
  };

  return (
    <div className="camera-container">
      <Camera
        onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
        imageType={IMAGE_TYPES.JPG}
        idealFacingMode={FACING_MODES.ENVIRONMENT}
        idealResolution = {{width: 280, height: 280}}
      />
    </div>
  );
}

export default UseCamera;
