<template>
<div class="my-5">
  <div v-for="post in posts" v-bind:key="post.field_slug">
    <Hero
    :variableImg="post.field_ip_hero_landing"
    :variableText="post.title"
    :variableSubhead="post.field_subtitle"/>
    <b-container>
      <div class="content my-4" v-html="post.body"></div>
    </b-container>
  </div>
</div>
</template>

<script>
import Hero from '@/components/ui/Hero'
// import axios from 'axios'
// export default {
//   name: 'shopsSlug',
//   layout: 'default',
//   components: {
//     Hero
//   },
//   async asyncData ({env, params}){
//     let { data } = await axios.get(`${env.apiBaseUrl}/shops-pages`)
//     const slug = params.slug
//     return { posts: data.filter(post => post.field_slug.includes(slug))
//     }
//   },
//
// }

import axios from 'axios'
export default {
  name: 'shopsSlug',
  layout: 'default-services',
    components: {
      Hero
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
      ep: 'https://live-ocad.pantheonsite.io/api/shops-pages',
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
      const slug1 = this.$route.path.split("/")[2]
      const slug2 = this.$route.path.split("/")[3]
      const slug = slug1 + '/' + slug2
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data.filter(post => post.field_slug === slug)
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
