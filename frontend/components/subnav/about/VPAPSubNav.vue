<template>
  <div class="component--vpapsubnav">
    <div id="top">
      <ul class="sub-nav">
        <li v-for="post in posts" v-bind:key="post.nid">
          <nuxt-link :to="'/about/governance/VP-academic-and-provost/' + post.field_slug">{{ post.title }}</nuxt-link>
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
      epAbt: 'https://www.ocadu.ca/api/vpap-pages',
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
      axios.get(this.epAbt)
        .then(response => {
          console.log(slug)
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
// .component--vpapsubnav {
//   .sub-nav {
//     li {
//       &:first-child{
//         // display: none;
//       }
//     }
//   }
// }
</style>
