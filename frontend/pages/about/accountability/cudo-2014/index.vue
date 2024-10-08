<template>
  <div>
    <b-container>
      <cudoQuicklinks :slug="cudopath"/>
      <b-row v-for="post in posts" v-bind:key="post.nid">
          <div class="the-content one-col" v-html="post.body"></div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
import cudoQuicklinks from '@/components/quicklinks/CUDOQuicklinks'
export default {
  name: 'accCudoIndex',
  layout: 'default',
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
      cudopath: this.$route.fullPath,
      posts: '',
      ep: 'https://live-ocad.pantheonsite.io/api/accountability-pages',
      postTitle: '',
      postMetaDesc: '',
      postKeywords: '',
    }
  },
  components: {
     cudoQuicklinks
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    getAllPosts() {
      const slug = this.$route.fullPath
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data.filter(post => post.title.includes('CUDO 2014'))
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
