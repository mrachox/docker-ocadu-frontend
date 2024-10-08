<template>
<div class="main-content my-4">
  <b-container v-for="post in posts" v-bind:key="post.nid" class="py-4">
      <div v-html="post"></div>
  </b-container>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'liveIndex',
  layout: 'layout-blank-live',
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
      ep: 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&part=snippet&playlistId=PLWvvcuRGzCG2MwRU2MFzkVPnGf9qL8asm&key=AIzaSyC98Xek0_Qb7cuAIQ_R53JyTp6vordppL8',
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
          this.posts = response.data
          this.postTitle = this.posts[0].title
          this.postSnippet = this.posts[0].snippet.title
        })
        .catch(error => {
          console.log('-----error------- ' + slug);
          console.log(error);
        })
    },
  }
}
</script>

<style lang="scss">

</style>
