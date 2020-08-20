import React from "react";

function FindPhoto(props) {
  const handleNewPhoto = (e) => {
    const file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      props.setPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      find photo
      <input type="file" accept="image/*" onChange={handleNewPhoto} />
    </div>
  );
}

export default FindPhoto;
