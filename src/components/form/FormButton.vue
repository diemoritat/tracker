/*
  Props
  @Function buttonAction - The action that will happen when the user clicks the button.
  @Boolean isDisabled - If true, disables the button.

  Children
  <slot/> - The text inside the button.

  Events
  @click - Triggers the buttonAction received as prop.
*/

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
  min-width: 190px;
  width: 100%;
  display: block;
  background-color: $color-secondary;
  appearance: none;
  border: 0;
  border-radius: 35px;
  padding: 9px 0;
  text-align: center;
  color: white;
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
    display: block;
  }
}
</style>
