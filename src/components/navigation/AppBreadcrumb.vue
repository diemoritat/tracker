<template>
  <ul role="nav" class="breadcrumb">
    <li class="breadcrumb__item">
      <a class="breadcrumb__link">Página Inicial</a>
    </li>
    <router-link class="breadcrumb__item" tag="li" to="/">
      <a class="breadcrumb__link">Cobranças</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'Breadcrumb'
}
</script>

<style lang="scss">
.breadcrumb {
  margin-bottom: 8px;

  &__item {
    display: inline-block;
    position: relative;

    &:not(:last-child){
      padding-right: 20px;

      &:after {
        content: "\e902";
        font-family: 'icomoon' !important;
        font-size: 18px;
        line-height: 0.9;
        display: block;
        position: absolute;
        right: 2px;
        top: 2px;
      }
    }
  }

  &__link {
    color: $color-secondary;
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
  }

  .router-link-exact-active {
    .breadcrumb__link {
      color: $color-default;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
}

@media screen and (min-width: $breakpoint-md) {
  .breadcrumb {
    margin-bottom: 10px;
  }
}
</style>
