<template>
  <div class="page--services">
    <div class="main-wrapper">
      <mainHeader />
      <div class="site-content" id="site-content">
        <!-- <Corona /> -->
        <nuxt />
      </div>
      <mainFooter />
    </div>
  </div>
</template>
<script>
// import Corona from '@/components/ui/Corona'
import mainHeader from '@/components/ui/Header'
import mainFooter from '@/components/ui/Footer'
export default {
  scrollToTop: true,
  components: {
    mainHeader,
    mainFooter,
    // Corona
  }
}
</script>
<style lang="scss" scoped>

</style>
