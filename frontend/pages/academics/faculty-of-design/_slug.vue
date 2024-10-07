<template>
<div>
  <fodSubNav />
  <div v-for="post in posts" v-bind:key="post.nid">
    <Hero
      :variableImg="post.field_ip_header_image"
      :variableCredit="post.field_credit"
      :variableSubhead="post.field_subtitle"/>
    <b-container>
      <h1 class="sr-only">{{post.title}}</h1>
      <div class="the-content one-col" v-html="post.body"></div>
    </b-container>
  </div>
</div>
</template>

<script>
import Hero from '@/components/ui/Hero'
import fodSubNav from '@/components/subnav/academics/FODSubNav'
import axios from 'axios'
export default {
  name: 'foaSlug',
  layout: 'default',

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
      ep: 'https://live-ocad.pantheonsite.io/api/fod-child-pages',
      postTitle: '',
      postMetaDesc: '',
      postKeywords: '',
    }
  },
  components: {
    fodSubNav,
    Hero,
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
