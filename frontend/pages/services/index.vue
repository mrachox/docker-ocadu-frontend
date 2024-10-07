<template>
  <div>
    <servicesSubNav />
    <Hero
    variableImg="https://ocadu.ca/Assets/design/spotlights/spotlight-sharpcentre-offices-services.jpg"
    variableCredit="The underside of the Sharp Centre for Design. Photo by Lorella Zanetti."
    variableText="Services and offices" />
    <b-container>
      <p>As of January, 2018 a new unit will be created through amalgamation of Facilities Planning &amp; Management and Shops &amp; Studios. The new unit will be called Facilities &amp; Studio Services.</p>
      <p>Additionally, certain functions and responsibilities within the current Facilities unit will be transferred out.  For example, Construction/Renovation project management will become part of a new unit called Capital Planning and Projects.</p>
      <p>Stay tuned for changes on this page soon.</p>
    </b-container>
    <servicesAuxNav />
  </div>
</template>

<script>
import Hero from '@/components/ui/Hero'
import servicesAuxNav from '@/components/feature/ServicesAuxNav'
import servicesSubNav from '@/components/subnav/services/ServicesSubNav'
export default {
  name: 'servicesIndex',
  layout: 'default-services',
  head() {
    return {
      title: 'Services',

    }
  },
  components: {
    Hero,
    servicesAuxNav,
    servicesSubNav
  }
}
</script>

<style>

</style>
