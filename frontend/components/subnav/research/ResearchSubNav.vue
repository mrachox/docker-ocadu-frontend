<template>
  <div class="component--campusquicklinks">
    <div id="top">
        <ul class="sub-nav">
          <li v-for="post in posts" v-bind:key="post.nid">
            <nuxt-link :to="'/research/' + post.field_slug" v-html='post.title'></nuxt-link>
          </li>
          <li><a href="/research/canada-research-chairs">Canada Research Chairs</a></li>
          <li><a href="/research/projects">Research Projects</a></li>
          <li><a href="https://idrc.ocadu.ca/" target="_blank">Inclusive Design Research Centre</a></li>
          <li><a href="/services/Library/collections/open-research-repo">Open Research Repository</a></li>
          <!-- <li><a href="/research/global-centre-for-climate-action">Global Centre for Climate Action</a></li> -->
          <li><a href="https://www.ocadu.ca/cultural-policy-hub">Cultural Policy Hub</a></li>
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
      ep: 'https://www.ocadu.ca/api/research',
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
      axios.get(this.ep)
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

</style>
