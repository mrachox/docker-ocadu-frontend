<template>
  <div class="my-4">
      <h2 class="my-5 text-center">Current Exhibitions &amp; Events</h2>
      <b-row>
        <b-card no-body class="overflow-hidden col-xs-12 col-md-6" v-for="(post, index) in posts" v-if="index <= 1" v-bind:key="post.nid">
          <b-row>
            <b-col md="6">
              <div v-if="post.field_banner_image" v-html="post.field_banner_image || post.field_image || post.field_poster"></div>
              <b-card-img v-else src="https://www.ocadu.ca/sites/default/files/design/default.jpg style="object-fit: cover; max-width: 250px; height: auto; margin-bottom: 1em;"" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
                <p class="text-uppercase">{{ post.field_department }}</p>
                <time v-html="post.field_date"></time>
              <b-card-body :title="post.title" class="pt-0">
                <b-button class="stretched-link" :aria-label="'Learn more about '+post.title" :href="'https://www.ocadu.ca/node/' + post.nid" variant="more" target="_blank">Learn More</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-row>
      <b-row>
        <b-card no-body class="overflow-hidden col-xs-12 col-md-6" v-for="(post, index) in posts" v-if="index > 1 && index <=3" v-bind:key="post.nid">
          <b-row>
            <b-col md="6">
              <b-card-img v-if="post.field_poster" :src="'https://www.ocadu.ca' + post.field_poster" class="rounded-0"></b-card-img>
              <b-card-img v-else src="https://www.ocadu.ca/sites/default/files/design/default.jpg style="object-fit: cover; max-width: 250px; height: auto; margin-bottom: 1em;"" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <p class="text-uppercase">{{ post.field_department }}</p>
              <time>{{ post.field_date }}</time>
              <b-card-body :title="post.title" class="pt-0">
                <b-button class="stretched-link" :aria-label="'Learn more about '+post.title" :href="'https://www.ocadu.ca/node/' + post.nid" variant="more" target="_blank">Learn More</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-row>
      <b-row>
        <b-col sm="6" md="4" lg="2" v-for="(post, index) in posts" v-if="index > 3 && index <=9" v-bind:key="post.nid">
          <p class="text-uppercase">{{ post.field_department }}</p>
          <time>{{ post.field_date }}</time>
            <b-card
               :title="post.title"
               tag="article"
               class="mb-4"
             >
             <b-button :href="post.field_slug" variant="more" :title="post.title" class="stretched-link">Learn More</b-button>
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
      ep: 'https://www.ocadu.ca/api/all-gallery-current-events',
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

</style>
