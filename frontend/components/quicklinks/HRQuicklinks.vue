<template>
  <div class="component--hrquicklinks my-5">
    <div id="top">
      <b-container>
        <ul class="page-nav">
          <li v-for="post in posts" v-bind:key="post.nid">
            <nuxt-link :to="'/services/human-resources/' + post.field_slug">{{ post.title }}</nuxt-link>
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
      epELL: 'https://www.ocadu.ca/api/hr-pages',
    }
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    getAllPosts(env) {
      const slug = this.$route.path.split('/')[2]
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
.component--hrquicklinks{
  .page-nav li{
    &:last-child{
      display: none;
    }
  }
}
</style>
