<template>
  <div class="child--academicprogram mb-5">
    <div v-for="post in posts" v-bind:key="post.field_slug">
      <Hero
      :variableImg="post.field_ip_header_image"
      :variableCredit="post.field_credit"
      :variableText="post.title"
      :variableSubhead="post.field_subtitle"/>
      <b-container>
        <div class="page-nav text-center my-4 text-uppercase" v-if="post.field_quicklinks" v-html="post.field_quicklinks"></div>
        <div class="grid-row content my-4" v-html="post.body"></div>
      </b-container>
      <contactAcademics />
    </div>
  </div>
</template>

<script>
import Hero from '@/components/ui/Hero'
import contactAcademics from '@/components/contact/ContactAcademics'

// import axios from 'axios'
//
// export default {
//   name: 'undergradSlug',
//   components: {
//     Hero,
//     contactAcademics
//   },
//   layout: 'default',
//   async asyncData ({env, params}){
//     let { data } = await axios.get(`${env.apiBaseUrl}/undergrad-academic-programs-pages`)
//     let slug = params.slug
//     return { posts: data.filter(post => post.field_slug.includes(slug))
//     }
//   }
// }

import axios from 'axios'
export default {
    name: 'iDindex',
    layout: 'default',
    components: {
      Hero,
      contactAcademics
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
      ep: 'https://live-ocad.pantheonsite.io/api/undergrad-academic-programs-pages',
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
          this.posts = response.data.filter(post => post.nid === "100066728")
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
.content {
  .grid_2 {
    img, iframe {
      width: 100%;
    }
  }
}
</style>
