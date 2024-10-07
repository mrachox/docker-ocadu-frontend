<template>
  <div class="component--itquicklinks">
    <div id="top">
        <ul class="sub-nav">
          <li v-for="post in posts" v-bind:key="post.nid">
            <nuxt-link :to="'/services/it/' + post.field_slug">{{ post.title }}</nuxt-link>
          </li>
          <li><nuxt-link to="/sites/default/files/legacy_assets/content/it/OCAD%20U%20Digital%20Campus%20Strategy.pdf">Digital Campus Strategy</nuxt-link></li>
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
      epELL: 'https://www.ocadu.ca/api/it-services-pages',
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
      axios.get(this.epELL)
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
// .component--itquicklinks{
//   .sub-nav li{
//     &:first-child{
//       // display: none;
//     }
//   }
// }
</style>
