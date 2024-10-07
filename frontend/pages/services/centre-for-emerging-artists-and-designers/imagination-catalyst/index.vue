<template>
  <div id="ic-cead">
    <Hero
    variableImg="https://www.ocadu.ca/Assets/design/spotlights/spotlight-research-digital-components.jpg"
    variableText="The Imagination Catalyst"
    variableSubhead="The Imagination Catalyst is OCAD University’s entrepreneurship and commercialization hub. If you are looking for advice, learning opportunities or help starting and growing a business, turn to us!"
    variableCredit="Photo by Christina Gapic."
    />
    <icQuicklinks />
    <b-container v-for="post in posts" v-bind:key="post.nid">
      <!-- <h1 class="sr-only">{{post.title}}</h1> -->
      <div class="the-content" v-html="post.body"></div>
      <contactIC />
    </b-container>

  </div>
</template>

<script>
import Hero from '@/components/ui/Hero'
import contactIC from '@/components/contact/ContactIC'
import icQuicklinks from '@/components/quicklinks/IcQuicklinks'

import axios from 'axios'
export default {
  name: 'icIndex',
  layout: 'default-services',
    components: {
      Hero,
      contactIC,
      icQuicklinks
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
      ep: 'https://live-ocad.pantheonsite.io/api/cead-ic-pages',
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
          this.posts = response.data.filter(post => post.nid === "100056386")
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
