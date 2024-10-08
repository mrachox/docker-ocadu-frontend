<template>
  <div>
    <foaSubNav />
    <div v-for="post in posts" v-bind:key="post.nid">
      <Hero
        :variableImg="post.field_ip_header_image"
        :variableCredit="post.field_credit"
        :variableText="post.title"
        :variableSubhead="post.field_subtitle"/>
      <b-container>
        <!-- <h1 class="sr-only">{{post.title}}</h1> -->
        <div class="the-content one-col" v-html="post.body"></div>
      </b-container>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import foaSubNav from '@/components/subnav/academics/FOASubNav'
import Hero from '@/components/ui/Hero'
export default {
  name: 'gepIndex',
  layout: 'default',
  components: {
    foaSubNav,
    Hero,
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
  data(){
    return {
      foa: 'Faculty of Art',
      posts: '',
      ep: 'https://live-ocad.pantheonsite.io/api/foa-child-pages',
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
          this.posts = response.data.filter(post => post.nid === '100065107')
          this.postTitle = this.posts[0].title
          this.postMetaDesc = this.posts[0].field_ip_meta_description
          this.postKeywords = this.posts[0].field_ip_meta_keywords
        })
        .catch(error => {
          console.log('-----error------- ' + slug);
          console.log(error);
          console.log(post.title);
        })
    },
  }
}
</script>
<style lang="scss">
</style>
