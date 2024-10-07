<template>
  <div class="my-4">
      <h2 class="my-5 text-center">Upcoming Events</h2>
      <b-row>
        <b-col sm="12" md="6">
          <div class="onsite-lead-img" v-html="post.field_banner_image"></div>
        </b-col>
        <b-col sm="12" md="6">
          <time class="pl-4" v-html="post.field_date"></time>
          <b-card-body :title="post.title" class="pl-4">
            <b-card-text v-html="post.field_summary"></b-card-text>
            <b-button class="stretched-link" :aria-label="'Learn more about '+post.title" :href="'https://www.ocadu.ca/node/' + post.nid" variant="more" target="_blank">Learn More</b-button>
          </b-card-body>
        </b-col>
      </b-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      posts: null,
      ep: 'https://www.ocadu.ca/api/upcoming-onsite-events',
    }
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    getAllPosts() {
      const slug = this.$route.fullPath
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data
          console.log(response.data)
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
.onsite-lead-img {
    img {
        width: 100%;
        height: auto;
    }
}
</style>
