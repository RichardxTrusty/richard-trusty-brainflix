import views from "../assets/Icons/views.svg";
import likes from "../assets/Icons/likes.svg";

function VideoInfo(props) {
  return (
    <div className="info">
      <h1 className="info__title">{props.content.title}</h1>
      <div className="info__container">
        <div className="info__user">
          <p className="info__user-content">By {props.content.channel}</p>
          <p className="info__user-date"></p>
        </div>
        <div className="info__social">
          <p className="info__social-viewcount">
            <img
              className="info__social-viewIcon"
              src={views}
              alt="View Count Icon"
            />
            {props.content.views}
          </p>
          <p className="info__social-likecount">
            <img
              className="info__social-likeIcon"
              src={likes}
              alt="Likes Count Icon"
            />
            {props.content.likes}
          </p>
        </div>
      </div>
      <p className="info__description">{props.content.description}</p>
      <h4>3 Comments</h4>
    </div>
  );
}

export default VideoInfo;
