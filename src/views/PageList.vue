<template>
  <div class="page-list">
    <the-header>{{ $route.name }}</the-header>
    <app-table :tableData="$store.state.charges"/>
    <app-scroll-top/>
  </div>
</template>

<script>
import AppTable from '@/components/content/AppTable'
import TheHeader from '@/components/TheHeader'
import AppScrollTop from '@/components/navigation/AppScrollTop'

export default {
  name: 'PageList',
  components: {
    AppTable,
    TheHeader,
    AppScrollTop
  },
  methods: {
    addNew() {
      this.$router.push('/new')
    }
  }
}
</script>

<style lang="scss">
.page-list {
  background: linear-gradient(to bottom, #fff 0%, #fff 150px, #e6e9f5 150px);
  padding: 20px 30px;
  min-height: 100%;
}
</style>
