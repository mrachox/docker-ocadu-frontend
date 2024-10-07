<template>
<div>
  <popupUndergrad />

  <div v-for="post in posts" v-bind:key="post.nid">
    <heroVideo :variableVideo="post.field_ip_hero_landing" />
    <h1 class="rec-title-blackout">{{ post.title }}</h1>
    <b-container>
      <h1 class="sr-only">{{post.title}}</h1>
      <div class="the-content one-col" v-html="post.body"></div>
    </b-container>
  </div>
</div>
</template>

<script>
import heroVideo from '@/components/ui/HeroVideo'
import axios from 'axios'
import popupUndergrad from '@/components/spotlight/PopupUndergrad'

export default {
  name: 'tacIndex',
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
  data() {
    return {
      posts: '',
      ep: 'https://live-ocad.pantheonsite.io/api/admissions-child-pages',
      postTitle: '',
      postMetaDesc: '',
      postKeywords: '',
    }
  },
  components: {
    heroVideo,
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
          this.posts = response.data.filter(post => post.nid === "100055523")
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
