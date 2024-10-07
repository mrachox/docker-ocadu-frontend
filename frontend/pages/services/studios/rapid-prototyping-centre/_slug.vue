<template>
<div class="my-5">
  <ul class="page-nav">
    <li><a title="Our Mandate" href="/services/studios/rapid-prototyping-centre/laser-cutting">Laser Cutting </a></li>
    <li><a title="Program &amp; Services" href="/services/studios/rapid-prototyping-centre/3d-printing">3D Printing </a></li>
    <li><a title="Requests &amp; Forms" href="/services/studios/rapid-prototyping-centre/cnc-milling">CNC Milling </a></li>
    <li><a title="Training Centre" href="/services/studios/rapid-prototyping-centre/3d-scanning">3D Scanning </a></li>
  </ul>
  <div v-for="post in posts" v-bind:key="post.field_slug">
    <h1 class="sr-only">{{post.title}}</h1>
    <div v-html="post.body"></div>
  </div>
</div>
</template>

<script>
// import axios from 'axios'
// export default {
//   name: 'rpcSlug',
//   layout: 'layout-onecol',
//   async asyncData ({env, params}){
//     let { data } = await axios.get(`${env.apiBaseUrl}/shops-pages`)
//     const slug = params.slug
//     return { posts: data.filter(post => post.field_slug.includes(slug))
//     }
//   }
// }
import axios from 'axios'
export default {
  name: 'rpcSlug',
    layout: 'layout-onecol-services',
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
