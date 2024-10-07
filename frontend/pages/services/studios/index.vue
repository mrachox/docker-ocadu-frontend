<template>
  <div>
    <Hero
    variableImg="https://ocadu.ca/Assets/design/spotlights/shops-and-studios-spolight-july-2015.jpg"
    variableText="Shops and Studios"
    variableSubhead="The Shops and Studios are teaching and working facilities intended for use by OCAD U students enrolled in studio courses."
    />
    <b-container v-for="post in posts" v-bind:key="post.nid">
      <div class="the-content" v-html="post.body"></div>
    </b-container>
  </div>
</template>

<script>
import Hero from '@/components/ui/Hero'
// import axios from 'axios'
// export default {
//   name: 'shopsIndex',
//   layout: 'default',
//   components: {
//     Hero
//   },
//   async asyncData ({env}){
//     let { data } = await axios.get(`${env.apiBaseUrl}/shops-pages`)
//     return {
//       posts: data.filter(post => post.nid === "100056424")
//     }
//   }
// }


import axios from 'axios'
export default {
  name: 'shopsIndex',
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
      const slug = this.$route.fullPath
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data.filter(post => post.nid === "100056424")
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
