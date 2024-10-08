<template>
  <div id="c19NewsHome" style="margin-top:0;">
    <!-- <b-container> -->
      <!-- <h2>Latest News</h2> -->
      <b-row>
        <b-col sm="12" md="12" v-for="post in posts" v-bind:key="post.id">
          <b-card
              :title="post.title"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <p><small>{{post.field_date}}</small></p>
              <b-card-text  v-if="post.body"  v-html="truncate(post.body, 150)"></b-card-text>
              <b-button class="stretched-link" :aria-label="'Learn more about '+post.title" :href="'https://www.ocadu.ca/node/' + post.nid" variant="more" target="_blank">Learn More</b-button>
          </b-card>
        </b-col>
      </b-row>
    <!-- </b-container> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      posts: null,
      epNews: 'https://www.ocadu.ca/api/c19-news-home',
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
// #c19News{
//   .card {
//     background: black;
//
//     .btn-more {
//       border: 1px solid white !important;
//       color: white !important;
//     }
//
//     .btn-more:hover {
//       border: none !important;
//     }
//   }
// }

#c19NewsHome {
  margin-top:0;

  .card-body {
    padding:0;
  }
  h1, h2 {
    color: black;
  }
  .card {
    padding:0;
    p, h4 {
      color: black;
    }
    ul {
      li {
        color: black;
      }
    }
  }
}

</style>
