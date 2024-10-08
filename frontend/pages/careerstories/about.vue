<template>
<div class="careerstories p-4">
  <b-row>
    <b-col sm="12" md="3" class="fixed">
      <ceadStoriesLogo />
      <b-button class="mb-4 d-block" to="/careerstories/about" variant="quicklink">About</b-button>
      <b-button class="mb-4 d-block" to="/careerstories" variant="quicklink">Browse by Program</b-button>
    </b-col>
  </b-row><!--// menu //-->
  <b-row>
    <b-col sm="12" md="9" offset-md="3">
        <div v-for="post in posts" v-bind:key="post.nid">
          <div v-html="post.body"></div>
        </div>
        <ceadStoriesFooter />
     </b-col>
</b-row>

</div>
</template>

<script>
import axios from 'axios'
import ceadStoriesLogo from '@/components/ui/CEADStoriesLogo'
import ceadStoriesFooter from '@/components/ui/CEADStoriesFooter'
export default {
    name: 'careerstoriesSlug',
    layout: 'layout-blank',
    components: {
       ceadStoriesLogo,
       ceadStoriesFooter
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
      show: false,
      posts: '',
      ep: 'https://live-ocad.pantheonsite.io/api/all-ip-pages',
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
          this.posts = response.data.filter(post => post.nid === '100066579')
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
