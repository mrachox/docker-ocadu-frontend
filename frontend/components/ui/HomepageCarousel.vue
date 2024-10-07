<template>
  <div>
        <b-carousel
        id="carousel-homepage"
        v-model="slide"
        :interval="2500"
        controls
        fade
        background="#000000"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide v-for="post in posts" v-bind:key="post.nid"
          :caption-html="post.body"
          :text="post.field_subtitle"
          :img-src="post.field_ip_header_image"
        >
        <b-button class="stretched-link text-light" :href="post.field_slug" variant="more">Learn More</b-button>
        </b-carousel-slide>

      </b-carousel>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      slide: 0,
      sliding: null,
      posts: null,
      ep: 'https://www.ocadu.ca/api/homepage-carousel',
    }
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    getAllPosts() {
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data
        })
        .catch(error => {
          console.log('-----error------- ' + slug);
          console.log(error);
        })
    },
  }
}
</script>

<style lang="scss">

</style>
