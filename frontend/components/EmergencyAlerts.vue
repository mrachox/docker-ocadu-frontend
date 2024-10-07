<template>
  <div class="component--EA">
    <b-card-group columns>
        <b-card class="el--EA" v-for="post in posts" v-bind:key="post.id" :title="post.title">
          <div slot="header"><small class="text-muted" v-html="post.originalDate"></small></div>
          <b-card-text v-html="post.body"></b-card-text>
        </b-card>
    </b-card-group>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      posts: null,
      epEA: 'https://www.ocadu.ca/api/emergency-alerts',
    }
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    getAllPosts() {
      const slug = this.$route.fullPath
      axios.get(this.epEA)
        .then(response => {
          this.posts = response.data;
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
</style>
