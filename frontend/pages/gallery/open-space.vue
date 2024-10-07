<template>
  <div>
    <galleriesSubNav />
    <div v-for="post in posts" v-bind:key="post.nid">
      <Hero
      :variableImg="'https://ocadu.ca/' + post.field_ip_header_image"
      :variableText="post.title"
      :variableSubhead="post.field_subtitle"
      />
      <b-container class="py-5">
        <!-- <h1 class="sr-only">{{post.title}}</h1> -->
        <div class="the-content one-col" v-html="post.body"></div>
      </b-container>
    </div>
  </div>
</template>

<script>
import galleriesSubNav from '@/components/subnav/gallery/GalleriesSubNav'
import Hero from '@/components/ui/Hero'
import axios from 'axios'
export default {
  name: 'galleryOpenSpace',
  layout: 'default',
  components: {
    Hero,
    galleriesSubNav
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
          this.posts = response.data.filter(post => post.nid === "100056580")
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
