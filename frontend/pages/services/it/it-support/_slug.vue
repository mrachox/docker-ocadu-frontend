<template>
  <div>
    <itSlugSubNav />
    <itQuicklinks />
    <b-container>
      <b-row>
        <b-col sm="12" md="8" v-for="post in posts" v-bind:key="post.nid">
          <div class="the-content one-col" v-html="post.body"></div>
        </b-col>
        <b-col sm="12" md="4">
          <itNews />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import itSlugSubNav from '@/components/subnav/services/ItSlugSubNav'
import itQuicklinks from '@/components/quicklinks/ITQuicklinks'
import itNews from '@/components/news/ITNews'
import axios from 'axios'
export default {
  name: 'clSecondSlug',
  layout: 'default-services',
  components: {
      itSlugSubNav,
      itQuicklinks,
      itNews
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
      ep: 'https://live-ocad.pantheonsite.io/api/it-services-pages',
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
