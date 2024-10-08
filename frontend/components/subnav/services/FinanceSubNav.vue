<template>
  <div class="component--financesubnav">
    <div id="top">
      <ul class="sub-nav">
        <li v-for="post in posts" v-bind:key="post.nid">
          <nuxt-link :to="'/services/financial-matters/' + post.field_slug">{{ post.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      posts: null,
      // posts: [],
      epFM: 'https://www.ocadu.ca/api/finance-pages',
    }
  },
  mounted () {
    this.$accordionControl();
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    getAllPosts(env) {
      const slug = this.$route.fullPath
      axios.get(this.epFM)
        .then(response => {
          this.posts = response.data.filter(post => !post.field_slug.includes('/'))
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
// .component--financesubnav{
//   .sub-nav {
//     li {
//       &:first-child{
//         display: none;
//       }
//     }
//   }
// }
</style>
