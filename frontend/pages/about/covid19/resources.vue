<template>
  <div id="covid19-info">
    <b-container v-for="post in posts" v-bind:key="post.nid">
      <h1>{{post.title}}</h1>
      <div class="the-content one-col" v-html="post.body"></div>
    </b-container>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'covid19Index',
  layout: 'layout-covid19',
  components: {
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
      ep: 'https://live-ocad.pantheonsite.io/api/about-pages',
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
          this.posts = response.data.filter(post => post.nid === '100066992')
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
#covid19-info {
  .the-content.one-col {

    padding: 8rem 0;

    h1, h2, h3, h4, h5, p, ul, li, a {
      color: black;
    }
    p, ul, li {
      line-height: 1.75rem;
    }
    a:hover {
      color: black;
      text-decoration: none;
    }
  }



  .page-nav {
    li {
      a {
        border: 3px solid black;
      }
    }
  }
}
</style>
