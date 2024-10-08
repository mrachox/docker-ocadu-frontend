<template>
  <div>
    <div class="main-wrapper">
      <mainHeader />

      <div class="site-content" id="site-content">
        <admSubNavCustom/>

        <b-container class="py-5">
          <lookInsideBannerUndergrad />
          <nuxt />

        </b-container>
      </div>
      <mainFooter />
    </div>
  </div>
</template>
<script>
import admSubNavCustom from '@/components/subnav/admissions/AdmSubNavCustom'
import mainHeader from '@/components/ui/Header'
import mainFooter from '@/components/ui/Footer'
import lookInsideBannerUndergrad from '@/components/spotlight/LookInsideBannerUndergrad'

export default {
  scrollToTop: true,
  components: {
    mainHeader,
    mainFooter,
    lookInsideBannerUndergrad,
    admSubNavCustom,
  },
}
</script>
<style lang="scss" scoped>

</style>
