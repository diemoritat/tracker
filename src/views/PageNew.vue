<template>
  <div class="page-add">
    <alt-header/>
    <form-add-new/>
  </div>
</template>

<script>
import AltHeader from '@/components/AltHeader'
import FormAddNew from '@/components/form/FormAddNew'

export default {
  name: 'PageNew',
  components: {
    AltHeader,
    FormAddNew
  }
}
</script>

<style lang="scss">
.page-add {
  padding: 20px 30px;
  min-height: 100%;
}
</style>
