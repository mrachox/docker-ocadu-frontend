<template>
<div class="thisisresearch">
  <researchSubNav />
  <b-container v-for="post in posts" v-bind:key="post.field_slug">
    <h1>{{post.title}}</h1>
    <!-- <div class="the-content one-col" v-html="post.body"></div> -->
    <iframe src="https://www1.ocadu.ca/research/index.html" width="" height=""></iframe>

  </b-container>
</div>
</template>

<script>
import researchSubNav from '@/components/subnav/research/ResearchSubNav'
import axios from 'axios'
export default {
  name: 'resThisIsResearch',
  layout: 'default',
  components: {
    researchSubNav,
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
  data() {
    return {
      posts: '',
      ep: 'https://live-ocad.pantheonsite.io/api/research',
      postTitle: '',
      postMetaDesc: '',
      postKeywords: '',
    }
  },
  mounted() {
    // load custom script to page - research/index.vue
    // let researchScript = document.createElement('script')
    // researchScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js')
    // document.head.appendChild(researchScript)
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    getAllPosts() {
      const slug = this.$route.params.slug
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data.filter(post => post.nid === "100065856")
          this.postTitle = this.posts[0].title
          this.postMetaDesc = this.posts[0].field_ip_meta_description
          this.postKeywords = this.posts[0].field_ip_meta_keywords
        })
        .catch(error => {
          console.log('-----error------- ' + slug);
          console.log(error);
          console.log(error.response.status);
          console.log(error.response.headers);
        })
    },
  }
}
</script>
<style lang="scss">
.thisisresearch {
  iframe {
    width: 100%;
    border: 0;
    height: 600px;
  }
}
</style>
