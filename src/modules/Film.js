import { WRAP } from "../constants/wrap";

class Film{
  constructor(id, title, country, genre, director, filmScript, producer, operator,
      composer, budget, worldFees, ageRating, duration, releaseDate, poster){
    this.id = id;
    this.title = title;
    this.country = country;
    this.genre = genre;
    this.director = director;
    this.filmScript = filmScript;
    this.producer = producer;
    this.operator = operator;
    this.composer = composer;
    this.budget = budget;
    this.worldFees = worldFees;
    this.ageRating = ageRating;
    this.duration = duration;
    this.releaseDate = releaseDate;
    this.poster = poster;
  }

  // Прорисовка фильма
  render(){
    WRAP.innerHTML += `
      <div class="wrap__item" data-index="${this.id}">
        <div class="wrap__item__context" id="contextMenu">
          <button id="btnViewFilm" data-action="view" data-index="${this.id}">
            <img src="../../assets/icons/view.svg" alt="icon: view film">
          </button>
          <button id="btnDeleteFilm" data-action="delete" data-index="${this.id}">
            <img src="../../assets/icons/trash.svg" alt="icon: delete film">
          </button>
        </div>
        <div class="wrap__item__content">
          <img src="${this.poster}" alt="image: ${this.title}">
          <span>${this.title}</span>
        </div>
      </div>
    `;
  }

  renderFilmInfo(wrapper){
    const date = new Date(this.releaseDate);

    wrapper.innerHTML = `
      <div class="film-info__main">
        <div class="film-info__main__description">
          <img src="${this.poster}" alt="image: ${this.title}">
          <p>Название: ${this.title}</p>
          <p>Страна: ${this.country.join(', ')}</p>
          <p>Жанр: ${this.genre.join(', ')}</p>
          <p>Режиссер: ${this.director}</p>
          <p>Продюсер: ${this.producer}</p>
          <p>Оператор: ${this.operator}</p>
          <p>Композитор: ${this.composer}</p>
          <p>Бюджет: ${this.budget}</p>
          <p>Мировые сборы: ${this.worldFees}</p>
          <p>Возрастной рейтинг: ${this.ageRating}</p>
          <p>Длительность: ${this.duration}</p>
          <p>Премьера: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}</p>
        </div>
        <div class="film-info__main__title">
          <h2>${this.title}</h2>
          <p>${this.filmScript}</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-V0ARqmnzSk" title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          <div class="film-info__comments">
            <form class="film-info__comments__form">
              <div class="comment-text">
                <input type="text" class="comment-text" placeholder="Отзыв">
                <input type="button" value="Оставить отзыв">
              </div>
              <div class="comment-rating">
                <input type="range" list="tickmarks" min="0" max="10" step="1" value="7">
                <datalist id="tickmarks">
                  <option value="0" label="0"></option>
                  <option value="1"></option>
                  <option value="2"></option>
                  <option value="3"></option>
                  <option value="4"></option>
                  <option value="5" label="5"></option>
                  <option value="6"></option>
                  <option value="7"></option>
                  <option value="8"></option>
                  <option value="9"></option>
                  <option value="10" label="10"></option>
                </datalist>
              </div>
            </form>
            <h2>Комментарии</h2>
            <div class="film-comments" id="filmComments">
              <div class="film-comment" id="uniq">
                <span>Имя - профессия - рейтинг</span>
                <span style="display: block;">Текст</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

export default Film;