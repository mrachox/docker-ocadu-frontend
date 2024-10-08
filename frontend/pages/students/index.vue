<template>
<div id="students">
  <studentsSubNav/>
  <Hero variableText="Students" variableImg="/Assets/design/spotlights/spotlight-studentlife-crowd-orientation.jpg" />
  <b-container class="my-5">
    <b-row class="my-4">
      <b-col sm="12" md="12">
        <div v-for="post in posts" v-bind:key="post.field_slug">
          <h2 class="sr-only">{{ post.title }}</h2>
          <div v-html="post.body"></div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>


<script>
import Hero from '@/components/ui/Hero'
import studentsSubNav from '@/components/subnav/students/StudentsSubNavCustom'
import axios from 'axios'
export default {
  name: 'studentsIndex',
  layout: 'default',
  components: {
    Hero,
    studentsSubNav
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
      slides: '',
      ep: 'https://live-ocad.pantheonsite.io/api/students-pages',
      epSP: 'https://live-ocad.pantheonsite.io/api/student-work',
      postTitle: '',
      postMetaDesc: '',
      postKeywords: '',
    }
  },
  created() {
    this.getAllPosts();
    this.getSlidePosts();
  },
  methods: {
    getAllPosts() {
      const slug = this.$route.fullPath
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data.filter(post => post.nid === '100064587')
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
    getSlidePosts() {
      const slug = this.$route.fullPath
      axios.get(this.epSP)
        .then(response => {
          this.slides = response.data
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
// #students {
//
//     .login-box {
//         margin-bottom: 50px;
//     }
//     .page-nav {
//         text-align: left;
//     }
// }
</style>
