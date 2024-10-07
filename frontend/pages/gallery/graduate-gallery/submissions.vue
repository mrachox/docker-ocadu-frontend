<template>
  <div>
    <galleriesSlugSubNav />
    <b-container v-for="post in posts" v-bind:key="post.nid">
        <h1 class="sr-only">{{post.title}}</h1>
        <div class="the-content one-col" v-html="post.body"></div>
    </b-container>
  </div>
</template>

<script>
import galleriesSlugSubNav from '@/components/subnav/gallery/GalleriesSlugSubNav'
import axios from 'axios'
export default {
  layout: 'default',
  components: {
    galleriesSlugSubNav
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
      ep: 'https://live-ocad.pantheonsite.io/api/gallery-pages',
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
          this.posts = response.data.filter(post => post.nid === "100064584")
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
