<template>
<div>
  <div v-for="post in posts" v-bind:key="post.nid">

    <b-container>
      <div class="the-content one-col" v-html="post.body"></div>
    </b-container>

  </div>

</div>
</template>

<script>
import axios from 'axios'
import Hero from '@/components/ui/Hero'

export default {
name: 'convoIndex',
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
    posts: '',
    ep: 'https://live-ocad.pantheonsite.io/api/special-events-pages',
    postTitle: '',
    postMetaDesc: '',
    postKeywords: '',
  }
},
components: {
  Hero,


},
created() {
  this.getAllPosts();
},
methods: {
  getAllPosts() {
    const slug = this.$route.fullPath
    axios.get(this.ep)
      .then(response => {
        this.posts = response.data.filter(post => post.nid === "100067990")
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
