<template>
  <div>
        <b-carousel
        id="carousel-research"
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
          img-src="https://i.vimeocdn.com/video/551182749_260x146.jpg"
        >
        <b-button class="stretched-link text-light" href="https://player.vimeo.com/video/151439259?autoplay=1&amp;byline=0" variant="more">Watch Video</b-button>
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://i.vimeocdn.com/video/551182846_260x146.jpg"
        >
        <b-button class="stretched-link text-light" href="https://player.vimeo.com/video/151439269?autoplay=1&amp;byline=0" variant="more">Watch Video</b-button>
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://i.vimeocdn.com/video/551182912_260x146.jpg"
        >
        <b-button class="stretched-link text-light" href="https://player.vimeo.com/video/151439264?autoplay=1&amp;byline=0" variant="more">Watch Video</b-button>
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://i.vimeocdn.com/video/551183042_260x146.jpg"
        >
        <b-button class="stretched-link text-light" href="https://player.vimeo.com/video/151439268?autoplay=1&amp;byline=0" variant="more">Watch Video</b-button>
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://i.vimeocdn.com/video/551183007_260x146.jpg"
        >
        <b-button class="stretched-link text-light" href="https://player.vimeo.com/video/151439262?autoplay=1&amp;byline=0" variant="more">Watch Video</b-button>
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://i.vimeocdn.com/video/551182985_260x146.jpg"
        >
        <b-button class="stretched-link text-light" href="https://player.vimeo.com/video/151439263?autoplay=1&amp;byline=0" variant="more">Watch Video</b-button>
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://i.vimeocdn.com/video/551182901_260x146.jpg"
        >
        <b-button class="stretched-link text-light" href="https://player.vimeo.com/video/151439260?autoplay=1&amp;byline=0" variant="more">Watch Video</b-button>
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
