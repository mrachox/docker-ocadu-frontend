<template>
  <div class="component--disquicklinks">
    <div id="top">
        <ul class="sub-nav">
          <li v-for="post in posts" v-bind:key="post.nid">
            <nuxt-link :to="'/about/governance/' + post.field_slug">{{ post.title }}</nuxt-link>
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
      epFM: 'https://www.ocadu.ca/api/about-pages',
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
      const slug = this.$route.path.split('/')[3]
      axios.get(this.epFM)
        .then(response => {
          console.log(slug)
          this.posts = response.data.filter(post => post.field_slug.includes(slug))
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
// .component--disquicklinks{
//   .sub-nav {
//       li{
//       &:last-child{
//         // display: none;
//       }
//     }
//   }
// }
</style>
