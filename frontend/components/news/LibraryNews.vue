<template>
  <div class="my-4">
    <b-container>
      <h2>Library News &amp; Events <small><a href="/library-news-archive">(See More)</a></small></h2>
      <b-row>
        <b-col sm="12" md="3" v-for="post in filteredNews" v-bind:key="post.id">
          <b-card
              :title="post.title"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text  v-if="post.body"  v-html="truncate(post.body, 150)"></b-card-text>
              <b-button class="stretched-link" :aria-label="'Learn more about '+post.title" :href="'https://www.ocadu.ca/node/' + post.nid" variant="more" target="_blank">Learn More</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      posts: null,
      filteredNews: [],
      epNews: 'https://www.ocadu.ca/api/library-news',
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
    truncate: function(value, limit) {
      if (value.length > limit) {
        value = value.substring(0, (limit - 3)) + '...';
      }
      return value
    },
    getAllPosts() {
      const slug = this.$route.fullPath
      axios.get(this.epNews)
        .then(response => {
          this.posts = response.data
          this.filteredNews = this.posts.filter(post => post.field_department.includes('Library')).slice(0, 4)
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
