<template>
  <div>
    <!-- <Hero
    variableImg="/Assets/content/security/Spotlight.jpg"
    variableText="Financial Matters"
    variableSubhead="Financial Aid &amp; Awards advises students, provides referrals to the appropriate financial assistance programs and assists with securing the resources required to meet post-secondary education costs."
    variableCredit="Photo by Christina Gapic"
    /> -->
    <b-container v-for="post in posts" v-bind:key="post.nid">
      <!-- <financeQuicklinks /> -->
      <div class="the-content" v-html="post.body"></div>
    </b-container>
  </div>
</template>

<script>
// import financeQuicklinks from '@/components/quicklinks/FinanceQuicklinks'
// import axios from 'axios'
// export default {
//   name: 'financialIndex',
//   layout: 'default',
//   components: {
//     Hero,
//     financeQuicklinks
//   },
//   async asyncData ({env}){
//     let { data } = await axios.get(`${env.apiBaseUrl}/finance-pages`)
//     return {
//       posts: data.filter(post => post.nid === "100056450")
//     }
//   }
// }

import axios from 'axios'
export default {
  name: 'financialPlanningIndex',
  layout: 'default-services',
    components: {
          // financeQuicklinks
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
      ep: 'https://live-ocad.pantheonsite.io/api/finance-pages',
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
          this.posts = response.data.filter(post => post.nid === "100056428")
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
