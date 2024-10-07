<template>
  <div>
    <itSlugSubNav />
    <b-container>
      <itSearch />
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
import itSlugSubNav from '@/components/subnav/services/ItSlugSubNav'
import itSearch from '@/components/spotlight/ITSearch'
export default {
  name: 'servicecatalogIndex',
  layout: 'default-services',
  components: {
    itSlugSubNav,
    itSearch,
  },
  head() {
    return {
      title: 'Service Catalog',

    }
  },
  scrollToTop: true
}
</script>
<style lang="scss" scoped>

</style>
