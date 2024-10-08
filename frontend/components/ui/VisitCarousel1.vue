<template>
  <div class="my-5">
        <h2>Shops and Studios</h2>
        <p>Your creativity will flourish in our 20+ shops and studios filled with state-of-the-art tools and expert technicians.</p>
        <b-carousel
        id="carousel-campus1"
        v-model="slide"
        :interval="5000"
        fade
        controls
        indicators
        background="#000000"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        >

        <!-- CREATIVE CITY CAMPUS -->
        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/1.jpg"
          caption="OCAD University and Grange Park"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/2.jpg"
          caption="100 McCaul Street – the Rosalie Sharp Centre for Design"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/3.jpg"
          caption="Material Art and Design program studio"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/6.jpg"
          caption="Drawing &amp; Painting program studio"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/7.jpg"
          caption="Drawing &amp; Painting program studio"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/8.jpg"
          caption="Photography studio"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/9.jpg"
          caption="Wood shop"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/10.jpg"
          caption="Metal shop"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/11.jpg"
          caption="Fabrication Centre open space"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/13.jpg"
          caption="Foundry"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/14.jpg"
          caption="Ada Slaight Studios"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/15.jpg"
          caption="Printmaking studio"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/27.jpg"
          caption="George Reid House, home to classrooms and studios"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/28.jpg"
          caption="Pottery studio"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/29.jpg"
          caption="Integrated Media studio"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/18.jpg"
          caption="Drawing &amp; Painting program thesis studio"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/24.jpg"
          caption="Jewellery studio"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/25.jpg"
          caption="Fabrication studio"
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
