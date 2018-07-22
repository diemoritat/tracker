<template>
  <div class="checkbox">
    <input 
      :id="name" 
      class="checkbox__input" 
      type="checkbox"
      @change="change" 
    >
    <label :for="name" class="checkbox__label">
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

<style lang="scss" scoped>

  [type="checkbox"] {
    position: absolute;
    left: -9999px;

    &+ label {
      position: relative;
      padding-left: 25px;
      cursor: pointer;
      font-size: 14px;
      display: inline-block;
      color: #666;

      &:before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 13px;
        height: 13px;
        border: 2px solid #8990a6;
        border-radius: 2px;
        transition: box-shadow 0.2s ease;
      }

      &:after {
        content: '\2713';
        position: absolute;
        top: 1px;
        left: 3px;
        font-size: 13px;
        color: #1845e3;
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
      color: #1845e3;

      &:before {
        border-color: #1845e3;
      }
      &:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }
  }
</style>
