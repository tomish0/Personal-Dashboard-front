import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { selectLogin } from "../../../Login/loginSlice";
import { selectSignUp } from "../../../SignUp/signUpSlice";
import { addPhoto } from "./photosSlice";
import EachPhoto from "./EachPhoto";
import UseCamera from "./UseCamera/UseCamera";
import FindPhoto from "./FindPhoto/FindPhoto";
import Button from "../../../Button/Button";
import "../../../../css/CameraFileRoute.css";

function CameraFileRoute() {
  const dispatch = useDispatch();

  const loginData = useSelector(selectLogin);
  const signUpData = useSelector(selectSignUp);

  const [useCamera, setUseCamera] = useState(false);

  const [photo, setPhoto] = useState("");

  const handleAddPhoto = () => {
    var data = {
      userId:
        loginData.userId.length > 0 ? loginData.userId : signUpData.userId,
      photoTitle:
        loginData.userId.length > 0
          ? `${loginData.userId}${Math.round(Math.random() * 100000)}`
          : `${signUpData.userId}${Math.round(Math.random() * 100000)}`,
      photo: photo,
    };
    dispatch(addPhoto(data));
  };

  return (
    <div>
      <div className="camera-file-route-result-container">
        <div className="camera-file-route-container">
          {useCamera ? (
            <UseCamera setPhoto={setPhoto} setUseCamera={setUseCamera} />
          ) : null}
          {photo.length === undefined || photo.length > 0 ? (
            <div className="add-new-photo">
              <EachPhoto photo={photo} />
              <Button
                btnMessage={"Add Photo"}
                onClick={() => handleAddPhoto()}
              />
            </div>
          ) : null}
          <div className="upload-camera">
            <div
              onClick={() => {
                setUseCamera(true);
                setPhoto("");
              }}
              className="take-new-photo"
            >
              <FontAwesomeIcon icon={faCamera} /> Take a new photo
            </div>
            <div>Or</div>
            <div className="find-photo">
              <FindPhoto setPhoto={setPhoto} setUseCamera={setUseCamera} />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default CameraFileRoute;
