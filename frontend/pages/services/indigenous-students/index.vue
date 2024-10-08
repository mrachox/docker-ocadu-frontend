<template>
  <div>
    <div v-for="post in posts" v-bind:key="post.nid">
      <Hero
      :variableImg="post.field_ip_header_image"
      :variableCredit="post.field_credit"
      :variableText="post.title"
      :variableSubhead="post.field_subtitle"/>
      <b-container>
        <!-- <indigenousNews /> -->
        <div class="the-content one-col my-4" v-html="post.body"></div>
      </b-container>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/ui/Hero'
// import indigenousNews from '@/components/news/IndigenousNews'
import axios from 'axios'
export default {
  name: 'indigenousIndex',
  layout: 'default-services',
    components: {
      Hero,
      // indigenousNews
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
      ep: 'https://live-ocad.pantheonsite.io/api/indigenous-students-pages',
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
          this.posts = response.data.filter(post => post.nid === "100056395")
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
