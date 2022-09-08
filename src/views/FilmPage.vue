<template>
  <main class="content">
    <div class="container">
      <BaseBackBtn link="/" label="Назад к списку" class="content__back" />
    </div>
    <BaseLine class="content__border" />
    <div class="container content__container">
      <BasePreloader v-if="loadingFilm" />
      <BaseCard v-else-if="film" :item="film" />
      <h2 v-else class="title-info">
        К сожалению, по вашему запросу ничего не найдено...
      </h2>
    </div>
  </main>
</template>
<script>
import BaseCard from '@/components/BaseCard.vue';
import { mapActions, mapGetters } from 'vuex';
import BasePreloader from '@/components/UI/BasePreloader.vue';
import BaseLine from '../components/UI/BaseLine.vue';
import BaseBackBtn from '../components/UI/BaseBackBtn.vue';
export default {
  components: { BaseCard, BasePreloader, BaseLine, BaseBackBtn },
  data() {
    return {
      loadingFilm: false,
      film: null
    };
  },
  computed: {
    ...mapGetters(['getFilm', 'getFilmsArr'])
  },
  methods: {
    ...mapActions(['loadFilm']),
    findFilmStore() {
      this.loadingFilm = true;
      setTimeout(() => {
        this.film = this.getFilmsArr.filter((item) => {
          return item.id === +this.$route.params.id;
        })[0];
        this.loadingFilm = false;
      }, 2000);
    },
    getFilmApi() {
      this.loadingFilm = true;
      this.loadFilm(this.$route.params.id);
      setTimeout(() => {
        this.film = this.getFilm;
        this.loadingFilm = false;
      }, 2000);
    }
  },
  mounted() {
    if (this.getFilmsArr.length) this.findFilmStore();
    if (!this.getFilmsArr.length) this.getFilmApi();
  }
};
</script>
<style lang="scss" scoped>
.content__back {
  margin-bottom: 20px;
}
.content__container {
  padding-top: 40px;
}
.title-info {
  padding-top: 8px;
  font-weight: 500;
  font-size: 32px;
  line-height: 32px;
  color: var(--color-light);
}
</style>