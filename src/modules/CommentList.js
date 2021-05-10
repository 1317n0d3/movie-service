class CommentList {
  constructor(filmIndex) {
    this.filmIndex = filmIndex;
    this.comments = [];
  }

  renderComments(wrapper) {
    this.comments.forEach((item) => {
      item.renderComment(wrapper);
    });
  }
}

export default CommentList;