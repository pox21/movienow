<template>
  <main class="content">
    <div class="container">
      <h2 class="content__title">Фильмы</h2>
      <div class="filter content__filter">
        <BaseRadioInput
          v-for="input in radioInputs"
          :key="input.id"
          :input="input"
          v-model="filterType"
        />
      </div>
    </div>
    <BaseLine class="content__border" />
    <div class="container content__container">
      <BasePreloader v-if="loadingFilms" />
      <ul v-else class="films list-reset">
        <li class="films__item" v-for="film in films" :key="film.id">
          <BaseCard :item="film" />
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import BasePreloader from '@/components/UI/BasePreloader.vue';
import BaseRadioInput from '@/components/UI/BaseRadioInput.vue';
import BaseLine from '../components/UI/BaseLine.vue';
import BaseCard from '../components/BaseCard.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
  components: { BasePreloader, BaseRadioInput, BaseLine, BaseCard },
  data() {
    return {
      filterType: null,

      films: [],
      loadingFilms: true,

      radioInputs: [
        {
          id: 1,
          name: 'Отсортировать по названию'
        },
        {
          id: 2,
          name: 'Отсортировать по году'
        }
      ]
    };
  },
  methods: {
    ...mapActions(['loadFilms']),
    renderFilms() {
      this.loadingFilms = true;
      setTimeout(() => {
        this.films = this.getFilmsArr;
        this.loadingFilms = false;
      }, 2000);
    },
    sortAllFilms(type) {
      this.films.sort((film1, film2) => {
        if (type === 'date') {
          return new Date(film1[type]) > new Date(film2[type]) ? -1 : 1;
        }
        return film1[type] > film2[type] ? -1 : 1;
      });
    },
    sortFilms(id) {
      if (id === 1) {
        this.sortAllFilms('title');
        this.films.reverse();
      }
      if (id === 2) {
        this.sortAllFilms('year');
        this.films.reverse();
      }
    }
  },
  computed: {
    ...mapGetters(['getFilmsArr'])
  },
  watch: {
    filterType(id) {
      this.sortFilms(id);
    },
    getFilmsArr() {
      this.renderFilms();
    }
  },
  mounted() {
    this.loadFilms();
  }
};
</script>

<style lang="scss" scoped>
.content {
  &__title {
    margin: 0;
    font-weight: 500;
    font-size: 32px;
    line-height: 32px;
    color: var(--color-light);
  }

  &__border {
    margin: 0 auto;
    max-width: 1400px;
  }
}

.films {
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__item {
    > .card:hover {
      transform: translateY(-8px);
      box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.35);
    }
  }
}

.filter {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 16px 0;
}
</style>