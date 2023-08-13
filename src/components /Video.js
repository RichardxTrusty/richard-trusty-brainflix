import React from "react";

function Video(props) {
  return (
    <div className="video">
      <div className="video_container">
        <video
          className="current__video"
          width="450"
          height="255"
          poster={props.content.image}></video>
      </div>
    </div>
  );
}

export default Video;
