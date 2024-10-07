<template>
  <div>
    <folasisSubNav />
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
    <undergradPrograms :faculty="fols" ugDegree="in Liberal Arts &amp; Sciences and Interdisciplinary Studies" :showDesc="true" :showCTA="true"/>
  </div>
</template>

<script>
import axios from 'axios'
import folasisSubNav from '@/components/subnav/academics/FOLASISSubNav'
import Hero from '@/components/ui/Hero'
import undergradPrograms from '@/components/feature/UndergradPrograms'
export default {
  name: 'folasisIndex',
  layout: 'default',
  components: {
    folasisSubNav,
    Hero,
    undergradPrograms
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
      fols: 'Faculty of Liberal Studies',
      posts: '',
      ep: 'https://live-ocad.pantheonsite.io/api/folasis-child-pages',
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
          this.posts = response.data.filter(post => post.nid === '100065118')
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
<style lang="scss">
</style>
