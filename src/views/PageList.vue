<template>
  <div class="page-list">
    <main-header/>
    <app-table :tableData="$store.state.charges"/>
    <app-scroll-top/>
  </div>
</template>

<script>
import AppTable from '@/components/content/AppTable'
import MainHeader from '@/components/MainHeader'
import AppScrollTop from '@/components/navigation/AppScrollTop'

export default {
  name: 'PageList',
  components: {
    AppTable,
    MainHeader,
    AppScrollTop
  }
}
</script>

<style lang="scss">
.page-list {
  background: $background;
  padding: 20px 30px;
  min-height: 100%;
}
</style>
