<template>
<div class="my-5">
  <safetyQuicklinks />
  <div v-for="post in posts" v-bind:key="post.field_slug">
    <h1 class="sr-only">{{post.title}}</h1>
    <div v-html="post.body"></div>
  </div>
</div>
</template>

<script>
import safetyQuicklinks from '@/components/quicklinks/SafetyQuicklinks'
import axios from 'axios'
export default {
  name: 'safetySlug',
    layout: 'layout-onecol-services',
      components: {
        safetyQuicklinks
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
      ep: 'https://live-ocad.pantheonsite.io/api/safety-pages',
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
