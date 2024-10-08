<template>
  <div class="my-5">
        <h2>Student Services</h2>
        <p>We’re here to help you succeed. Connect with services and resources to support wellness in your health, education, and creative career.
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
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/17.jpg"
          caption="Library"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/23.jpg"
          caption="The Learning Zone – student event and workspace as part of the Library"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/33.jpg"
          caption="RBC Centre for Emerging Artists and Designers, OCAD U’s career centre for students and alumni"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/38.jpg"
          caption="230 Richmond Street West Student Centre, home to services such as Registrar’s Office, Financial Aid and Student Wellness Centre"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/39.jpg"
          caption="230 Richmond Street West Student Centre, home to services such as Registrar’s Office, Financial Aid and Student Wellness Centre"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/40.jpg"
          caption="Student Wellness Centre (medical centre)"
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
