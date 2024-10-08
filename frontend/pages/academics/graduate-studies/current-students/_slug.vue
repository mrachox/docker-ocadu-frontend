<template>
<div class="child--academicprogram mb-5">
  <div v-for="post in posts" v-bind:key="post.field_slug">

    <b-container>
      <div class="page-nav text-center my-4 text-uppercase" v-html="post.field_quicklinks"></div>
      <div class="the-content one-col" v-html="post.body"></div>
    </b-container>

  </div>
</div>
</template>

<script>
// import Hero from '@/components/ui/Hero'
// import contactAcademics from '@/components/contact/ContactAcademics'

import axios from 'axios'
export default {
  name: 'gradCSSlug',
  layut: 'default',
  components: {
    // Hero,
    //     contactAcademics
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
  data() {
    return {
      posts: '',
      ep: 'https://live-ocad.pantheonsite.io/api/grad-academic-programs-pages',
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
      const slug = this.$route.params.slug
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data.filter(post => post.field_slug.includes(slug))
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
