<template>
  <div class="component--sexviolencesuppsubnav">
    <div id="top">
      <ul class="sub-nav">
        <li v-for="post in posts" v-bind:key="post.nid">
          <nuxt-link :to="'/students/' + post.field_slug">{{ post.title }}</nuxt-link>
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
      ep: 'https://www.ocadu.ca/api/students-pages',
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
      axios.get(this.ep)
        .then(response => {
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
// .component--aboutsubnav{
//   .sub-nav {
//     li {
//       &:first-child{
//         display: none;
//       }
//     }
//   }
// }
</style>
