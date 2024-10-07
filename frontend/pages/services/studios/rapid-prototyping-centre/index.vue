<template>
  <div>
    <Hero
    variableImg="https://ocadu.ca/Assets/images/rapid+prototyping+centre.jpg"
    variableText="Welcome to the Rapid Prototyping Centre!"
    />
   <b-container v-for="post in posts" v-bind:key="post.field_slug" class="one-col">
     <!-- <h1 class="sr-only">{{ post.title }}</h1> -->
     <div v-html="post.body"></div>
   </b-container>
  </div>
</template>

<script>
import Hero from '@/components/ui/Hero'
// import axios from 'axios'
// export default {
//   name: 'rpcIndex',
//   layout: 'default',
//   components: {
//     Hero
//   },
//   async asyncData ({env}){
//     let { data } = await axios.get(`${env.apiBaseUrl}/shops-pages`)
//     return {
//       posts: data.filter(post => post.title.includes('Rapid Prototyping Centre'))
//     }
//   }
// }
import axios from 'axios'
export default {
  name: 'rpcIndex',
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
          this.posts = response.data.filter(post => post.title.includes('Rapid Prototyping Centre'))
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
