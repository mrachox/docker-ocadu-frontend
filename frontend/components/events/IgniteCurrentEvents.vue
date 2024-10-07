<template>
  <div class="my-4">
      <h2 class="my-5 text-center">Current &amp; Upcoming Exhibitions</h2>
      <b-row>
        <b-card no-body class="overflow-hidden col-xs-12 col-md-6" v-for="post in posts" v-bind:key="post.nid">
          <b-row>
            <b-col md="6">
              <div v-if="post.field_banner_image" class="onsite-lead-img" v-html="post.field_banner_image || post.field_image || post.field_poster"></div>
              <b-card-img v-else src="https://www.ocadu.ca/sites/default/files/design/default.jpg" class="rounded-0" style="object-fit: cover; max-width: 250px; height: auto; margin-bottom: 1em;"></b-card-img>
            </b-col>
            <b-col md="6">
              <time v-html="post.field_date"></time>
              <b-card-body :title="post.title">
                <b-card-text>
                  {{ post.field_summary }}
                </b-card-text>
                <b-button class="stretched-link" :aria-label="'Learn more about '+post.title" :href="'https://www.ocadu.ca/node/' + post.nid" variant="more" target="_blank">Learn More</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-row>
  </div>
</template>
 
<script>
import axios from 'axios'
export default {
  data () {
    return {
      posts: null,
      ep: 'https://www.ocadu.ca/api/current-ignite-events',
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