<template>
  <div>
    <hwSubNav />
    <div v-for="post in posts" v-bind:key="post.nid">
      <Hero
      :variableImg="post.field_ip_header_image"
      :variableText="post.title"
      :variableSubhead="post.field_subtitle"
      :variableCredit="post.field_credit"
      />
      <hwQuicklinks/>
      <b-container>
        <div class="the-content one-col" v-html="post.body"></div>
        <contactHW />
      </b-container>

    </div>
  </div>
</template>

<script>
import Hero from '@/components/ui/Hero'
import hwQuicklinks from '@/components/quicklinks/HWQuicklinks'
import hwSubNav from '@/components/subnav/services/HealthWellnessSubNav'
import contactHW from '@/components/contact/ContactHW'
import axios from 'axios'
export default {
  name: 'SWFirstIndex',
  layout: 'default-services',
    components: {
      Hero,
      hwQuicklinks,
      hwSubNav,
      contactHW
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
        ep: 'https://live-ocad.pantheonsite.io/api/student-wellness-pages',
        postTitle: '',
        postMetaDesc: '',
        postKeywords: '',
      }
  },
  created() {
    this.getAllPosts();
  },
  mounted() {
    this.$nextTick(function() {
      this.$accessibleAccordion();
    })
  },
  updated() {
    this.$nextTick(function() {
      this.$accessibleAccordion();
    })
  },
  methods: {
    getAllPosts() {
      const slug = this.$route.fullPath
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data.filter(post => post.nid === "100064844")
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
