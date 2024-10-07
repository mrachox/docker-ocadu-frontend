<template>
  <div>
    <itSubNav />
    <div v-for="post in posts" v-bind:key="post.nid">
      <Hero
      :variableImg="post.field_ip_header_image"
      :variableText="post.title"
      :variableSubhead="post.field_subtitle"
      :variableCredit="post.field_credit"
      />
      <itQuicklinks />
      <b-container>
        <b-row>
          <b-col sm="12" md="12">
            <div class="the-content one-col" v-html="post.body"></div>
          </b-col>
          <!-- <b-col sm="12" md="4"> -->
            <!-- <itNews /> -->
          <!-- </b-col> -->
        </b-row>
        <!-- <itHomeSearch /> -->
      </b-container>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/ui/Hero'
import itSubNav from '@/components/subnav/services/ItSubNav'
import itQuicklinks from '@/components/quicklinks/ITQuicklinks'
// import itNews from '@/components/news/ITNews'
// import itHomeSearch from '@/components/spotlight/ITHomeSearch'
import axios from 'axios'
export default {
  name: 'itFirstIndex',
  layout: 'default-services',
    components: {
      Hero,
      itSubNav,
      // itNews,
      // itHomeSearch,
      itQuicklinks
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
        ep: 'https://live-ocad.pantheonsite.io/api/it-services-pages',
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
          this.posts = response.data.filter(post => post.nid === "100064707")
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
