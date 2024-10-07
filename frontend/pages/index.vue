<template>
    <div>

    <!-- <homepageCarousel /> -->
    <homepageAlternative />
    <!-- <homepageGradex /> -->
    <!-- <homepageConvo2022 /> -->
    <homepageAlerts />
    <b-container>
      <!-- Upgrade message  -->
      <!-- <p class="my-5">
      We are currently upgrading this site. The services you are looking for may not be available at this time. We’ll be back up and running again before long. In the meantime, please contact us with any urgent inquiries at <a href="mailto:websupport@ocadu.ca">websupport@ocadu.ca</a> Thank you for your patience!
      </p> -->
      <b-row class="my-5">
        <!-- <b-col sm="12" md="6">
          <homepageEvents />
        </b-col> -->
        <b-col sm="12" md="12">
          <homepageNews />
        </b-col>
      </b-row>
      <section id="statement" class="my-5">
        <!-- <p class="my-4">
          <a target="_blank" href="/" class="btn text-uppercase d-block btn-quicklink">OCAD UNIVERSITY'S STATEMENT ON FREEDOM OF EXPRESSION</a>
        </p> -->
      <p class="pt-4 border-top">
        <small>OCAD University acknowledges the ancestral territories of the Mississaugas of the Credit, the Haudenosaunee, the Anishinaabeg and the Huron-Wendat, who are the original owners and custodians of the land on which we live, work and create.</small>
      </p>

      <p class="pt-4">
        <small>Video Description: Silent video featuring drone footage of OCAD University’s campus on McCaul Street in downtown Toronto. Quick video montage of downtown Toronto locations like Yonge/Dundas Square, the Distillery District and Queen Street West. Footage of students working, wearing masks, in studios including the woodshop and Drawing & Painting studios. Footage of students working at desks, wearing masks, in OCAD U’s Fabrication Centre. Student creating an illustration on a tablet. Students working on pottery wheels, working on looms and in the Jewellery studio.</small>
      </p>

    </section>
  </b-container>
</div>
</template>

<script>
import homepageAlerts from '@/components/HomepageAlerts'
// import homepageCarousel from '@/components/ui/HomepageCarousel'
import homepageAlternative from '@/components/ui/HomepageAlternative'
// import homepageGradex from '@/components/ui/HomepageGradex'
// import homepageConvo2022 from '@/components/ui/HomepageConvo2022'
import homepageNews from '@/components/news/HomepageNews'
import homepageEvents from '@/components/events/HomepageEvents'
export default {
  name: 'home',
  layout: 'default',
  components: {
    // homepageCarousel,
    homepageEvents,
    homepageNews,
    homepageAlerts,
    homepageAlternative,
    // homepageGradex,
    // homepageConvo2022
  }
}
</script>

<style lang="scss" scoped>
</style>
