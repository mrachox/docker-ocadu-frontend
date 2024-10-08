<template>
  <div>
        <b-carousel
        id="carousel-research"
        v-model="slide"
        :interval="5000"
        fade
        background="#000000"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >

        <!-- CREATIVE CITY CAMPUS -->
        <b-carousel-slide
          caption-html='<span class="smaller d-block mb-2">CREATIVE CITY CAMPUS</span><span class="d-block mb-2">Revitalizing and expanding our campus</span>'
          text="Ensuring OCAD University’s students have full access to technology-enabled studio-based and experiential learning."
          img-src="https://www.ocadu.ca/AssetFactory.aspx?did=5963"
        >
        <b-button class="stretched-link text-light" href="/creativecitycampus" variant="more">Learn More</b-button>
        </b-carousel-slide>

        <!-- IGNITE IMAGINATION CAMPAIGN -->
        <b-carousel-slide
          caption-html='<span class="smaller d-block mb-2">IGNITE IMAGINATION CAMPAIGN</span><span class="d-block mb-2">What if you could be the spark?</span>'
          text="This transformational fundraising effort moves imagination into impact at OCAD U and beyond. We invite you to join us!"
          img-src="https://www.ocadu.ca/AssetFactory.aspx?did=5362"
        >
        <b-button class="stretched-link text-light" href="/ignite" variant="more">Learn More</b-button>
        </b-carousel-slide>

        <!-- ADMISSIONS -->
        <b-carousel-slide
          caption-html='<span class="smaller d-block mb-2">ADMISSIONS</span><span class="d-block mb-2">Design a career doing what you love</span>'
          text="OCAD University is Canada’s biggest art and design university. We can help you explore your creativity and turn what you love to do into a career."
          img-src="https://www.ocadu.ca/AssetFactory.aspx?did=5770"
        >
        <b-button class="stretched-link text-light" href="/admissions" variant="more">Learn More</b-button>
        </b-carousel-slide>

      </b-carousel>
  </div>
</template>

<script>
export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style lang="scss">

</style>
