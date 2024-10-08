<template>
  <div id="gradualopening">
    <aboutSubNav />
    <div v-for="post in posts" v-bind:key="post.nid">
      <Hero
      :variableImg="post.field_ip_header_image"
      :variableCredit="post.field_credit"
      />
      <b-container>
        <div class="page-nav mt-5" v-html="post.field_quicklinks"></div>
        <h1 class="sr-only">{{post.title}}</h1>
        <div class="the-content one-col" v-html="post.body"></div>
      </b-container>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import aboutSubNav from '@/components/subnav/about/AboutSubNav'
import Hero from '@/components/ui/Hero'
export default {
  name: 'coronavirusGradualReopening',
  layout: 'default',
  components: {
    aboutSubNav,
    Hero,
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
      ep: '/api/about-pages',
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
          this.posts = response.data.filter(post => post.nid === "100065960")
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
#gradualopening {
  b, strong {
    font-family: 'gotham', sans-serif;
  }

  .card-img-overlay {
    display: none;
  }
}

</style>
