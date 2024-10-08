<template>
  <div class="component--disquicklinks">
    <div id="top">
        <ul class="sub-nav">
          <li v-for="post in posts" v-bind:key="post.nid">
            <nuxt-link :to="'/services/disability-services/' + post.field_slug">{{ post.title }}</nuxt-link>
          </li>
          <!-- <li><a href="/services/disability-services/info-Students">Information for Students</a></li> -->
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
      epDS: 'https://www.ocadu.ca/api/disability-services-pages',
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
      axios.get(this.epDS)
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
// .component--disquicklinks {
//   .sub-nav li{
//     &:last-child{
//       // display: none;
//     }
//   }
// }
</style>
