<template>
  <article class="card">
    <div class="card__wrapper-poster">
      <img :src="`https:${item.poster}`" :alt="`${item.title} постер`" />
    </div>
    <div class="card__wrapper-text">
      <h3 class="card__title">
        <router-link
          class="card__link"
          :to="{ name: 'film', params: { id: item.id } }"
          v-html="item.title" 
        >
        </router-link>
      </h3>
      <p class="card__info">
        <span class="card__year color-gray">{{ item.year }}, </span>
        <span class="card__genres color-gray">
          {{ item.genres.join(', ') }}
        </span>
      </p>
      <p class="card__directors" v-if="item.directors">
        <span class="color-gray">режиссёр:</span>
        <span class="color-gray"> {{ item.directors.join(', ') }}</span>
      </p>
      <p class="card__actors" v-if="item.actors">
        <span class="color-gray">Актёры:</span>
        <span>
          {{ item.actors.join(', ') }}
        </span>
      </p>
      <p class="card__description" v-if="item.description">
        {{ item.description }}
      </p>
    </div>
    <div class="card__time" v-if="item.collapse && item.collapse.duration">
      <!-- <span>142 мин / 02:22:00</span> -->
      <span> {{ item.collapse.duration.join('').replace('.', '') }}</span>
      <svg
        width="16"
        height="18"
        viewBox="0 0 16 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 0V2H12V0H4V2H2V0H0V18H2V16H4V18H12V16H14V18H16V0H14ZM4 14H2V12H4V14ZM4 10H2V8H4V10ZM4 6H2V4H4V6ZM10 16H6V2H10V16ZM14 14H12V12H14V14ZM14 10H12V8H14V10ZM14 6H12V4H14V6Z"
          fill="#FA2828"
          fill-opacity="0.98"
        />
      </svg>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    item: Object
  }
};
</script>
<style lang="scss" scoped>
.card {
  position: relative;
  background-color: var(--color-tundora);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &__wrapper-poster {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 168px;
    background-color: var(--color-gray);

    img {
      object-position: center;
      width: 112px;
      height: 168px;
      object-fit: cover;
    }
  }

  &__wrapper-text {
    padding: 32px 24px;
    font-weight: 700;
    font-size: 12px;
    line-height: 12px;

    > *:last-child {
      margin-bottom: 0;
    }
  }

  &__title {
    margin: 0;
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 36px;
    line-height: 36px;
  }

  &__info {
    margin-top: 0;
    margin-bottom: 8px;
  }

  &__directors {
    margin-top: 0;
    margin-bottom: 10px;
  }

  &__actors {
    display: grid;
    grid-template-columns: 52px 1fr;
    grid-gap: 7px;

    margin-top: 0;
    margin-bottom: 16px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: var(--color-mercury);
  }

  &__description {
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: var(--color-light);
  }

  &__time {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 30px;
    padding: 0 24px 0 19px;
    position: absolute;
    right: 0;
    top: 32px;
    background-color: var(--color-gray);
    font-weight: 700;
    font-size: 12px;
    line-height: 12px;
    text-transform: uppercase;
    color: var(--color-black);

    &::before {
      content: '';
      border-bottom: 30px solid var(--color-gray);
      border-left: 5px solid transparent;
      position: absolute;
      left: -5px;
    }
  }
}
</style>