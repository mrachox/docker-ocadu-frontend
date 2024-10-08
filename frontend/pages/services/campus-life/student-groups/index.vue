<template>
  <div>
    <campuslifeSlugSubNav />
    <campuslifeQuicklinks />
    <b-container v-for="post in posts" v-bind:key="post.nid">
      <div class="the-content one-col" v-html="post.body"></div>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
import campuslifeSlugSubNav from '@/components/subnav/services/CampusLifeSlugSubNav'
import campuslifeQuicklinks from '@/components/quicklinks/CampusLifeQuicklinks'
export default {
    name: 'studentGroupsIndex',
    layout: 'default-services',
    components: {
      campuslifeSlugSubNav,
      campuslifeQuicklinks
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
      ep: 'https://live-ocad.pantheonsite.io/api/campus-life-pages',
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
          this.posts = response.data.filter(post => post.nid === '100064662')
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
