<template>
  <div class="mb-2">
    <div id="top">
      <ul class="page-nav">
        <li v-for="post in posts" v-bind:key="post.nid">
          <nuxt-link :to="'/admissions/' + post.field_slug">{{ post.title }}</nuxt-link>
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
      epAdmGradChildren: 'https://www.ocadu.ca/api/admissions-graduate-child-pages',
    }
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    getAllPosts(env) {
      const slug = this.$route.fullPath
      axios.get(this.epAdmGradChildren)
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
// .page-nav {
//   li:last-child {
//     display: none;
//   }
// }
</style>
