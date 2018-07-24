/*
  Props
  @String error - The error message to be displayed, if any.
  @String name - Required by vee-validate. The field name.
  @String placeholder - The placeholder text to be shown on the input field.
  @String type - The field type. It accepts all the html types, plus a custom one called 'money', which applies a currency mask to the input field.
  @String value - Required by vee-validate. The initial value for the input field.

  Custom Directives
  'mask' - applies the currency mask on the input field.

  Events
  @input - Required by vee-validate. Emits an 'input' event to the parent, and is also used by vee-validate to actually validate the input.
*/

<template>
  <div :class="`form__field  ${error !== '' ? 'form__field--error' : ''}`">
    <label :for="`input__${name}`" class="form__input-label">
      <slot/>
    </label>
    <div :class="`form__input-holder  ${type === 'money'?'form__input-holder--money':''}`">
      <input
        v-mask="type === 'money'?'money': ''"
        :id="`input__${name}`" 
        :placeholder="placeholder" 
        :type="type" 
        :name="name"
        class="form__input"
        @input="$emit('input', $event.target.value)"
      >
    </div>
    <span v-show="error !== ''" class="form__input-error">
      <i class="icon-alert"/>
      {{ error }}
    </span>
  </div>
</template>

<script>
import AwesomeMask from 'awesome-mask'

export default {
  name: 'AppInput',
  $_veeValidate: {
    value () {
      return this.$el.value;
    },
    name () {
      return this.name;
    }
  },
  directives: {
    'mask': AwesomeMask
  },
  props: {
    error: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      required: true,
      default: null
    }
  },
  mounted () {
    this.$el.value = this.value;
  }
}
</script>

<style lang="scss">
.form {
  &__field {
    width: 100%;
    max-width: 320px;
    margin-bottom: 20px;

    --label-color: #424d5e;
    --input-color: #424d5e;
    --border-color: #9aa0b4;
    --border-width: 1px;

    &--error {
      --label-color: #ee6c34;
      --input-color: #ee6c34;
      --border-color: #ee6c34;
      --border-width: 2px;
    }
  }

  &__input-label {
    display: block;
    color: var(--label-color);
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 0px;
  }

  &__input-holder {
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: var(--border-width);
      background-color: var(--border-color);
      border-radius: 5px;
      transition: all 0.2s linear;
    }

    &:focus-within {
      &:after {
        background-color: var(--border-color);
        transition: all 0.3s linear;
      }
    }

    &--money {
      position: relative;

      .form__input {
        padding-left: 20px;
      }

      &:before {
        content: 'R$ ';
        display: block;
        position: absolute;
        bottom: 2px;
        left: 0;
        color: var(--input-color);
        font-size: 13px;
        font-family: 'Quicksand', sans-serif;
      }
    }
  }

  &__input {
    display: block;
    width: 100%;
    background: transparent;
    border: 0;
    color: var(--input-color);
    padding: 1px 0;
    font-size: 13px;
    font-family: 'Quicksand', sans-serif;
    transition: border 0.2s linear;

    &:focus {
      outline: 0;
      transition: border 0.2s linear;
    }
  }

  &__input-error {
    color: var(--input-color);
    padding: 1px 0;
    font-size: 13px;
    font-family: 'Quicksand', sans-serif;
  }
}
</style>