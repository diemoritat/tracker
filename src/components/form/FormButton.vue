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
  background-color: #1543e3;
  color: #fff;
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
    background-color: #374d98;
    transition: background-color 0.2s linear;
  }

  &[disabled] {
    cursor: not-allowed;
    background: #bfc6d9;
    color: #8990a6;
  }
}

@media screen and (min-width: $breakpoint-md) {
  button {
    width: auto;
  }
}
</style>
