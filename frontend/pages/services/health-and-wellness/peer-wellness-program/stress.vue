<template>
  <div>
    <hwSubNav />
    <b-container v-for="post in posts" v-bind:key="post.nid">
        <div class="the-content one-col" v-html="post.body"></div>
    </b-container>
  </div>
</template>

<script>
import hwSubNav from '@/components/subnav/services/HealthWellnessSubNav'
import axios from 'axios'
export default {
  name: 'SWFirstIndex',
  layout: 'default-services',
    components: {
      hwSubNav,
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
  methods: {
    getAllPosts() {
      const slug = this.$route.fullPath
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data.filter(post => post.nid === "100064786")
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
