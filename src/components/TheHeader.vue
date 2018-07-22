<template>
  <header class="header">
    <div class="header__top">
      <app-breadcrumb/>
    </div>
    <div class="header__content">
      <h1 class="header__title">
        <slot/>
      </h1>
      <form-button :buttonAction="addNew">
        Fazer uma cobrança
      </form-button>
    </div>
  </header>
</template>

<script>
import AppBreadcrumb from './navigation/AppBreadcrumb'
import FormButton from './form/FormButton'

export default {
  name: 'TheHeader',
  components: {
    AppBreadcrumb,
    FormButton
  },
  methods: {
    addNew() {
      this.$router.push('/new')
    }
  }
}
</script>

<style lang="scss">
.header {
  margin-bottom: 15px;

  &__content {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  &__title {
    flex: 1;
    line-height: 1;
    font-weight: 300;
    font-size: 20px;
    text-transform: uppercase;
    padding-bottom: 15px;

    &:after {
      content: '';
      display: block;
      margin-top: 5px;
      width: 55px;
      height: 4px;
      background-color: #65dbdd;
      border-radius: 20px;
    }
  }
}

@media screen and (min-width: $breakpoint-md) {
  .header {

    &__content {
      flex-direction: row;
    }

    &__title {
      padding-bottom: 10px;
      font-size: 28px;

      &:after {
        margin-top: 10px;
      }
    }
  }
}
</style>
