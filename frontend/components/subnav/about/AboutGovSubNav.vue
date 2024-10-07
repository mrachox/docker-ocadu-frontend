<template>
<div class="component--aboutgovsubnav">
  <div id="top">
    <ul class="sub-nav">
      <li><a href="/about/governance/board-of-governors/board-elections">Board Elections</a></li>
      <li v-for="post in posts" v-bind:key="post.nid">
        <nuxt-link :to="'/about/governance/' + post.field_slug">{{ post.title }}</nuxt-link>
      </li>
      <li><a href="/about/president">President</a></li>
    </ul>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      posts: null,
      epAbt: 'https://www.ocadu.ca/api/governance-pages',
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
          //TODO: SORT DOESN"T WORK
          this.posts = response.data.sort(function(a, b){
            return a.title - b.title
          }).filter(post => !post.field_slug.includes('/'))

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
// .component--aboutgovsubnav {
//     .sub-nav {
//         li {
//             &:first-child {
//                 display: none;
//             }
//         }
//     }
// }
</style>
