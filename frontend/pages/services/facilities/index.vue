<template>
  <div>
    <facilitiesSubNav />
    <div v-for="post in posts" v-bind:key="post.nid">
      <Hero
      :variableImg="post.field_ip_header_image"
      :variableText="post.title"
      :variableSubhead="post.field_subtitle"
      :variableCredit="post.field_credit"
      />
      <b-container>
        <facilitiesQuicklinks />
        <div class="the-content one-col" v-html="post.body"></div>
      </b-container>
    </div>

  </div>
</template>

<script>
import Hero from '@/components/ui/Hero'
import facilitiesSubNav from '@/components/subnav/services/FacilitiesSubNav'
import facilitiesQuicklinks from '@/components/quicklinks/FacilitiesQuicklinks'
import axios from 'axios'
export default {
  name: 'FCDCFirstIndex',
  layout: 'default-services',
    components: {
      Hero,
      facilitiesSubNav,
      facilitiesQuicklinks,
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
        ep: 'https://live-ocad.pantheonsite.io/api/facilities-pages',
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
          this.posts = response.data.filter(post => post.nid === "100065069")
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
