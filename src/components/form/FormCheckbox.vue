/*
  Props
  @String name - The field name.

  Events
  @change - Emits an 'input' event to the parent with the current value.
*/

<template>
  <div class="form-checkbox">
    <input 
      :id="name" 
      class="form-checkbox__input" 
      type="checkbox"
      @change="change" 
    >
    <label :for="name" class="form-checkbox__label">
      <slot/>
    </label>
  </div>
</template>

<script>
export default {
  name: 'FormCheckbox',
  props: {
    name: {
      type: String
    }
  },
  methods: {
    change(event){
      this.$emit('input', event.target.checked)
    }
  }
}
</script>

<style lang="scss">

.form-checkbox {
  padding-top: 10px;

  [type="checkbox"] {
    position: absolute;
    left: -9999px;

    &+ label {
      position: relative;
      padding-left: 25px;
      cursor: pointer;
      font-size: 14px;
      display: inline-block;
      color: $color-default;

      &:before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 13px;
        height: 13px;
        border: 2px solid $color-default-light;
        border-radius: 2px;
        transition: box-shadow 0.2s ease;
      }

      &:after {
        content: '\2713';
        position: absolute;
        top: 1px;
        left: 3px;
        font-size: 13px;
        color: $color-secondary;
      }
    }

    &:not(:checked) {
      & + label {
        &:after {
          opacity: 0;
          -webkit-transform: scale(0);
          transform: scale(0);
        }
      }
    }

    &:checked + label {
      color: $color-secondary;

      &:before {
        border-color: $color-secondary;
      }
      &:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }
  }
}
</style>
