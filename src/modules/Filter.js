import { WRAP } from "../constants/wrap";

class Filter {
  constructor(){
    this.countries = [];
    this.genres = [];
  }

  updateCountries(filmList){
    this.countries = [];
    filmList.forEach((item) => {
      item.country.forEach((value) => {
        if(this.countries.indexOf(value) === -1) this.countries.push(value);
      });
    });


    const filterCountry = document.querySelector('#filterCountry');
    filterCountry.innerHTML = `<option value="default">Страна</option>`;
    this.countries.forEach((item) => {
      filterCountry.innerHTML += `<option value="${item}">${item}</option>`;
    });
  }

  updateGenres(filmList){
    this.genres = [];
    filmList.forEach((item) => {
      item.genre.forEach((value) => {
        if(this.genres.indexOf(value) === -1) this.genres.push(value);
      });
    });


    const filterGenre = document.querySelector('#filterGenre');
    filterGenre.innerHTML = `<option value="default">Жанр</option>`;
    this.genres.forEach((item) => {
      filterGenre.innerHTML += `<option value="${item}">${item}</option>`;
    });
  }

  updateFilterData(filmList){
    this.updateCountries(filmList.getFilmList());
    this.updateGenres(filmList.getFilmList());
  }

  sortByCountry(filmList, country){
    if(country === 'default') return filmList.renderWithoutSaving();

    const filteredFilms = filmList.getFilmList().filter((item) => item.country.indexOf(country) !== -1);

    WRAP.innerHTML = ``;
    filteredFilms.forEach((item) => {
      item.render();
    });
  }

  sortByGenre(filmList, genre){
    if(genre === 'default') return filmList.renderWithoutSaving();

    const filteredFilms = filmList.getFilmList().filter((item) => item.genre.indexOf(genre) !== -1);

    WRAP.innerHTML = ``;
    filteredFilms.forEach((item) => {
      item.render();
    });
  }

  sortByNewest(filmList, release){
    let filteredFilms = [];

    if(release === 'default') {
      return filmList.renderWithoutSaving();
    } else if(release === 'newest') {
      filteredFilms = filmList.getFilmList().sort((a, b) => b.releaseDate - a.releaseDate);
    } else if(release === 'oldest') {
      filteredFilms = filmList.getFilmList().sort((a, b) => a.releaseDate - b.releaseDate);
    }

    WRAP.innerHTML = ``;
    filteredFilms.forEach((item) => {
      item.render();
    });
  }
}

export default Filter;