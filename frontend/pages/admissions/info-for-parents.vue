<template>
<div>
  <popupUndergrad />

  <b-container v-for="post in posts" v-bind:key="post.nid" class="one-col">
    <h1 class="sr-only">{{post.title}}</h1>
    <div class="the-content one-col" v-html="post.body"></div>
    <b-row class="my-5">
      <b-col class="my-4" sm="12" md="6">
        <article class="card-overlay w-100" style="{ backgroundImage: 'url(https://www.ocadu.ca/Assets/content/admissions/campus%20life.png)' }">
          <nuxt-link to="/services/campus-life" class="stretched-link">
            <h3 class="text-light text-center">CAMPUS LIFE</h3>
          </nuxt-link>
        </article>
      </b-col>
      <b-col class="my-4" sm="12" md="6">
        <article class="card-overlay w-100" style="{ backgroundImage: 'url(https://www.ocadu.ca/Assets/content/admissions/housing.png)' }">
          <nuxt-link to="/services/campus-life/housing-information" class="stretched-link">
            <h3 class="text-light text-center">HOUSING</h3>
          </nuxt-link>
        </article>
      </b-col>
      <b-col class="my-4" sm="12" md="6">
        <article class="card-overlay w-100" style="{ backgroundImage: 'url(https://www.ocadu.ca/Assets/content/admissions/costs.png)' }">
          <nuxt-link to="/services/financial-matters/student-accounts" class="stretched-link">
            <h3 class="text-light text-center">COSTS</h3>
          </nuxt-link>
        </article>
      </b-col>
      <b-col class="my-4" sm="12" md="6">
        <article class="card-overlay w-100" style="{ backgroundImage: 'url(https://www.ocadu.ca/Assets/content/admissions/programs.png)' }">
          <nuxt-link to="/admissions/programs" class="stretched-link">
            <h3 class="text-light text-center">PROGRAMS</h3>
          </nuxt-link>
        </article>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
import Hero from '@/components/ui/Hero'
import popupUndergrad from '@/components/spotlight/PopupUndergrad'

import axios from 'axios'
export default {
  name: 'parentsIndex',
  layout: 'default',
  scrollToTop: true,
  components: {
    Hero,
    popupUndergrad

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
      ep: 'https://live-ocad.pantheonsite.io/api/admissions-child-pages',
      postTitle: '',
      postMetaDesc: '',
      postKeywords: '',
      breadcrumb: 'New Students'
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
          this.posts = response.data.filter(post => post.nid === "100065015")
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
.knockout {
    padding: 2rem;
    background: #000;
    color: #fff;

    a {
        color: #fff;
    }

    &:hover {
        background: darken(#000, 20%);
        text-decoration: none;
    }
}
</style>
