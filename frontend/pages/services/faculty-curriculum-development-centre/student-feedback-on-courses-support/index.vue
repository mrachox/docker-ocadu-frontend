<template>
  <div>
    <fcdcSubNav />
    <fcdcQuicklinksCustom />
    <div v-for="post in posts" v-bind:key="post.nid" id="fcdc">
      <b-container>
        <div class="the-content one-col" v-html="post.body"></div>
      </b-container>
    </div>
  </div>
</template>

<script>
import fcdcQuicklinksCustom from '@/components/quicklinks/FCDCQuicklinksCustom'
import fcdcSubNav from '@/components/subnav/services/FCDCSubNav'
import axios from 'axios'
export default {
  name: 'FCDCFirstIndex',
  layout: 'default-services',
    components: {
      fcdcSubNav,
      fcdcQuicklinksCustom
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
        ep: '/api/fcdc-pages',
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
          this.posts = response.data.filter(post => post.nid === "100064842")
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
