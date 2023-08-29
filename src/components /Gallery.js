/* Loop or iterate over Gallery data and create component of gallery videos 
- Use props to pass down video array from videos.json */

// 1.)Gallery Section - to display a list of videos
// 2.)Iterate over a list of gallery videos assocaited - Will be requred to create a loop
// 3.)Show the gallery Component
import React from "react";

function Gallery(props) {
  return (
    <div className="gallery">
      <h5 className="gallery-header">NEXT VIDEO</h5>
      {props.list.map((video) => {
        if (video.title === "Become A Travel Pro In One Easy Lesson") {
          return (
            <div
              key={video.id}
              onClick={() => props.clickHandler(video.id)}
              className="video">
              <div className="video___thumbnail-container">
                <img
                  className="video__thumbnail--img"
                  src={video.image}
                  alt="Thumbnail clip of video"></img>
              </div>
              <div className="video__title-container">
                <h4 className="video__title--text">{video.title}</h4>
                <p className="video__title--channel">{video.channel}</p>
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
              className="video">
              <div className="video___thumbnail-container">
                <img
                  className="video__thumbnail--img"
                  src={video.image}
                  alt="Thumbnail clip of video"></img>
              </div>
              <div className="video__title-container">
                <h4 className="video__title--text">{video.title}</h4>
                <p className="video__title--channel">{video.channel}</p>
              </div>
            </div>
          );
        } else {
          return (
            <div
              key={video.id}
              onClick={() => props.clickHandler(video.id)}
              className="video">
              <div className="video___thumbnail-container">
                <img
                  className="video__thumbnail--img"
                  src={video.image}
                  alt="Thumbnail clip of video"></img>
              </div>
              <div className="video__title-container">
                <h4 className="video__title--text">{video.title}</h4>
                <p className="video__title--channel">{video.channel}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
export default Gallery;
