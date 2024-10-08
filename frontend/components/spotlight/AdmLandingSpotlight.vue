<template>
  <div class="py-5">
    <h1 class="text-center mb-4">ADMISSION TO OCAD UNIVERSITY</h1>
    <p>OCAD University is Canada’s largest art and design university located in downtown Toronto. We’re a world-famous
    hub for art, design, digital media, research, innovation and creativity. Choose between 17 undergrad and seven grad programs – we’ll teach you how to get paid to do what you love.</p>
    <div class="my-5">

      <!-- CAROUSEL READY add controls back -->

      <b-carousel
      id="carousel-admissions"
      v-model="slide"
      :interval="5000"
      fade

      background="#ffffff"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      >

      <b-carousel-slide>
        <template v-slot:img>
          <b-card-group>
            <b-card
            title="UNDERGRADUATE ADMISSIONS"
            img-src="https://ocadu.ca/Assets/content/admissions/UNDERGRADUATE%20ADMISSIONS.jpg"
            style="padding:10px; text"
            >
            <b-button class="stretched-link text-dark" href="/admissions/undergraduate" variant="more">Learn More</b-button>
            </b-card>
            <b-card
            title="GRADUATE ADMISSIONS"
            img-src="https://ocadu.ca/Assets/content/admissions/GRADUATE%20ADMISSIONS.jpg"
            style="padding:10px"
            >
            <b-button class="stretched-link text-dark" href="/admissions/graduate" variant="more">Learn More</b-button>
            </b-card>
            <b-card
            title="INTERNATIONAL ADMISSIONS"
            img-src="https://ocadu.ca/Assets/content/admissions/INTERNATIONAL%20ADMISSIONS.jpg"
            style="padding:10px"
            >
            <b-button class="stretched-link text-dark" href="/admissions/international-applicants" variant="more">Learn More</b-button>
            </b-card>
            <b-card
            title="HOW TO APPLY"
            img-src="https://ocadu.ca/Assets/content/admissions/HOW%20TO%20APPLY.jpg"
            style="padding:10px"
            >
            <b-button class="stretched-link text-dark" href="/admissions/guide-to-admissions" variant="more">Learn More</b-button>
            </b-card>
          </b-card-group>
        </template>

      </b-carousel-slide>

      <!-- STILL NEEDS COPY WORK -->
      <!-- <b-carousel-slide>
        <template v-slot:img>
          <b-card-group>
            <b-card
            title="OPEN HOUSE"
            img-src="https://ocadu.ca/Assets/content/admissions/OPEN%20HOUSE.jpg"
            style="padding:10px"
            >
            <b-button class="stretched-link text-dark" href="/admissions/open-house" variant="more">Learn More</b-button>

            </b-card>
            <b-card
            title="PROGRAMS"
            img-src="https://ocadu.ca/Assets/content/admissions/Admissions+page+PROGRAMS.jpg"
            style="padding:10px"
            >
            <b-button class="stretched-link text-dark" href="/admissions/programs" variant="more">Learn More</b-button>

            </b-card>
            <b-card
            title="INFO FOR PARENTS"
            img-src="https://ocadu.ca/Assets/content/admissions/INFO+FOR+PARENTS.jpg"
            style="padding:10px"
            >
            <b-button class="stretched-link text-dark" href="/admissions/info-for-parents" variant="more">Learn More</b-button>

            </b-card>
            <b-card
            title="CAMPUS TOURS"
            img-src="https://ocadu.ca/Assets/content/admissions/COME+FOR+A+TOUR.jpg"
            style="padding:10px"
            >
            <b-button class="stretched-link text-dark" href="/admissions/visit" variant="more">Learn More</b-button>

            </b-card>
          </b-card-group>
        </template>

      </b-carousel-slide> -->


    </b-carousel>


      <!-- <b-row>
        <b-col sm="6" md="3">
          <a href="/admissions/undergraduate" title="UNDERGRADUATE ADMISSIONS">
            <p><img src="/Assets/content/admissions/UNDERGRADUATE%20ADMISSIONS.jpg" alt="UNDERGRADUATE ADMISSIONS" style="width:100%;"></p>
            <h4>UNDERGRADUATE ADMISSIONS</h4>
          </a>
        </b-col>
        <b-col sm="6" md="3">
          <a href="/admissions/graduate" title="GRADUATE ADMISSIONS">
            <p><img src="/Assets/content/admissions/GRADUATE%20ADMISSIONS.jpg" alt="GRADUATE ADMISSIONS" style="width:100%;"></p>
            <h4>GRADUATE ADMISSIONS</h4>
          </a>
        </b-col>
        <b-col sm="6" md="3">
          <a href="/admissions/international-applicants" title="INTERNATIONAL ADMISSIONS">
            <p><img src="/Assets/content/admissions/INTERNATIONAL%20ADMISSIONS.jpg" alt="INTERNATIONAL ADMISSIONS" style="width:100%;"></p>
            <h4>INTERNATIONAL ADMISSIONS</h4>
          </a>
        </b-col>
        <b-col sm="6" md="3">
          <a href="/admissions/guide-to-admissions" title="HOW TO APPLY">
            <p><img src="/Assets/content/admissions/HOW%20TO%20APPLY.jpg" alt="HOW TO APPLY" style="width:100%;"></p>
            <h4>HOW TO APPLY</h4>
          </a>
        </b-col>
      </b-row> -->


    </div>
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
#carousel-admissions {
  .carousel-control-prev, .carousel-control-next {
    background: none;
    height: 75%;
  }

  .btn-more:hover {
    color: white !important;
  }
}
</style>
