import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectLogin } from "../../../Login/loginSlice";
import { selectSignUp } from "../../../SignUp/signUpSlice";
import { getPhoto, selectPhotos } from "./photosSlice";
import CameraFileRoute from "./CameraFileRoute";
import EachPhoto from "./EachPhoto";
import BackButton from "../../../Button/BackButton";
import "../../../../css/Photos.css";

function Photos(props) {
  const dispatch = useDispatch();

  const photosData = useSelector(selectPhotos);
  const loginData = useSelector(selectLogin);
  const signUpData = useSelector(selectSignUp);

  useEffect(() => {
    const userId =
      loginData.userId.length > 0 ? loginData.userId : signUpData.userId;
    dispatch(getPhoto(userId));
  }, [dispatch, loginData.userId, signUpData.userId]);

  return (
    <div>
      <BackButton />
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
