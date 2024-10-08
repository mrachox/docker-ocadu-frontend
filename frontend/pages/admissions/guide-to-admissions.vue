<template>
<div>
  <popupUndergrad />

  <div class="py-5" v-for="post in posts" v-bind:key="post.nid">
    <b-container>
      <lookInsideBannerUndergrad />
      <h1 class="sr-only">{{post.title}}</h1>
      <div class="the-content one-col" v-html="post.body"></div>
    </b-container>
    <contactAdmissions />
  </div>
</div>
</template>

<script>
import lookInsideBannerUndergrad from '@/components/spotlight/LookInsideBannerUndergrad'
import popupUndergrad from '@/components/spotlight/PopupUndergrad'

import contactAdmissions from '@/components/contact/ContactAdmissions'
import axios from 'axios'
export default {
    name: 'admIndex',
    layout: 'default',
    scrollToTop: true,

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
  components: {
    contactAdmissions,
    lookInsideBannerUndergrad,
    popupUndergrad

  },
  created() {
    this.getAllPosts();
  },
  methods: {
    getAllPosts() {
      const slug = this.$route.fullPath
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data.filter(post => post.nid === "100065012")
          this.postTitle = this.posts[0].title
          this.postMetaDesc = this.posts[0].field_ip_meta_description
          this.postKeywords = this.posts[0].field_ip_meta_keywords
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
