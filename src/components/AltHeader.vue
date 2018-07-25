<template>
  <header class="alt-header">
    <div class="alt-header__top">
      <router-link to="/" class="alt-header__back">
        <span class="alt-header__back-icon"><i class="icon-arrow-left"></i></span>
        Voltar
      </router-link>
    </div>
    <div class="alt-header__content">
      <h1 class="alt-header__title">{{ $route.name }}</h1>
    </div>
  </header>
</template>

<script>

export default {
  name: 'AltHeader'
}
</script>

<style lang="scss">
.alt-header {
  margin-bottom: 20px;

  &__top {
    margin-bottom: 25px;
    padding-top: 5px;
  }

  &__content {
    display: flex;
    align-items: flex-start;
  }

  &__back {
    color: $color-secondary;
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    position: relative;
    padding-left: 20px;
    display: block;
  }

  &__back-icon {
    width: 12px;
    border-radius: 5px;
    position: absolute;
    left: 3px;
    top: 1px;
  }
  &__title {
    flex: 1;
    line-height: 1;
    font-weight: 400;
    font-size: 30px;
    text-transform: uppercase;
    padding-bottom: 10px;
  }
}
</style>
