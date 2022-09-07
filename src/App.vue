<template>
  <TheHeader />
  <!-- <div class="wrapper">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div> -->

  <RouterView />
</template>

<script>
import TheHeader from './components/TheHeader.vue';
export default { components: { TheHeader } };
</script>

<style scoped></style>