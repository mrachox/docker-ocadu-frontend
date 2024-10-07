<template>
  <div class="my-4">
      <h3 class="text-center my-4">Research Events <small>(<a href="https://www.ocadu.ca/archive-events/Research">SEE ALL</a>)</small></h3>
      <b-card no-body class="overflow-hidden" style="max-width: 100%; min-height: 320px;" v-for="(post, index) in posts" v-if="index < 3" v-bind:key="post.id">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img v-if="post.field_banner_image" :src="'https://www.ocadu.ca' + post.field_banner_image" class="rounded-0"></b-card-img>
              <b-card-img v-else src="https://www.ocadu.ca/sites/default/files/design/default.jpg" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <time class="pl-4">{{ post.field_date }}</time>
              <b-card-body :title="post.title" class="pl-4">
                <!-- <b-card-text v-html="truncate(post.field_summary, 150)"></b-card-text> -->
                <b-button class="stretched-link" :aria-label="'Learn more about '+post.title" :href="'https://www.ocadu.ca/node/' + post.nid" variant="more" target="_blank">Learn More</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      posts: null,
      ep: 'https://www.ocadu.ca/api/research-events',
    }
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    truncate: function(value, limit) {
      if (value.length > limit) {
        value = value.substring(0, (limit - 3)) + '...';
      }
      return value
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
