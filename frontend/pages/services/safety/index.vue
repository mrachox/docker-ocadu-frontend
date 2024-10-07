<template>
  <div>
    <safetySubNav />
    <Hero
    variableImg="https://ocadu.ca/sites/default/files/legacy_assets/content/safety/Recruitment%20grange%20park.jpg"
    variableText="Safety, Security &amp; Campus Operations"
    variableSubhead="Safety, Security & Campus Operations is committed to providing a safe, secure, and efficiently run campus, as well as upholding the values of equity, respect, fairness and impartiality"
    />
    <!-- <Hero
    variableImg="https://ocadu.ca/sites/default/files/legacy_assets/content/safety/Recruitment%20grange%20park.jpg"
    variableText="Safety &amp; Security Services"
    variableSubhead="Safety &amp; Security Services is committed to your safety and to upholding the values of equity, respect, fairness and impartiality"
    variableLink="/services/safety/our-team"
    variableLinkText="meet our team"
    variableCredit="Photo by Martin Iskander"
    /> -->
    <safetyQuicklinks />
    <b-container v-for="post in posts" v-bind:key="post.nid">
      <div class="the-content" v-html="post.body"></div>
    </b-container>
  </div>
</template>

<script>
import Hero from '@/components/ui/Hero'
import safetySubNav from '@/components/subnav/services/SafetySubNav'
import safetyQuicklinks from '@/components/quicklinks/SafetyQuicklinks'
import axios from 'axios'
export default {
  name: 'safetyIndex',
  layout: 'default-services',
    components: {
      Hero,
          safetyQuicklinks,
          safetySubNav
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
      const slug = this.$route.fullPath
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data.filter(post => post.nid === "100056387")
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
