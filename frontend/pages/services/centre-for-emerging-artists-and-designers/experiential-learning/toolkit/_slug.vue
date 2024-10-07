<template>
<div class="my-5">
  <ul id="top" class="page-nav">
    <li><a title="Students + Alumni Advising" href="/services/centre-for-emerging-artists-and-designers/advising">Advising</a></li>
    <li><a title="Career Tools + Resources" href="/services/centre-for-emerging-artists-and-designers/resources">Tools + Resources</a></li>
  </ul>
  <b-row>
    <b-col sm="12" md="8">
      <div v-for="post in posts" v-bind:key="post.field_slug">
        <h1 class="sr-only">{{post.title}}</h1>
        <div v-html="post.body"></div>
      </div>
    </b-col>
    <b-col sm="12" md="4">
      <b-button href="/services/centre-for-emerging-artists-and-designers/experiential-learning/toolkit/a-typical-timeline" variant="quicklink" class="text-uppercase d-block mb-2">A Typical Timeline</b-button>
      <b-button href="/services/centre-for-emerging-artists-and-designers/experiential-learning/toolkit/mapping-your-experience" variant="quicklink" class="text-uppercase d-block mb-2">Mapping Your Experience</b-button>
      <b-button href="/services/centre-for-emerging-artists-and-designers/experiential-learning/toolkit/setting-benchmarks" variant="quicklink" class="text-uppercase d-block mb-2">Setting Benchmarks</b-button>
      <b-button href="/services/centre-for-emerging-artists-and-designers/experiential-learning/toolkit/suggested-activities" variant="quicklink" class="text-uppercase d-block mb-2">Suggested Activities</b-button>
      <b-button href="/services/centre-for-emerging-artists-and-designers/experiential-learning/toolkit/tips-for-reflection" variant="quicklink" class="text-uppercase d-block mb-2">Tips for Reflection</b-button>
      <b-button href="https://vimeo.com/album/5684718" variant="quicklink" class="text-uppercase d-block">Video Resources</b-button>
    </b-col>
  </b-row>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ceadChildThirdSlug',
  layout: 'layout-onecol-services',
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
      ep: 'https://live-ocad.pantheonsite.io/api/cead-pages',
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
          console.log(error);
        })
    },
  }
}
</script>
<style lang="scss" scoped>

</style>
