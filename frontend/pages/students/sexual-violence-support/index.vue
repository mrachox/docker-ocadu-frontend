<template>
<div>
  <sexViolenceSlugSubNav />

  <b-container class="my-5">
    <b-row class="my-4">
      <b-col sm="12" md="12">
        <svsQuicklinks />

        <div v-for="post in posts" v-bind:key="post.field_slug">
          <h1 class="sr-only">{{ post.title }}</h1>
          <div v-html="post.body"></div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>


<script>
import sexViolenceSlugSubNav from '@/components/subnav/students/SexViolenceSlugSubNav'
import svsQuicklinks from '@/components/quicklinks/SVSQuicklinks'
import axios from 'axios'
export default {
  name: 'studentPolIndex',
  layout: 'default',
  components: {
    sexViolenceSlugSubNav,
    svsQuicklinks,
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
      ep: 'https://live-ocad.pantheonsite.io/api/students-pages',
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
          this.posts = response.data.filter(post => post.nid === '100065003')
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

<style lang="scss" scoped>
#students {
    .login-box {
        margin-bottom: 50px;
    }
    .page-nav {
        text-align: left;
    }
}
</style>
