<template>
  <div>
      <librarySubNav />
      <b-container v-for="post in posts" v-bind:key="post.nid" id="library">
        <h1 class="sr-only">{{post.title}}</h1>
        <div class="the-content one-col" v-html="post.body"></div>
      </b-container>
      <libraryNews />
      <contactLibrary />
  </div>
</template>

<script>
import librarySubNav from '@/components/subnav/services/LibrarySubNav'
import libraryNews from '@/components/news/LibraryNews'
import contactLibrary from '@/components/contact/ContactLibrary'
import axios from 'axios'
export default {
  name: 'libraryFirstIndex',
  layout: 'default-services',
    components: {
      librarySubNav,
      libraryNews,
      contactLibrary
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
        ep: 'https://live-ocad.pantheonsite.io/api/library-pages',
        postTitle: '',
        postMetaDesc: '',
        postKeywords: '',
      }
  },
  created() {
    this.getAllPosts();
  },
  mounted() {
    // load custom script to page - libary/index.vue
    let libraryScript = document.createElement('script')
    libraryScript.setAttribute('src', '/library.js')
    document.head.appendChild(libraryScript)
  },
  methods: {
    getAllPosts() {
      const slug = this.$route.fullPath
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data.filter(post => post.nid === "100064737")
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
