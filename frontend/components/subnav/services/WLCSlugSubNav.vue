<template>
  <div class="component--wlcquicklinks">
    <div id="top">
        <ul class="sub-nav">
          <li v-for="post in posts" v-bind:key="post.nid">
            <nuxt-link :to="'/services/writing-and-learning-centre/' + post.field_slug">{{ post.title }}</nuxt-link>
          </li>
          <!-- <li><a href="/services/odesi/community/mighty-pen">Mighty Pen</a></li> -->
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
      epWLC: 'https://www.ocadu.ca/api/wlc-pages',
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
      axios.get(this.epWLC)
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
// .component--wlcquicklinks{
//   .sub-nav {
//       li{
//       &:last-child{
//         // display: none;
//       }
//     }
//   }
// }
</style>
