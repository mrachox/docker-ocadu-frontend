<template>
  <div>
    <galleriesSlugSubNav />
    <div v-for="post in posts" v-bind:key="post.nid">
      <Hero
      :variableImg="'https://ocadu.ca/' + post.field_ip_header_image"
      :variableText="post.title"
      :variableSubhead="post.field_subtitle"
      :variableCredit="post.field_credit"
      />
      <b-container class="my-5">
          <div v-html="post.field_quicklinks"></div>
          <div v-html="post.body"></div>
          <adaslaightCurrentEvents />
          <!-- <h2 class="my-5 text-center">Current Exhibitions &amp; Events</h2> -->

          <adaslaightPastEvents />
      </b-container>
    </div>
  </div>
</template>

<script>
import galleriesSlugSubNav from '@/components/subnav/gallery/GalleriesSlugSubNav'
import Hero from '@/components/ui/Hero'
import adaslaightCurrentEvents from '@/components/events/AdaslaightCurrentEvents'
import adaslaightPastEvents from '@/components/events/AdaslaightPastEvents'
import axios from 'axios'
export default {
  name: 'galleryAdaSlaight',
  layout: 'default',
  components: {
    Hero,
    adaslaightPastEvents,
    adaslaightCurrentEvents,
      galleriesSlugSubNav
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
      ep: 'https://live-ocad.pantheonsite.io/api/gallery-pages',
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
          this.posts = response.data.filter(post => post.nid === "100056577")
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
