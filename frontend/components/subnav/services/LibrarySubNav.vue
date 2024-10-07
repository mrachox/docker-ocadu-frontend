<template>
  <div class="component--librarysubnav">
    <div id="top">
        <!-- <ul class="sub-nav">
          <li v-for="post in posts" v-bind:key="post.nid">
            <a :href="'/services/library/' + post.field_slug">{{ post.title }}</a>
          </li>
        </ul> -->
        <ul class="sub-nav">
          <li><a href="/services/library/about-the-library">About the OCAD U Library</a></li>
          <li><a href="/services/library/accessibility">Accessibility</a></li>
          <li><a href="/services/library/anti-racism-statement">Anti-Racism Statement</a></li>
          <li><a href="/services/library/collections">Collections</a></li>
          <li><a href="/services/library/contact">Contact Us</a></li>
          <li><a href="/services/library/covid-library-response">Covid-19 Library Response</a></li>
          <li><a href="/services/library/faculty">Faculty</a></li>
          <li><a href="/services/library/faculty/liaison-librarians">Liaison Librarians</a></li>
          <li><a href="/services/library/harmful-language-statement">Harmful Language Statement</a></li>
          <li><a href="/services/library/hours">Hours and locations</a></li>
          <li><a href="/services/library/">Library</a></li>
          <li><a href="/services/library/library-ready">Library Ready</a></li>
          <li><a href="/services/library/services">Library Services</a></li>
          <li><a href="/services/library/newsletters">Newsletters</a></li>
          <li><a href="/services/library/omni">Omni</a></li>
          <li><a href="/services/library/research-help">Research Help</a></li>
          <li><a href="/services/library/students">Students</a></li>
        </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      posts: null,
      epIT: 'https://www.ocadu.ca/api/library-pages',
    }
  },
  mounted () {
    this.$accordionControl();
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    getAllPosts(env) {
      const slug = this.$route.fullPath
      axios.get(this.epIT)
        .then(response => {
          this.posts = response.data.filter(post => !post.field_slug.includes('/'))
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
// .component--librarysubnav{
//   .sub-nav li{
//     &:first-child{
//       // display: none;
//     }
//   }
// }
</style>
