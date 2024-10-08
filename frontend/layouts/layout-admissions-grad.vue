<template>
  <div>
    <popupGrad />
    <div class="main-wrapper">
      <mainHeader />
      <div class="site-content" id="site-content">
        <!-- <admGradSlugSubNav /> -->
        <b-container class="py-5">
          <lookInsideBannerGrad />
          <admGradQuicklinks />
          <nuxt />
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
import admGradQuicklinks from '@/components/quicklinks/AdmGradQuicklinks'
import popupGrad from '@/components/spotlight/PopupGrad'
export default {
  scrollToTop: true,
  components: {
    mainHeader,
    mainFooter,
    // admGradSlugSubNav,
    lookInsideBannerGrad,
    contactGradAdmissions,
    admGradQuicklinks,
    popupGrad,
  }
}
</script>
<style lang="scss" scoped>
.py-5 {
  margin-bottom: 1em;
}
</style>
