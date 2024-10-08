<template>
  <div class="component--foa">
    <div id="top">
        <ul class="sub-nav">
          <li v-for="post in posts" v-bind:key="post.nid">
            <nuxt-link :to="'/academics/minors/' + post.field_slug">{{ post.title }}</nuxt-link>
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
      posts: '',
      epChP: 'https://www.ocadu.ca/api/minor-programs-pages',
    }
  },
  mounted () {
    this.$accordionControl();
  },
  created() {
    this.getChPosts();
  },
  methods: {
    getChPosts() {
      const slug = this.$route.fullPath
      axios.get(this.epChP)
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
