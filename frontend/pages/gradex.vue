<template>
  <div>
    <div v-for="post in posts" v-bind:key="post.nid">
      <Hero
      :variableImg="post.field_ip_header_image"
      :variableText="post.title"
      :variableSubhead="post.field_subtitle"
      :variableCredit="post.field_credit"
      />
      <b-container>
        <div class="the-content one-col" v-html="post.body"></div>
      </b-container>
      <b-container>

        <gradexPrograms />
        <gradexGradPrograms />
      </b-container>
    </div>

  </div>
</template>
<script>
import Hero from '@/components/ui/Hero'
import gradexPrograms from '@/components/feature/GradexPrograms'
import gradexGradPrograms from '@/components/feature/GradexGradPrograms'
import axios from 'axios'
export default {
  name: 'accIndex',
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
  data () {
    return {
      posts: '',
      ep: 'https://live-ocad.pantheonsite.io/api/all-ip-pages',
      postTitle: '',
      postMetaDesc: '',
      postKeywords: '',
    }
  },
  components: {
    // aboutAccSubNav,
    // aboutQuicklinks
    Hero,
    gradexPrograms,
    gradexGradPrograms

  },
  created() {
    this.getAllPosts();
  },
  methods: {
    getAllPosts() {
      const slug = this.$route.fullPath
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data.filter(post => post.nid === "100065001")
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
