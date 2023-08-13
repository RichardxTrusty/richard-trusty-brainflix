function CommentForm() {
  return (
    <form className="comments" action="submit">
      <div className="comment__mohan-img"></div>
      <label className="comment__label" htmlFor="text">
        JOIN THE CONVERSATION
      </label>
      <textarea
        className="comments__input"
        id="text"
        placeholder="Add a new comment"></textarea>
      <button className="comments__button">COMMENT</button>
    </form>
  );
}

export default CommentForm;
