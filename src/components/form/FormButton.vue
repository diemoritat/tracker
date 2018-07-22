<template>
  <button type="button" @click="buttonAction" :disabled="isDisabled">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'FormButton',
  props: {
    buttonAction: {
      type: Function,
      required: true
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
button{
  background-color: $color-secondary;
  color: white;
  padding: 9px 0;
  border-radius: 35px;
  text-align: center;
  min-width: 190px;
  width: 100%;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: $color-secondary-dark;
    transition: background-color 0.2s linear;
  }

  &[disabled] {
    cursor: not-allowed;
    background: $color-default-light;
    color: $color-default;
  }
}

@media screen and (min-width: $breakpoint-md) {
  button {
    width: auto;
  }
}
</style>
