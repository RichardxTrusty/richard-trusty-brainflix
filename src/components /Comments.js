function Comments(props) {
  return (
    <>
      {props.comments.map((comment) => {
        return (
          <div key={comment.id} className="comments-container">
            <div className="comments-image"></div>
            <p className="comments-name">{comment.name}</p>
            <p className="comments-time">{comment.timestamp}</p>
            <p className="comments-content">{comment.comment}</p>
          </div>
        );
      })}
    </>
  );
}

export default Comments;

/* Loop or iterate over comments data and create comments component  */

// 1.)Comment Section - to display a list of comments components
// 2.)Iterate over a list of comment assocaited
// 3.)Show the Comment Component
