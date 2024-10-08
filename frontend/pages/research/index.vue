<template>
  <div>
    <researchSubNav />
    <Hero
    variableImg="https://www2.ocadu.ca/sites/www2.ocadu.ca/files/project/Screen-Heller-Czegledy.jpg"
    variableText="Research &amp; Innovation"
    variableSubhead="Art, design and digital research and creative practices through a diversity of perspectives, methods and approaches."
    />
    <b-container class="py-5">
      <ul class="page-nav my-4">
        <li><a href="/research/people">people</a></li>
        <li><a href="/research/projects">projects</a></li>
        <li><a href="/research/labs">labs</a></li>
      </ul>

      <p>As Canada's university of the imagination, OCAD University offers a depth and breadth of undergraduate and graduate critical inquiry. The university engages in art and design research and creative practices through a diversity of perspectives, methods and approaches. Due to OCADU's pivotal role in maintaining a community of existing artists and designers, as well as training the new generations of artists and designers, it also functions as a cultural institution within the City of Toronto, with influence nationally and internationally.</p>

      <b-row class="my-4">
        <b-col sm="12" md="6">
          <researchNews />
        </b-col>
        <b-col sm="12" md="6">
          <researchEvents />
        </b-col>
      </b-row>
    </b-container>
    <researchServices />
  </div>
</template>

<script>
import researchSubNav from '@/components/subnav/research/ResearchSubNav'
import Hero from '@/components/ui/Hero'
import researchNews from '@/components/news/ResearchNews'
import researchEvents from '@/components/events/ResearchEvents'
import researchServices from '@/components/feature/ResearchServices'
import axios from 'axios'
export default {
  name: 'researchIndex',
  layout: 'default',
  head() {
    return {
      title: 'OCAD U Research'
    }
  },
  components: {
    Hero,
    researchNews,
    researchEvents,
    researchServices,
    researchSubNav

  }
}
</script>

<style>

</style>
