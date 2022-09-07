<template>
  <article class="card">
    <a class="card__link" href="#">
      <div class="card__wrapper-poster">
        <img
          src="https://kuda-kazan.ru/image/266/390/uploads/191006231006515.jpg"
          alt=""
        />
      </div>
      <div class="card__wrapper-text">
        <h3 class="card__title">Побег из Шоушенка</h3>
        <p class="card__info">
          <span class="card__year color-gray">1994, </span>
          <span class="card__genres color-gray">драма</span>
        </p>
        <p class="card__directors">
          <span class="color-gray">режиссёр:</span>
          <span class="color-gray"> Фрэнк Дарабонт</span>
        </p>
        <p class="card__actors">
          <span class="color-gray">Актёры:</span>
          <span>
            Тим Роббинс, Морган Фриман, Боб Гантон, Уильям Сэдлер, Клэнси Браун,
            Джил Беллоуз, Марк Ролстон, Джеймс Уитмор, Джеффри ДеМанн, Ларри
            Бранденбург, Диомид Виноградов, Игорь Старосельцев, Никита
            Прозоровский, Олег Вирозуб, Василий Дахненко
          </span>
        </p>
        <p class="card__description">
          Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её
          любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается
          с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый,
          кто попадает в эти стены, становится их рабом до конца жизни. Но Энди,
          обладающий живым умом и доброй душой, находит подход как к
          заключённым, так и к охранникам, добиваясь их особого к себе
          расположения.
        </p>
      </div>
      <time class="card__time">
        <span>142 мин / 02:22:00</span>
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
      </time>
    </a>
  </article>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.card {
  position: relative;
  background-color: var(--color-tundora);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &__link {
    display: flex;
    cursor: pointer;
  }

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
  }

  &__title {
    margin: 0;
    margin-bottom: 12px;
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