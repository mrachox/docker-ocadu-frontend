<template>
  <div class="component--studioofficequicklinks py-5">
    <b-container id="top">
      <ul class="page-nav">
        <li v-for="post in filteredPosts" v-bind:key="post.nid">
          <nuxt-link :to="'/services/studios/' + post.field_slug">{{ post.title }}</nuxt-link>
        </li>
      </ul>
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
      epSS: 'https://www.ocadu.ca/api/shops-pages',
    }
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    getAllPosts(env) {
      const slug = this.$route.fullPath
      axios.get(this.epSS)
        .then(response => {
          this.posts = response.data
          this.filteredPosts = this.posts.filter(post => post.field_slug.includes('studio-management-office'))
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
// .component--studioofficequicklinks{
//   .page-nav li{
//     &:last-child{
//       display: none;
//     }
//   }
// }
</style>
