<template>
  <TheHeader />
  <RouterView />
</template>

<script>
import TheHeader from './components/TheHeader.vue';
export default { components: { TheHeader } };
</script>

<style lang="scss" scoped></style>
