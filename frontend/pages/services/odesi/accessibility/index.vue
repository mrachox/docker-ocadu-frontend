<template>
  <div>
    <odesiSlugSubNav />
      <b-container v-for="post in posts" v-bind:key="post.nid">
          <h1 class="sr-only">{{post.title}}</h1>
        <div class="the-content one-col" v-html="post.body"></div>
      </b-container>
  </div>
</template>

<script>
import axios from 'axios'
import odesiSlugSubNav from '@/components/subnav/services/OdesiSlugSubNav'
export default {
    name: 'dadIndex',
    layout: 'default-services',
    components: {
      odesiSlugSubNav
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
      ep: 'https://live-ocad.pantheonsite.io/api/odesi-pages',
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
          this.posts = response.data.filter(post => post.nid === '100064684')
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
