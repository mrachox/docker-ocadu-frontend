<template>
  <div class="component--libraryslugsubnav">
    <div id="top">
        <ul class="sub-nav">
          <li v-for="post in posts" v-bind:key="post.nid">
            <a :href="'/services/library/' + post.field_slug">{{ post.title }}</a>
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
      epIT: 'https://www.ocadu.ca/api/library-pages',
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
      axios.get(this.epIT)
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
// .component--itslugsubnav{
//   .sub-nav li{
//     &:last-child{
//       // display: none;
//     }
//   }
// }
</style>
