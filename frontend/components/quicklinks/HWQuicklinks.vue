<template>
  <div class="component--hwquicklinks my-5">
    <div id="top">
      <b-container>
        <ul class="page-nav">
          <li v-for="post in posts" v-bind:key="post.nid">
            <nuxt-link :to="'/services/health-and-wellness/' + post.field_slug">{{ post.title }}</nuxt-link>
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
      epHW: 'https://www.ocadu.ca/api/student-wellness-pages',
    }
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    getAllPosts(env) {
      const slug = this.$route.path.split('/')[2]
      axios.get(this.epHW)
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
.component--hwquicklinks{
  .page-nav li{
    &:last-child{
      display: none;
    }
  }
}
</style>
