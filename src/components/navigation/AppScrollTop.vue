<template>
  <button class="scroll-top" @click="scrollTop">Ir para o topo</button>
</template>

<script>
export default {
  name: 'AppScrollTop',
  methods: {
    scrollTop() {
      window.scroll({
        top: 0,
        behavior: "smooth"
      });
    }
  }
}
</script>

<style lang="scss">
.scroll-top {
  width: 35px;
  height: 35px;
  display: block;
  margin: 0 auto;
  background-color: transparent;
  border: 2px solid #254ee4;
  border-radius: 50%;
  position: relative;
  text-indent: -999999px;

  &:after {
    content: '\2192';
    display: block;
    position: absolute;
    right: 7px;
    top: 6px;
    text-indent: 0;
    line-height: 1;
    font-size: 20px;
    transform: rotate(-90deg);
    color: #254ee4;
  }
}

@media screen and (min-width: $breakpoint-md) {
  .scroll-top {
    display: inline-block;
    margin: 0;
  }
}
</style>
