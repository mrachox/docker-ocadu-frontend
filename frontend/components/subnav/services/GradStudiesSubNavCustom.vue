<template>
<div class="component--programssubnav">
  <div id="top">
  <ul class="sub-nav">
      <li><a href="/admissions">Admissions</a></li>
       <!-- <li v-for="post in posts" v-bind:key="post.nid">
        <nuxt-link :to="'/academics/graduate-studies/' + post.field_slug">{{ post.title }}</nuxt-link>
      </li> -->
      <li><a href="https://gradadmissions.ocadu.ca/program/CADN">Contemporary Art, Design and New Media Art Histories (MA)</a></li>
      <li><a href="https://gradadmissions.ocadu.ca/program/CCP">Criticism and Curatorial Practice (MFA)</a></li>
      <li><a href="https://gradadmissions.ocadu.ca/program/DHEA">Design for Health (MDes)</a></li>
      <li><a href="https://gradadmissions.ocadu.ca/program/DIGF">Digital Futures (MA, MDes, MFA)</a></li>
      <li><a href="https://gradadmissions.ocadu.ca/program/INCD">Inclusive Design (MDes)</a></li>
      <li><a href="https://gradadmissions.ocadu.ca/program/IAMD">Interdisciplinary Master's in Art, Media and Design (MA, MDes and MFA)</a></li>
      <li><a href="https://gradadmissions.ocadu.ca/program/SFI">Strategic Foresight and Innovation (MDes)</a></li>
      <li><a href="https://gradadmissions.ocadu.ca">What a DESIGN master’s can do for you</a></li>
      <li><a href="/academics/graduate-studies/grad-studies-contact">School of Graduate Studies Contact Information</a></li>
      <li><a href="/academics/graduate-studies/">Graduate Studies at OCAD University</a></li>
  </ul>
</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      // posts: null,
      // epAbt: 'https://www.ocadu.ca/api/grad-academic-programs-pages',
    }
  },
  mounted () {
    this.$accordionControl();
  },
  created() {
    // this.getAllPosts();
  },
  methods: {
    // getAllPosts(env) {
    //   const slug = this.$route.fullPath
    //   axios.get(this.epAbt)
    //     .then(response => {
    //       console.log(slug)
    //       this.posts = response.data.filter(post => !post.field_slug.includes('/'))
    //     })
    //     .catch(error => {
    //       console.log('-----error------- ' + slug);
    //       console.log(error);
    //     })
    // },
  }
}
</script>

<style lang="scss" scoped>

</style>
