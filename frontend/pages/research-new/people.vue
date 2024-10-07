<template>
  <div>
    <researchSubNav />
    <b-container class="py-5">
      <ul class="page-nav py-4">
        <li><a href="/research/people">people</a></li>
        <li><a href="/research/projects">projects</a></li>
        <li><a href="/research/labs">labs</a></li>
      </ul>
      <h1 class="text-center">Research People</h1>
      <b-row class="py-4">
        <b-col sm="12" md="4" v-for="post in posts" v-bind:key="post.nid">
          <b-card border-variant="dark" :header="post.title" class="text-center" >
            <b-card-text>
              <p>{{ post.connection[0] }} <br/>{{ post.connection[1] }}</p>
              <p>{{ post.fullname }}</p>
            </b-card-text>
            <b-button class="stretched-link" :href="'https://www2.ocadu.ca/node/' + post.nid" variant="more" target="_blank">Learn More</b-button>
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
      title: 'Research People'
    }
  },
  data () {
    return {
      posts: '',
      ep: 'https://www2.ocadu.ca/rest/research-people.json',
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
