import React from "react";

export const ImagesList = ({ fetchimages }) => {
  if (fetchimages.length === 0) return null;

  const Image = (imageData) => {
    return (
      <div className="col card-hover">
        <div className="card card-video mb-5">
          <img
            src={imageData.image_link}
            height="240px"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    );
  };

  const Images = fetchimages.map((imageData) => Image(imageData));

  return (
    <div className="video-item row row-cols-1 row-cols-md-3 g-4">{Images}</div>
  );
};
