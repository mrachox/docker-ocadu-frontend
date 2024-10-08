<template>
  <div>
    <popupUndergrad />

    <div class="my-5">
     <!-- <admLandingSpotlight /> -->
     <div v-for="post in posts" v-bind:key="post.field_slug">
       <h1 class="sr-only">{{ post.title }}</h1>
       <div v-html="post.body"></div>
     </div>
    </div>
  </div>

</template>

<script>
// import admLandingSpotlight from '@/components/spotlight/AdmLandingSpotlight'

import popupUndergrad from '@/components/spotlight/PopupUndergrad'

import axios from 'axios'
export default {
    name: 'admChildFirstIndex',
    layout: 'layout-admissions',
    components: {
      // admLandingSpotlight
      popupUndergrad

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
      ep: 'https://live-ocad.pantheonsite.io/api/admissions-child-pages',
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
          this.posts = response.data.filter(post => post.nid === '100065011')
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
