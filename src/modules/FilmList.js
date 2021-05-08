import Film from './Film';
import { WRAP } from "../constants/wrap";

class FilmList{
  constructor(){
    this.filmList = [];
    this.loadFilmList();
  }

  addFilm(data){
    this.filmList.push(this.createFilm(data));
  }

  createFilm(data){
    let {id, title, country, genre, director, filmScript, producer, operator,
      composer, budget, worldFees, ageRating, duration, releaseDate, poster} = data;

    return new Film(id, title, country, genre, director, filmScript, producer, operator,
      composer, budget, worldFees, ageRating, duration, releaseDate, poster);
  }

  deleteFilm(id){
    this.filmList = this.filmList.filter((value) => value.id !== id);
  }


  //-------------------------------------------------------------------
  // Local storage ----------------------------------------------------
  //-------------------------------------------------------------------

  loadFilmList(){
    const storageData = JSON.parse(localStorage.getItem('films'));

    if(storageData){
      storageData.forEach((item) => {
        this.filmList.push(this.createFilm(item));
      });
    }
  }

  saveFilmList(){
    localStorage.setItem('films', JSON.stringify(this.filmList));
  }

  //-------------------------------------------------------------------
  //-------------------------------------------------------------------


  generateItemId(){
    if(this.filmList.length > 0) {
      return this.filmList[this.filmList.length - 1].id + 1;
    }
    return this.filmList.length;
  }

  getFilmList() {
    return this.filmList;
  }

  renderFilmInfo(id, wrapper){
    this.filmList.filter((value) => value.id === id)[0].renderFilmInfo(wrapper);
  }

  render(){
    this.saveFilmList();

    WRAP.innerHTML = ``;
    this.filmList.forEach((item) => {
      item.render();
    });
  }

  renderWithoutSaving(){
    WRAP.innerHTML = ``;
    this.filmList.forEach((item) => {
      item.render();
    });
  }
}

export  default FilmList;