<template>
<div>
  <div class="main-wrapper">
    <mainHeader />
    <div class="site-content" id="site-content">
      <!-- <admGradSlugSubNav /> -->
      <!-- <lookInsideBannerGrad /> -->
      <nuxt />

      <b-container>
        <!-- <admGradQuicklinksCustom /> -->
        <contactGradAdmissions />
      </b-container>
    </div>
    <mainFooter />
  </div>
</div>
</template>
<script>
import mainHeader from '@/components/ui/Header'
import mainFooter from '@/components/ui/Footer'
// import admGradSlugSubNav from '@/components/subnav/admissions/AdmGradSlugSubNav'
import lookInsideBannerGrad from '@/components/spotlight/LookInsideBannerGrad'
import contactGradAdmissions from '@/components/contact/ContactGradAdmissions'
// import admGradQuicklinksCustom from '@/components/quicklinks/AdmGradQuicklinksCustom'
export default {
  scrollToTop: true,
  components: {
    mainHeader,
    mainFooter,
    // admGradSlugSubNav,
    lookInsideBannerGrad,
    contactGradAdmissions,
    // admGradQuicklinksCustom
  }
}
</script>
<style lang="scss" scoped>
.py-5 {
    margin-bottom: 1em;
}
</style>
