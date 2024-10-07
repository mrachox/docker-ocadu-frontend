<template>
  <div class="my-4">
      <b-row>
        <b-col cols="12" md="6" class="mb-4" v-for="post in posts" v-bind:key="post.nid">
            <div class="mb-4 fullwidth" v-html="post.field_banner_image"></div>
            <time class="my-2 d-block">{{ post.field_date }}</time>
            <div class="mb-4" v-html="post.field_summary"></div>
            <b-button class="stretched-link" :aria-label="'Learn more about '+post.title" :href="'https://www.ocadu.ca/node/' + post.nid" variant="more" target="_blank">Learn More</b-button>
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
      ep: 'https://www.ocadu.ca/api/cead-events',
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
