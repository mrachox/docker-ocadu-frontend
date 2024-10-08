<template>
  <div>
    <aboutSubNav />
    <div v-for="post in posts" v-bind:key="post.nid" id="about">
      <Hero
      :variableImg="post.field_ip_header_image"
      :variableText="post.title"
      :variableSubhead="post.field_subtitle"
      :variableCredit="post.field_credit"
      />
      <aboutQuicklinks />
      <b-container>
        <!-- <h1 class="sr-only">{{post.title}}</h1> -->
        <div class="the-content one-col" v-html="post.body"></div>
      </b-container>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/ui/Hero'
import aboutSubNav from '@/components/subnav/about/AboutSubNav'
import aboutQuicklinks from '@/components/quicklinks/AboutQuicklinks'
import axios from 'axios'
export default {
  name: 'aboutIndex',
  layout: 'default',
  components: {
    Hero,
    aboutSubNav,
    aboutQuicklinks
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
  data() {
    return {
      posts: '',
      postTitle: '',
      postMetaDesc: '',
      postKeywords: '',
      ep: 'https://live-ocad.pantheonsite.io/api/about-pages',
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
          this.posts = response.data.filter(post => post.nid === '100056915')
          this.postTitle = this.posts[0].title
          this.postMetaDesc = this.posts[0].field_ip_meta_description
          this.postKeywords = this.posts[0].field_ip_meta_keywords
        })
        .catch(error => {
          console.log('-----error------- ' + slug);
          console.log(error);
          console.log(error.response.status);
          console.log(error.response.headers);
        })
    },
  }
}
</script>

<style lang="scss">

</style>
