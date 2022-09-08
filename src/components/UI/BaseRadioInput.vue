<template>
  <label class="radio-control">
    <input
      class="radio-control__input"
      type="radio"
      :name="input.id"
      v-model="modelValue"
      :="$attrs"
      :value="input.id"
    />
    <span class="radio-control__label"> {{ input.name }} </span>
  </label>
</template>

<script>
export default {
  props: {
    input: Object,
    modelValue: Number
  }
};
</script>

<style lang="scss" scoped>
.radio-control {
  position: relative;
  cursor: pointer;

  &__input {
    position: absolute !important;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
    opacity: 0;
  }

  &__label {
    display: flex;
    align-items: center;
    gap: 10px;

    font-size: 16px;
    line-height: 16px;
    color: var(--color-gray);

    &::before {
      content: '';
      display: block;

      width: 15px;
      height: 15px;
      border: 1px solid var(--color-gray);
      transition: background-color 0.2s ease-in-out,
        border-color 0.2s ease-in-out;
    }

    &::after {
      content: '';
      display: block;
      width: 6px;
      height: 10px;
      border-bottom: 2px solid var(--color-light);
      border-right: 2px solid var(--color-light);

      position: absolute;
      left: 4.5px;
      top: 1px;
      transform: rotate(45deg);
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }
  }

  &__input:checked + .radio-control__label::before {
    background-color: var(--color-orange);
    border-color: var(--color-orange);
  }

  &__input:checked + .radio-control__label::after {
    opacity: 1;
  }
}
</style>