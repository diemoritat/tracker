<template>
  <ul role="nav" class="breadcrumb">
    <router-link class="breadcrumb__item" tag="li" to="/wtv">
      <a class="breadcrumb__link">Página Inicial</a>
    </router-link>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.breadcrumb {
  margin-bottom: 10px;

  &__item {
    display: inline-block;
    position: relative;

    &:not(:last-child){
      padding-right: 20px;

      &:after {
        content: '\203A';
        font-size: 23px;
        line-height: 0.9;
        display: block;
        position: absolute;
        right: 6px;
        top: 0;
      }
    }
  }

  &__link {
    color: #1845e3;
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
  }

  .router-link-active {
    .breadcrumb__link {
      color: #3d485a;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
}
</style>
