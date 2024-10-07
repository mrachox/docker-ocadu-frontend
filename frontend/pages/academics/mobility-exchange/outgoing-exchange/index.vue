<template>
  <div>
      <!-- <exchangeSlugSubNav /> -->
      <mobExQuicklinks />
      <b-container v-for="post in posts" v-bind:key="post.nid">
        <h1 class="sr-only">{{post.title}}</h1>
        <div class="the-content one-col" v-html="post.body"></div>
      </b-container>
  </div>
</template>

<script>
import axios from 'axios'
// import exchangeSlugSubNav from '@/components/subnav/academics/ExchangeSlugSubNav'
import mobExQuicklinks from '@/components/quicklinks/MobExQuicklinks'
export default {
    name: 'oeIndex',
    layout: 'default',
    components: {
      // exchangeSlugSubNav,
      mobExQuicklinks
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
      ep: 'https://live-ocad.pantheonsite.io/api/mobility-exchange-pages',
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
          this.posts = response.data.filter(post => post.nid === '100056262')
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
