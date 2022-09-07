<template>
  <main class="">
    <div class="container">
      <h2>Фильмы</h2>
      <BasePreloader />
    </div>
  </main>
</template>

<script>
import BasePreloader from '../components/UI/BasePreloader.vue';
export default {
  components: { BasePreloader },
  data() {
    return {};
  }
};
</script>
