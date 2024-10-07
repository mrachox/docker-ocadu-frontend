<template>
<div class="my-5">
  <div v-for="indexPost in indexPosts" v-bind:key="indexPost.field_slug">
    <h1 class="sr-only">{{ indexPost.title }}</h1>
    <div v-html="indexPost.body"></div>
  </div>
  <gradPrograms :showDesc="true" :showCTA="true" />
</div>
</template>

<script>
import gradPrograms from '@/components/feature/GradPrograms'
import axios from 'axios'
export default {
  name: 'gradAdmIndex',
  layout: 'layout-admissions-grad',
  components: {
    gradPrograms,
  },

  head() {
    return {
      title: "Graduate Admissions",
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
  data() {
    return {
      posts: '',
      indexPosts: '',
      ep: 'https://live-ocad.pantheonsite.io/api/admissions-graduate-child-pages',
      // postTitle: '',
      postMetaDesc: '',
      postKeywords: '',
    }
  },
  created() {
    this.getAllPosts();
    this.getIndexPost();
  },
  methods: {
    getAllPosts() {
      const slug = this.$route.fullPath
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data
        })
        .catch(error => {
          console.log('-----error------- ' + slug);
          console.log(error);
        })
    },

    getIndexPost() {
      const slug = this.$route.fullPath
      axios.get(this.ep)
        .then(response => {
          this.indexPosts = response.data.filter(indexPost => indexPost.nid === '100055522')
          this.postTitle = this.posts[0].title
          this.postMetaDesc = this.posts[0].field_ip_meta_description
          this.postKeywords = this.posts[0].field_ip_meta_keywords
        })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
