<template>
<div>
  <b-container class="component--ellchildfirstquicklinks my-5">
    <div id="top">
      <ul class="page-nav">
        <li v-for="post in filteredPosts" v-bind:key="post.nid">
          <nuxt-link :to="'/academics/' + post.field_slug">{{ post.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </b-container>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      posts: null,
      filteredPosts: [],
      epELL: 'https://www.ocadu.ca/api/ell-pages',
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
          this.filteredPosts = this.posts.filter(post => post.field_slug.includes('english-for-art-and-design'))
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
.component--ellchildfirstquicklinks{
  .page-nav li{
    // &:last-child{
    //   display: none;
    // }
  }
}
</style>
