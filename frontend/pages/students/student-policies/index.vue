<template>
<div>
  <policySlugSubNav/>
  <b-container v-for="post in posts" v-bind:key="post.nid">
      <h1 class="sr-only">{{ post.title }}</h1>
      <div class="the-content one-col" v-html="post.body"></div>
  </b-container>
</div>
</template>

<script>
import policySlugSubNav from '@/components/subnav/students/PolicySlugSubNav'
import axios from 'axios'
export default {
  name: 'studentPolIndex',
  layout: 'default',
  components: {
    policySlugSubNav,
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
  // head() {
  //   return {
  //     title: 'Current Students',
  //     meta: [{
  //       hid: 'description',
  //       name: 'description',
  //       content: 'Current Students'
  //     }]
  //   }
  // },
  data() {
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
      const slug = this.$route.fullPath
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data.filter(post => post.nid === '100064593')
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
