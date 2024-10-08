<template>
  <div class="my-4">
      <h2 class="my-5 text-center">Past Exhibitions &amp; Events</h2>
      <b-card-group columns>
        <b-card
          :title="post.title"
          :img-src="'https://www.ocadu.ca' + (post.field_banner_image || post.field_poster || post.field_image)"
          :img-alt="post.title"
          img-top
          v-for="post in posts" v-bind:key="post.nid"
        >
          <b-card-text>
            <time class="my-2 d-block" v-html="post.field_date"></time>
          </b-card-text>
          <b-button class="stretched-link" :aria-label="'Learn more about '+post.title" :href="'https://www.ocadu.ca/node/' + post.nid" variant="more" target="_blank">Learn More</b-button>
        </b-card>
      </b-card-group>
      <p class="text-center" style="margin: 3rem 0;"><b-button href="/gallery/onsite/onsite-past" variant="quicklink" target="_blank">MORE PAST EVENTS</b-button></p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      posts: null,
      ep: 'https://www.ocadu.ca/api/past-onsite-events',
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
          this.posts = response.data.slice(0, 9)
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

.card-columns {
  column-count: unset !important;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

@media only screen and (max-width: 560px) {
  .card-columns {
    grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (max-width: 420px) {
  .card-columns {
    grid-template-columns: 1fr 1fr;
  }
}

</style>
