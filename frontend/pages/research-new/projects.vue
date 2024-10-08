<template>
  <div>
    <researchSubNav />
    <b-container class="py-5">
      <ul class="page-nav py-4">
        <li><a href="/academics/bios">people</a></li>
        <li><a href="/research-new/projects">projects</a></li>
        <!-- <li><a href="/research-new/labs">labs</a></li> -->
      </ul>
      <h1 class="text-center">Research Projects</h1>
      <b-row class="py-4">
        <b-col sm="12" md="4" v-for="post in posts" v-bind:key="post.nid">
          <b-card
            :title="post.title"
            :img-src="'https://www.ocadu.ca' + post.field_header_image"
            :img-alt="post.title"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
          <b-button class="stretched-link" :href="'/node/' + post.nid" variant="more">Learn More</b-button>
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
      title: 'Research Projects'
    }
  },
  data () {
    return {
      posts: '',
      ep: 'https://live-ocad.pantheonsite.io/api/research-projects',
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
