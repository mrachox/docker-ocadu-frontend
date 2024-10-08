<template>
  <div>
    <researchSubNav />
    <b-container class="py-5">
      <ul class="page-nav py-4">
        <!-- <li><a href="/research-new/people">people</a></li> -->
        <li><a href="/research-new/projects">projects</a></li>
        <li><a href="/research-new/labs">labs</a></li>
      </ul>
      <h1 class="text-center">Research Projects</h1>
      <b-row class="py-4">
        <b-col sm="12" md="4" v-for="post in posts" v-bind:key="post.nid">
          <b-card
            :title="post['Full Name']"
            :img-alt="post['Full Name']"
            tag="article"
          >
          <div v-html="post.Picture" style="max-width: 20rem;" class="my-4"></div>
          <b-button class="stretched-link" :href="'https://www2.ocadu.ca/research/' + post.name" variant="more" target="_blank">Learn More</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <researchServices />
  </div>
</template>

<script>
import researchSubNav from '@/components/subnav/research/ResearchSubNav'
import researchServices from '@/components/feature/ResearchServices'
import axios from 'axios'
export default {
  name: 'researchPeople',
  layout: 'default',
  components: {
    researchSubNav,
    researchServices
  },
  head() {
    return {
      title: 'Research Labs'
    }
  },
  data () {
    return {
      posts: '',
      ep: 'https://www1.ocadu.ca/feed/research-labs.json',
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
          this.posts = response.data
        })
        .catch(error => {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        })
    },
  }
}
</script>

<style>

</style>
