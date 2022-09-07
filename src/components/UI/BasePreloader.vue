<template>
  <div class="preloader">
    <span class="preloader__line preloader__line--black"></span>
    <span class="preloader__line preloader__line--red"></span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@keyframes rotate1 {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes rotate2 {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(-360deg);
  }
}
.preloader {
  width: 126px;
  height: 116px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-sizing: border-box;

  &__line {
    display: block;
    height: 93px;
    width: 93px;
    border-radius: 100%;
    border-width: 4px;
    border-style: solid;

    position: absolute;

    &--black {
      top: 0;
      right: 0;

      border-bottom-color: transparent;
      border-left-color: transparent;
      border-top-color: black;
      border-right-color: black;
      animation: rotate2 0.8s linear infinite;
      transform: rotate(-20deg);
    }

    &--red {
      bottom: 0;
      left: 0;
      border-bottom-color: red;
      border-left-color: transparent;
      border-top-color: transparent;
      border-right-color: red;
      animation: rotate1 0.8s linear infinite;
      transform: rotate(20deg);
    }
  }
}
</style>
