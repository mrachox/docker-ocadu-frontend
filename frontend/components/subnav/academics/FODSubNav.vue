<template>
  <div class="component--fod">
    <div id="top">
        <ul class="sub-nav">
          <!--CHILDPAGES-->
          <li v-for="child_pages_post in child_pages_posts" v-bind:key="child_pages_post.nid">
            <nuxt-link :to="'/academics/faculty-of-design/' + child_pages_post.field_slug">{{ child_pages_post.title }}</nuxt-link>
          </li>
          <!--PROGRAMS-->
          <li v-for="post in posts" v-bind:key="post.nid">
            <nuxt-link :to="'/academics' + post.field_slug">{{ post.title }}</nuxt-link>
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
      child_pages_posts: '',
      posts: '',
      epChP: 'https://www.ocadu.ca/api/fod-child-pages',
      ep: 'https://www.ocadu.ca/api/academic-programs-list',
    }
  },
  mounted () {
    this.$accordionControl();
  },
  created() {
    this.getChPosts();
    this.getAllPosts();
  },
  methods: {
    getChPosts() {
      const slug = this.$route.fullPath
      axios.get(this.epChP)
        .then(response => {
          this.child_pages_posts = response.data.filter(child_pages_post => !child_pages_post.field_slug.includes('/'))
        })
        .catch(error => {
          console.log('-----error------- ' + slug);
          console.log(error);
        })
    },
    getAllPosts() {
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data.filter(post => post.field_ip_department.includes('Design'))
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
