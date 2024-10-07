<template>
  <div>
    <galleriesSubNav />
    <Hero
    variableImg="https://ocadu.ca/Assets/design/spotlights/spotlight-exhibitions-galleries-studentwork-painting-abstract.jpg"
    variableText="Galleries &amp; Exhibitions"
    variableSubhead="Galleries at OCAD University exhibit art, design, and digital media work by students, and internationally renowned professional artists, designers, and researchers."
    />
    <p>&nbsp;</p>
      <!-- <ul class="page-nav">
        <li><a href="https://www.ocadu.ca/sites/default/files/assets/files/Gallery_Crawl_2022_Booklet.pdf">OCADU Gallery Crawl 2022</a></li>
      </ul> -->
    <b-container class="my-5">
      <!-- <ul class="page-nav my-4">
        <li><a href="/gallery/submit">how to submit</a></li>
      </ul> -->
      <!-- <galleryIndexEvents /> -->

      <galleryServices />
    </b-container>
  </div>
</template>

<script>
import Hero from '@/components/ui/Hero'
// import galleryIndexEvents from '@/components/events/GalleryIndexEvents'
import galleryServices from '@/components/feature/GalleryServices'
import galleriesSubNav from '@/components/subnav/gallery/GalleriesSubNav'

import axios from 'axios'
export default {
  name: 'galleryIndex',
  layout: 'default',
  head() {
    return {
      title: 'Galleries'
    }
  },
  components: {
    Hero,
    // galleryIndexEvents,
    galleryServices,
    galleriesSubNav

  }
}
</script>

<style>

</style>
