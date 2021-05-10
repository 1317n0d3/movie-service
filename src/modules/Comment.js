class Comment {
  constructor(filmIndex, name, profession, text, rating) {
    this.filmIndex = filmIndex;
    this.name = name;
    this.profession = profession;
    this.text = text;
    this.rating = rating;
  }

  renderComment(wrapper) {
    wrapper.innerHTML += `
      <div class="film-info__comment">
        <div>${this.name}</div>
        <div>${this.profession}</div>
        <div>${this.text}</div>
        <div>${this.rating}</div>
      </div>
    `;
  }
}

export default Comment;