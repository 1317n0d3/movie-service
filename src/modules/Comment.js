class Comment{
  constructor(filmIndex, name, profession, text, filmRating){
    this.filmIndex = filmIndex;
    this.name = name;
    this.profession = profession;
    this.text = text;
    this.filmRating = filmRating;
  }

  renderComment(filmWrap){
    filmWrap.innerHTML = `hello`;
  }
}