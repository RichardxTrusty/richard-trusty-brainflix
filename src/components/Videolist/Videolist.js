/* Loop or iterate over Gallery data and create component of gallery videos 
- Use props to pass down video array from videos.json */

// 1.)Gallery Section - to display a list of videos
// 2.)Iterate over a list of gallery videos assocaited - Will be requred to create a loop
// 3.)Show the gallery Component
import React from "react";
import "./Videolist.scss";

function Videolist(props) {
  return (
    <div className="videoList">
      <h5 className="videoList__header">NEXT VIDEO</h5>
      {props.list.map((video) => {
        if (video.title === "Become A Travel Pro In One Easy Lesson") {
          return (
            <div
              key={video.id}
              onClick={() => props.clickHandler(video.id)}
              className="videoList-inner">
              <div className="videoList-wrapper">
                <img
                  className="videoList__thumbnail--large"
                  src={video.image}
                  alt="images as thumbnails for the videos"></img>
              </div>
              <div className="videoList-inner-block">
                <h4 className="videoList-inner-block__title">
                  {video.title} &nbsp;&nbsp;
                </h4>
                <p className="videoList-inner-block__channel">
                  {video.channel}
                </p>
              </div>
            </div>
          );
        } else if (
          video.title === "Les Houches The Hidden Gem Of The Chamonix"
        ) {
          return (
            <div
              key={video.id}
              onClick={() => props.clickHandler(video.id)}
              className="videoList-inner">
              <div className="videoList-wrapper">
                <img
                  className="videoList__thumbnail--rotate"
                  src={video.image}
                  alt="images as thumbnails for the videos"></img>
              </div>
              <div className="videoList-inner-block">
                <h4 className="videoList-inner-block__title">
                  {video.title} &nbsp;&nbsp;
                </h4>
                <p className="videoList-inner-block__channel">
                  {video.channel}
                </p>
              </div>
            </div>
          );
        } else {
          return (
            <div
              key={video.id}
              onClick={() => props.clickHandler(video.id)}
              className="videoList-inner">
              <div className="videoList-wrapper">
                <img
                  className="videoList__thumbnail"
                  src={video.image}
                  alt="images as thumbnails for the videos"></img>
              </div>
              <div className="videoList-inner-block">
                <h4 className="videoList-inner-block__title">
                  {video.title} &nbsp;&nbsp;
                </h4>
                <p className="videoList-inner-block__channel">
                  {video.channel}
                </p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Videolist;
