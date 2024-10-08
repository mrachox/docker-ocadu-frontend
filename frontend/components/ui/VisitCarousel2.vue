<template>
  <div class="my-5">
        <h2>Study and Workspaces</h2>
        <p>Create, collaborate and connect in on-campus study spaces. Work alongside your fellow students while getting access to resources and spaces designed for developing your creativity.
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
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/5.jpg"
          caption="Lecture auditorium"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/12.jpg"
          caption="Student café"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/16.jpg"
          caption="Student lounge"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/19.jpg"
          caption="Student workspace in the Rosalie Sharp Centre for Design"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/22.jpg"
          caption="One of many computer labs on campus"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/26.jpg"
          caption="Classroom and student workspace"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/30.jpg"
          caption="Rosalie Sharp Pavilion, home to the RBC Centre for Emerging Artists and Designers and student workspace"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/31.jpg"
          caption="Student workspace in the Rosalie Sharp Pavilion"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/32.jpg"
          caption="Student workspace in the Rosalie Sharp Pavilion"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/41.jpg"
          caption="205 Richmond Street West, home of OCAD U’s Graduate Studies"
        >
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://www.ocadu.ca/sites/default/files/documents/admissions/36.jpg"
          caption="OCAD U CO, OCAD U’s executive training centre on Toronto’s waterfront"
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
