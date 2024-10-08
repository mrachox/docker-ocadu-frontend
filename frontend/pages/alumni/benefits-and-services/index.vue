<template>
  <div>
    <alumniSlugSubNav />

    <b-container id="top">
      <ul class="page-nav py-5">
        <li v-for="post in navItems" v-bind:key="post.nid">
          <nuxt-link :to="'/alumni/' + post.field_slug">{{ post.title }}</nuxt-link>
        </li>
      </ul>
    </b-container>


          <b-container v-for="post in posts" v-bind:key="post.nid">
            <h1 class="sr-only">{{ post.title }}</h1>
            <div class="the-content one-col" v-html="post.body"></div>
          </b-container>
  <contactAlumni />

  </div>
</template>


<script>
import contactAlumni from '@/components/contact/ContactAlumni'
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
    contactAlumni,
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
          this.posts = response.data.filter(post => post.nid === '100056972')
          this.navItems = response.data.filter(post => post.field_slug.includes('benefits-and-services')).reverse()
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
