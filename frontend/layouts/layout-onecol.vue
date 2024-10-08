<template>
  <div>
    <div class="main-wrapper">
      <mainHeader />
      <div class="site-content" id="site-content">
        <b-container class="one-col my-4">
          <nuxt />
        </b-container>
      </div>
      <mainFooter />
    </div>
  </div>
</template>
<script>

import mainHeader from '@/components/ui/Header'
import mainFooter from '@/components/ui/Footer'

export default {
  scrollToTop: true,
  components: {
    mainHeader,
    mainFooter
  }
}
</script>
<style lang="scss" scoped>

</style>
