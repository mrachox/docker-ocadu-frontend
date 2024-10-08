<template>
  <div class="my-4">
      <h2>International News</h2>
      <b-row>
        <b-col sm="12" md="3" v-for="post in posts" v-bind:key="post.id">
          <div class="intl-img" v-html="post.field_banner_image">
          </div>
          <b-card
              :title="post.title"
              :img-alt="post.title"
              img-top
              tag="article"
              class="mb-2"
            >
              <p><small>{{post.field_date}}</small></p>
              <b-card-text  v-if="post.field_news_summary"  v-html="truncate(post.field_news_summary, 150)"></b-card-text>
              <b-button class="stretched-link" :aria-label="'Learn more about '+post.title" :href="'https://www.ocadu.ca/node/' + post.nid" variant="more" target="_blank">Learn More</b-button>
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
      filteredNews: [],
      epNews: 'https://www.ocadu.ca/api/international-news',
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
          // this.filteredNews = this.posts.filter(post => post.field_department.includes('International'))
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
  .intl-img {
    overflow: hidden;
    text-align: center;
    padding-bottom: 15px;
    img {
      object-fit: cover;
    }
  }
</style>
