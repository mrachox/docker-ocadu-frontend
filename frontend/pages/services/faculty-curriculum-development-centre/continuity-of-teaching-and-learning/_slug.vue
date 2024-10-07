<template>
  <div>
    <fcdcSubNav />
    <div class="the-content" v-for="post in posts" v-bind:key="post.nid">
    <fcdcQuicklinksCustomContinuity />
      <b-container>
        <!-- <h1>{{post.title}}</h1> -->
        <div class="the-content one-col" v-html="post.body"></div>
      </b-container>
    </div>
  </div>
</template>

<script>
// import financeQuicklinks from '@/components/quicklinks/FinanceQuicklinks'
// import axios from 'axios'
// export default {
//   name: 'financialSlug',
//   layout: 'layout-onecol',
//   components: {
//     financeQuicklinks
//   },
//   mounted() {
//     this.$accordionControl()
//   },
//   async asyncData ({env, params}){
//     let { data } = await axios.get(`${env.apiBaseUrl}/finance-pages`)
//     const slug = params.slug
//     return { posts: data.filter(post => post.field_slug.includes(slug))
//     }
//   },
//
// }
import fcdcQuicklinksCustomContinuity from '@/components/quicklinks/FCDCQuicklinksCustomContinuity'
import fcdcSubNav from '@/components/subnav/services/FCDCSubNav'
import axios from 'axios'
export default {
  name: 'FCDCSlug',
  layout: 'default-services',
    components: {
      fcdcSubNav,
      fcdcQuicklinksCustomContinuity
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
      ep: '/api/fcdc-pages',
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
