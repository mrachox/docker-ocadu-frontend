<template>
<div class="my-5">
  <div v-for="post in posts" v-bind:key="post.field_slug">
    <h1 class="sr-only">{{post.title}}</h1>
    <div v-html="post.body"></div>
  </div>
</div>
</template>

<script>

import axios from 'axios'
export default {
    name: 'studentPolSecondSlug',
    layout: 'layout-onecol',
    components: {
      // ellChildFirstQuicklinks
    },
    head() {
      return {
        title: this.postTitle,
        meta: [{
          hid: 'description',
          name: 'description',
          content: this.postMetaDesc
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.postKeywords
        }
      ]
      }
    },
  data () {
    return {
      posts: '',
      ep: 'https://live-ocad.pantheonsite.io/api/students-pages',
      postTitle: '',
      postMetaDesc: '',
      postKeywords: '',
    }
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    getAllPosts() {
      //gets around URLs with common words
      const slug1 = this.$route.path.split("/")[2]
      const slug2 = this.$route.path.split("/")[3]
      const slug = slug1 + '/' + slug2

      axios.get(this.ep)
        .then(response => {
          this.posts = response.data.filter(post => post.field_slug === slug)
          this.postTitle = this.posts[0].title
          this.postMetaDesc = this.posts[0].field_ip_meta_description
          this.postKeywords = this.posts[0].field_ip_meta_keywords
        })
        .catch(error => {
          console.log('-----error------- ' + slug);
          console.log(error);
          console.log(error.response.status);
          console.log(error.response.headers);
        })
    },
  }
}
</script>
<style lang="scss" scoped>

</style>
