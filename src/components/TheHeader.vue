<template>
  <header class="header">
    <h1 class="header__title">
      <router-link to="/"> #movienow </router-link>
    </h1>
  </header>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  padding: 36px 0 16px;
  background-color: var(--color-red);
  box-shadow: 0px 8px 7px rgba(0, 0, 0, 0.28);

  &__title {
    margin: 0;
    font-weight: 700;
    font-size: 48px;
    line-height: 48px;

    text-align: center;
    letter-spacing: 0.21em;
    text-transform: uppercase;

    color: var(--color-black);
  }
}
</style>