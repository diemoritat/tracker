<template>
  <div class="form__field">
    <label class="form__input-label" :for="`input__${id}`">
      <slot/>
    </label>
    <div :class="`form__input-holder${type === 'money'?'  form__input-holder--money':''}`">
      <input
        v-mask="type === 'money'?'money': ''"
        :id="`input__${id}`" 
        :placeholder="placeholder" 
        :type="type" 
        class="form__input"
        @change="change"
      />
    </div>
  </div>
</template>

<script>
import AwesomeMask from 'awesome-mask'


export default {
  name: 'AppInput',
  props: {
    id: {
      type: Number,
      required: true,
      default: 1
    },
    placeholder: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  directives: {
    'mask': AwesomeMask
  },
  methods: {
    change(event){
      this.$emit('input', event.target.value)
    }
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
    --input-color: #9197ab;
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
        background-color: #1845e3;
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
}
</style>
