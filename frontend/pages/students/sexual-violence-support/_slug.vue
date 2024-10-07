<template>
  <div>
    <sexViolenceSlugSubNav />
    <div class="my-5">
      <svsQuicklinks />
      <div class="container" v-for="post in posts" v-bind:key="post.field_slug">
        <h1 class="sr-only">{{post.title}}</h1>
        <div v-html="post.body"></div>
      </div>
    </div>
  </div>
</template>

<script>

import svsQuicklinks from '@/components/quicklinks/SVSQuicklinks'
import sexViolenceSlugSubNav from '@/components/subnav/students/SexViolenceSlugSubNav'
import axios from 'axios'
export default {
    name: 'studentPolSecondSlug',
    layout: 'default',
    components: {
      svsQuicklinks,
      sexViolenceSlugSubNav
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
      ep: 'https://live-ocad.pantheonsite.io/api/students-pages',
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
      const slug = this.$route.params.slug
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data.filter(post => post.field_slug.includes(slug))
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
