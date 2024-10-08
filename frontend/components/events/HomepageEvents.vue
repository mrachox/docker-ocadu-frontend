<template>
  <div class="my-4 pl-4 pr-4">
      <h3 class="text-center my-4">Events</h3>
      <b-row class="my-5 justify-content-center">
        <b-button href="https://www.ocadu.ca/events" variant="quicklink" target="_blank" class="mr-4">More Events</b-button>
        <b-button href="https://www.ocadu.ca/events-archive" variant="quicklink" target="_blank">Archive</b-button>
      </b-row>

      <b-row class="my-5">
        <b-card no-body class="overflow-hidden" style="min-height: 400px;" v-for="(post, index) in posts" v-if="index == 0" v-bind:key="post.nid">
          <b-row>
            <b-col v-if="post.field_image" sm="12" md="6">
              <b-card-img  :src="'https://www.ocadu.ca' + post.field_image" class="rounded-0"></b-card-img>
            </b-col>
            <div v-if="post.field_banner_image" class="col-sm-12 col-md-6">
              <div class="banner-image" v-html="post.field_banner_image"></div>
            </div>
            <b-col v-else sm="12" md="6">
              <b-card-img  src="https://www.ocadu.ca/sites/default/files/design/default.jpg" class="rounded-0"></b-card-img>
            </b-col>
            <b-col sm="12" md="6">
              <time v-html="post.field_date"></time>
              <b-card-body :title="post.title" class="pt-0">
                <!-- <b-card-text v-if="post.body" v-html="truncate(post.body, 150)"></b-card-text>
                <b-card-text v-if="post.field_body" v-html="post.field_body"></b-card-text> -->
                <b-card-text v-html="truncate(post.field_summary, 150)"></b-card-text>
                <b-button class="stretched-link" :aria-label="'Learn more about '+post.title" :href="'https://www.ocadu.ca/node/' + post.nid" variant="more" target="_blank">Learn More</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-row>

      <b-row class="my-5">
        <b-col sm="12" md="6" v-for="(post, index) in posts" v-if="index > 0 && index < 3" v-bind:key="post.id">
            <b-card>
                  <time>{{ post.field_date }}</time>
                  <b-card-body :title="post.title" class="pt-0">
                    <!-- <b-card-text v-if="post.body" v-html="truncate(post.body, 150)"></b-card-text>
                    <b-card-text v-if="post.field_body" v-html="post.field_body"></b-card-text> -->
                    <b-card-text v-html="truncate(post.field_summary, 150)"></b-card-text>
                    <b-button class="stretched-link" :aria-label="'Learn more about '+post.title" :href="'https://www.ocadu.ca/node/' + post.nid" variant="more" target="_blank">Learn More</b-button>
                  </b-card-body>
            </b-card>
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
      ep: 'https://www.ocadu.ca/api/homepage-events',
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
