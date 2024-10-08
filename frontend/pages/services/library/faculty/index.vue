<template>
  <div>
    <librarySlugSubNav />
      <b-container v-for="post in posts" v-bind:key="post.nid">
          <h1 class="sr-only">{{post.title}}</h1>
        <div class="the-content one-col" v-html="post.body"></div>
      </b-container>
       <contactLibrary />
  </div>
</template>

<script>
import axios from 'axios'
import librarySlugSubNav from '@/components/subnav/services/LibrarySlugSubNav'
import contactLibrary from '@/components/contact/ContactLibrary'
export default {
    name: 'libaryIndex',
    layout: 'default-services',
    components: {
      librarySlugSubNav,
      contactLibrary
    },
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
      ep: 'https://live-ocad.pantheonsite.io/api/library-pages',
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
          this.posts = response.data.filter(post => post.nid === '100064944')
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
