<template>
<div class="child--admissionsprogram">
  <popupUndergrad />

  <div v-for="post in posts" v-bind:key="post.field_slug">
    <heroVideo :variableVideo="post.field_ip_hero_landing" />
    <h1 class="rec-title-blackout">{{ post.title }}</h1>
    <div class="the-content">
      <b-container>
        <b-row>
          <b-col sm="12" md="6">
            <div v-html="post.body"></div>
          </b-col>
          <b-col sm="12" md="6">
            <div class="recruitment-links">
              <admProgramQuicklinks />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</div>
</template>

<script>
import heroVideo from '@/components/ui/HeroVideo'
import admProgramQuicklinks from '@/components/quicklinks/AdmProgramQuicklinks'
import popupUndergrad from '@/components/spotlight/PopupUndergrad'

import axios from 'axios'
export default {
  name: 'admProgramsSlug',
  scrollToTop: true,
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
  data() {
    return {
      posts: '',
      ep: 'https://live-ocad.pantheonsite.io/api/admissions-programs',
      postTitle: '',
      postMetaDesc: '',
      postKeywords: '',
    }
  },
  beforeCreate() {
    this.$root.setLayout('default') //override parent layout
  },
  components: {
    admProgramQuicklinks,
    heroVideo,
    popupUndergrad

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
          console.log(error)
        })
    },
  }
}
</script>
<style lang="scss">
.child--admissionsprogram{

}
</style>
