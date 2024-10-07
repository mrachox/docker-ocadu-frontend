<template>
  <div>
    <b-container v-for="post in posts" v-bind:key="post.nid">
      <h1 class="sr-only">{{post.title}}</h1>
      <div class="the-content one-col" v-html="post.body"></div>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'accCudoSlug',
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
  data() {
    return {
      posts: '',
      ep: 'https://live-ocad.pantheonsite.io/api/accountability-pages',
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
      const slug1 = this.$route.path.split("/")[3]
      const slug2 = this.$route.path.split("/")[4]
      const slug = slug1 + '/' + slug2
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data.filter(post => post.field_slug.includes(slug)).reverse()
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
