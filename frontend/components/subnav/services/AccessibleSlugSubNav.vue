<template>
  <div class="component--accessibleslugsubnav">
    <div id="top">
        <ul class="sub-nav">
          <li v-for="post in posts" v-bind:key="post.nid">
            <nuxt-link :to="'/services/odesi/' + post.field_slug">{{ post.title }}</nuxt-link>
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
      epELL: 'https://www.ocadu.ca/api/odesi-pages',
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
      const slug = this.$route.path.split('/')[4]
      axios.get(this.epELL)
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
// .component--odesislugsubnav{
//   .page-nav li{
//     &:last-child{
//       // display: none;
//     }
//   }
// }
</style>
