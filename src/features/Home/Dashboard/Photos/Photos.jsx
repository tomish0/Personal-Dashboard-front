import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectLogin } from "../../../Login/loginSlice";
import { selectSignUp } from "../../../SignUp/signUpSlice";
import { getPhoto, selectPhotos } from "./photosSlice";
import AllPhotos from "./AllPhotos"
import BackButton from "../../../Button/BackButton";
import "../../../../css/Photos.css";

function Photos() {
  const dispatch = useDispatch();

  const photosData = useSelector(selectPhotos);
  const loginData = useSelector(selectLogin);
  const signUpData = useSelector(selectSignUp);

  useEffect(() => {
    window.scrollTo(0, 0);
    const userId =
      loginData.userId.length > 0 ? loginData.userId : signUpData.userId;
    dispatch(getPhoto(userId));
  }, [dispatch, loginData.userId, signUpData.userId, photosData.addSuccess]);

  return (
    <div>
      <BackButton link={'/Home'}/>
      <AllPhotos photos={photosData.allPhotos} addedPhoto={photosData.addSuccess}/>
    </div>
  );
}

export default Photos;
