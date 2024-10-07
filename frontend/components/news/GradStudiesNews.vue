<template>
  <div class="my-4">
    <b-container>
      <b-row>
        <b-col sm="12" md="6" lg="3" v-for="post in posts" v-bind:key="post.id">
                <b-card
                   :title="post.title"
                   :img-src="'https://www.ocadu.ca/' + post.field_image"
                   :img-alt="post.title"
                   img-top
                   tag="article"
                   class="mb-4"
                 >
                   <b-card-text>
                     {{post.title}}
                   </b-card-text>
                   <b-button
                   :aria-label="'Learn more about '+post.title"
                   :href="'https://www.ocadu.ca/node/' + post.nid"
                   variant="more"
                   :title="post.title"
                   class="stretched-link">
                      Learn More
                    </b-button>
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
      ep: 'https://www.ocadu.ca/api/grad-studies-news',
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
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data.slice(0, 4)
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
