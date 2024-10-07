<template>
<div class="component--aboutgovslugsubnav">
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
  data() {
    return {
      posts: null,
      ep: 'https://www.ocadu.ca/api/governance-pages',
    }
  },
  mounted () {
    this.$accordionControl();
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    getAllPosts() {
      const slug = this.$route.path.split('/')[3]

      // const slug1 = this.$route.path.split("/")[1]
      // const slug2 = this.$route.path.split("/")[2]
      // const slug = slug1 + '/' + slug2
      console.log(slug)
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

</style>
