import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLogin } from "../../../Login/loginSlice";
import { selectSignUp } from "../../../SignUp/signUpSlice";
import { addPhoto } from "./photosSlice";
import UseCamera from "./UseCamera/UseCamera";
import FindPhoto from "./FindPhoto/FindPhoto";
import Button from "../../../Button/Button";
import addPicture from "../../../../Assets/Add_picture.png";
import plusIcon from "../../../../Assets/Plus_button.png";

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
          <div
            className="img-add-picture-container"
            onClick={() => setPictureOn(true)}
          >
            <img src={addPicture} />
            <img src={plusIcon} />
          </div>
        ) : (
          <div>
            <img src={addPicture} />
            <div onClick={() => setUseCamera(true)}>Take a new phtoto</div>
            <div>
              Select image from your device
              <FindPhoto setPhoto={setPhoto} />
            </div>
            {photo.length === undefined || photo.length > 0 ? (
              <div>
                <Button btnMessage={"Add Photo"} onClick={handleAddPhoto} />
                <img src={photo} alt="" />
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
