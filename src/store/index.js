// import axios from 'axios';
import { createStore } from 'vuex';
import axios from 'axios';

const getFilmsURL = 'https://floating-sierra-20135.herokuapp.com/api/movies';
const getFilmByIdURL = 'https://floating-sierra-20135.herokuapp.com/api/movie/';

// Create a new store instance.
export const store = createStore({
  state() {
    return {
      filmsArr: [],
      film: {}
    };
  },
  getters: {
    getFilmsArr(state) {
      return state.filmsArr;
    },
    getFilm(state) {
      return state.film;
    }
  },
  mutations: {
    setFilmsArr(state, data) {
      state.filmsArr = data;
    },
    setFilm(state, data) {
      state.film = data;
    }
  },
  actions: {
    async loadFilms(context) {
      const response = await axios.get(getFilmsURL);
      try {
        if (response.data.success) {
          context.commit('setFilmsArr', response.data.data);
        }
      } catch {
        console.log('неизвестная ошибка при запросе списка фильмов');
      }
    },
    async loadFilm(context, id) {
      const response = await axios.get(getFilmByIdURL + id);
      try {
        if (response.data.success) {
          context.commit('setFilm', response.data.data);
        }
      } catch {
        console.log('неизвестная ошибка при запросе данных фильма');
      }
    }
  }
});
