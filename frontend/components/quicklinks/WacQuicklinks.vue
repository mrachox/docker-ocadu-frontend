<template>
  <div class="component--wacquicklinks my-5">
    <div id="top">
      <b-container>
        <ul class="page-nav">
          <li v-for="post in posts" v-bind:key="post.nid">
            <nuxt-link :to="'/academics/' + post.field_slug">{{ post.title }}</nuxt-link>
          </li>
        </ul>
      </b-container>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      posts: null,
      epELL: 'https://www.ocadu.ca/api/wac-pages',
    }
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    getAllPosts(env) {
      const slug = this.$route.fullPath
      axios.get(this.epELL)
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

<style lang="scss" scoped>
.component--wacquicklinks{
  .page-nav li{
    &:last-child{
      display: none;
    }
  }
}
</style>
