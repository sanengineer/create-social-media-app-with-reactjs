import React from "react";

export const VideosList = ({ fetchvideos }) => {
  if (fetchvideos.length === 0) return null;

  const Video = (videoData) => {
    return (
      <div className="col card-hover">
        <div className="card card-video">
          <video src={videoData.video_link} height="240px"></video>
        </div>
      </div>
    );
  };

  const Videos = fetchvideos.map((videoData) => Video(videoData));

  return (
    <div className="video-item row row-cols-1 row-cols-md-3 g-4">{Videos}</div>
  );
};
