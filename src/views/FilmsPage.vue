<template>
  <main class="content">
    <div class="container content__container">
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
    <div class="container">
      <ul class="content__list list-reset">
        <li class="content__item">
          <BaseCard />
        </li>
        <li class="content__item">
          <BaseCard />
        </li>
        <li class="content__item">
          <BaseCard />
        </li>
      </ul>
      <BasePreloader />
    </div>
  </main>
</template>

<script>
import BasePreloader from '@/components/UI/BasePreloader.vue';
import BaseRadioInput from '@/components/UI/BaseRadioInput.vue';
import BaseLine from '../components/UI/BaseLine.vue';
import BaseCard from '../components/BaseCard.vue';
export default {
  components: { BasePreloader, BaseRadioInput, BaseLine, BaseCard },
  data() {
    return {
      filterType: null,

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
  watch: {
    filterType() {
      console.log(this.filterType);
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding-top: 40px;

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

  &__list {
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}

.filter {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 16px 0;
}
</style>