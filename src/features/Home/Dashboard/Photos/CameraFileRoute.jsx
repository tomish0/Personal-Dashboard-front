import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLogin } from "../../../Login/loginSlice";
import { selectSignUp } from "../../../SignUp/signUpSlice";
import { addPhoto } from "./photosSlice";
import EachPhoto from "./EachPhoto";
import UseCamera from "./UseCamera/UseCamera";
import FindPhoto from "./FindPhoto/FindPhoto";
import Button from "../../../Button/Button";
import plusIcon from "../../../../Assets/Plus_button.png";
import "../../../../css/CameraFileRoute.css";

function CameraFileRoute(props) {
  const dispatch = useDispatch();

  const loginData = useSelector(selectLogin);
  const signUpData = useSelector(selectSignUp);

  const [pictureOn, setPictureOn] = useState(false); // used to turn camera on/off

  const [useCamera, setUseCamera] = useState(false);

  const [photo, setPhoto] = useState("");

  const handleAddPhoto = () => {
    var data = {
      userId:
        loginData.userId.length > 0 ? loginData.userId : signUpData.userId,
      photoTitle:
        loginData.userId.length > 0
          ? `${loginData.userId}${Math.round(Math.random() * 10000)}`
          : `${signUpData.userId}${Math.round(Math.random() * 10000)}`,
      photo: photo,
    };
    dispatch(addPhoto(data));
  };

  return (
    <div>
      {!useCamera ? (
        !pictureOn ? (
          <div onClick={() => setPictureOn(true)}>
            <EachPhoto photo={plusIcon} />
          </div>
        ) : (
          <div className="camera-file-route-result-container">
            <div className="camera-file-route-container">
              <div className="position">
                <div
                  onClick={() => setUseCamera(true)}
                  className="take-new-photo"
                >
                  Take a new phtoto
                </div>
                <div className="find-photo">
                  Or
                  <FindPhoto setPhoto={setPhoto} />
                </div>
              </div>
            </div>
            {photo.length === undefined || photo.length > 0 ? (
              <div className="add-new-photo">
                <EachPhoto photo={photo} />
                <Button btnMessage={"Add Photo"} onClick={handleAddPhoto} />
              </div>
            ) : null}
          </div>
        )
      ) : (
        <UseCamera
          setPhoto={setPhoto}
          setUseCamera={setUseCamera}
          setPictureOn={setPictureOn}
        />
      )}
    </div>
  );
}

export default CameraFileRoute;
