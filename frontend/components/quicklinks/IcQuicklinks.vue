<template>
  <div class="component--icquicklinks my-5">
    <div id="top">
      <b-container>
        <ul class="page-nav">
          <li v-for="post in posts" v-bind:key="post.nid">
            <nuxt-link :to="'/services/' + post.field_slug">{{ post.title }}</nuxt-link>
          </li>
        </ul>
      </b-container>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      posts: null,
      epIC: 'https://www.ocadu.ca/api/cead-ic-pages',
    }
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    getAllPosts(env) {
      const slug = this.$route.fullPath
      axios.get(this.epIC)
        .then(response => {
          this.posts = response.data
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
.component--icquicklinks{
  .page-nav li{
    &:first-child{
      display: none;
    }
  }
}
</style>
