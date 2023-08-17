import videoComments from "../data/video-details.json";
console.log(videoComments);

const videoID = "84e96018-4022-434e-80bf-000ce4cd12b8";
function Comments(props) {
  const commentsData = videoComments.find((element) => element.id == videoID);

  return (
    <section>
      {commentsData.comments.map((element) => (
        <>
          <div className="posted-comments">
            <div className="posted-comment__pic">
              <div className="posted-comment__name">
                <span>{element.name}</span>
                <div className="posted-comment__content">
                  <span>{element.comment}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </section>
  );
}

export default Comments;
{
  /* Loop or iterate over comments data and create comments component  */
}
// 1.)Comment Section - to display a list of comments components
// 2.)Iterate over a list of comment assocaited with a vid
// 3.)Show the Comment Component
