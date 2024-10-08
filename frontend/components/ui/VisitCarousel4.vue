<template>
  <div class="my-5">
        <h2>Galleries</h2>
        <p>Develop your creative career and connections. Meet fellow creatives, get inspired or showcase your own work in one of our many downtown Toronto gallery spaces.
</p>
        <b-carousel
        id="carousel-campus2"
        v-model="slide"
        :interval="5000"
        fade
        controls
        indicators
        background="#000000"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        >

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/4.jpg"
          caption="The Great Hall, home to many events and exhibitions"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/20.jpg"
          caption="Ada Slaight Student Transit and Critique Galleries"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/21.jpg"
          caption="Ada Slaight Student Transit and Critique Galleries"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/34.jpg"
          caption="Onsite Gallery, OCAD U’s professional gallery"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/35.jpg"
          caption="Onsite Gallery, OCAD U’s professional gallery"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/37.jpg"
          caption="49 McCaul Street, home to the Inclusive Design Research Centre and student exhibition and studio space"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/42.jpg"
          caption="Graduate Studies Gallery"
        >
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
