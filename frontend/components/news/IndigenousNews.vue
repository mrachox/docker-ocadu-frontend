<template>
  <div class="my-4">
    <h2 class="text-center">Recent News</h2>
    <b-row>
      <b-col cols="12" md="3" class="my-4" v-for="post in posts" v-bind:key="post.nid">
          <div class="mb-4 fullwidth"><img :src="post.field_image" :alt="post.title"> </div>
          <time class="my-2 d-block">{{ post.field_date }}</time>
          <h3 class="mb-4" v-html="post.title"></h3>
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
      filteredNews: [],
      epNews: 'https://www.ocadu.ca/api/invc-news',
    }
  },
  filters: {
    truncate: function(value, limit) {
      if (value.length > limit) {
        value = value.substring(0, (limit - 3)) + '...';
      }
      return value
    }
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    getAllPosts() {
      const slug = this.$route.fullPath
      axios.get(this.epNews)
        .then(response => {
          this.posts = response.data.slice(0, 4)
          // this.filteredNews = this.posts.filter(post => post.field_department.includes('INVC Centre')).slice(0, 4)
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
