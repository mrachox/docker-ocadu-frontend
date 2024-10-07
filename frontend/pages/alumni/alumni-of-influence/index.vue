<template>
  <div>
    <alumniSlugSubNav />
    <Hero
    variableText="Alumni of Influence"
    variableImg="/sites/default/files/legacy_assets/content/alumni-giving/alumni-of-influence-2020.jpg"/>

    <b-container id="top">
      <ul class="page-nav py-5">
        <li>
          <nuxt-link :to="'/alumni/nomination-guidelines'">Nomination Guidelines</nuxt-link>
        </li>
        <li v-for="post in navItems" v-bind:key="post.nid">
          <nuxt-link :to="'/alumni/' + post.field_slug">{{ post.title }}</nuxt-link>
        </li>
      </ul>
    </b-container>
  </b-container>
  <b-container v-for="post in posts" v-bind:key="post.nid">
    <h1 class="sr-only">{{ post.title }}</h1>
    <div class="the-content one-col" v-html="post.body"></div>
  </b-container>

  </div>
</template>


<script>
import Hero from '@/components/ui/Hero'
import alumniSlugSubNav from '@/components/subnav/alumni/AlumniSlugSubNav'
import axios from 'axios'
export default {
  name: 'alumniSecondIndex',
  layout: 'default',

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
      navItems: '',

      ep: 'https://live-ocad.pantheonsite.io/api/alumni-pages',
      postTitle: '',
      postMetaDesc: '',
      postKeywords: '',
    }
  },
  components: {
    Hero,
    alumniSlugSubNav
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    getAllPosts() {
      const slug = this.$route.fullPath
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data.filter(post => post.nid === '100056971')
          this.navItems = response.data.filter(post => post.field_slug.includes('receipients')).reverse()
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

<style>

</style>
