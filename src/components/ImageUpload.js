import React, { useState, useEffect } from "react";
import { CloudinaryContext, Image } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from "./CloudinaryService";

const ImageUpload = (props) => {
  const beginUpload = (tag) => {
    const uploadOptions = {
      cloudName: "geddydukes",
      tags: [tag, "anImage"],
      uploadPreset: "upload",
    };
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        console.log(photos);
        if (photos.event === "success") {
          props.setImage(photos.info.public_id);
        }
      } else {
        console.log(error);
      }
    });
  };

  //   useEffect(() => {
  //     fetchPhotos("image", setImages);
  //   }, []);

  return (
    <CloudinaryContext cloudName="geddydukes">
      <div className="images">
        <button onClick={() => beginUpload("image")}>Upload Image</button>
      </div>
    </CloudinaryContext>
  );
};

export default ImageUpload;
