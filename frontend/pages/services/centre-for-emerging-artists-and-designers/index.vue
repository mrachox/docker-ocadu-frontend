<template>
  <div>
    <ceadSubNav />
    <Hero
    variableImg="https://www.ocadu.ca/Assets/CEAD+top+banner+2018.jpg"
    variableText="RBC Centre for Emerging Artists &amp; Designers"
    variableSubhead="We support the early-career advancement of all OCAD U students and recent alumni through career development, experiential learning, and creative entrepreneurship programs and services. "
    variableLink="/services/centre-for-emerging-artists-and-designers/meet-our-team"
    variableLinkText="meet our team"
    />
    <b-container v-for="post in posts" v-bind:key="post.nid">
      <!-- <h1 class="sr-only">{{post.title}}</h1> -->
      <div class="the-content one-col" v-html="post.body"></div>
    </b-container>
  </div>
</template>


<script>
import Hero from '@/components/ui/Hero'
import ceadSubNav from '@/components/subnav/services/CEADSubNav'
import axios from 'axios'
export default {
  name: 'ceadFirstIndex',
  layout: 'default-services',
    components: {
      Hero,
      ceadSubNav
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
      ep: 'https://live-ocad.pantheonsite.io/api/cead-pages',
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
          this.posts = response.data.filter(post => post.nid === "100056365")
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
