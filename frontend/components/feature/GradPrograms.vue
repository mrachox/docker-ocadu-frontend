<template>
  <div class="my-5">
    <h2 class="text-center my-4">Graduate Programs</h2>
    <b-container>
      <b-row>
        <b-col sm="12" md="6" lg="3" v-for="post in filteredGradPrograms" v-bind:key="post.id">
          <!-- <b-link :href="'/academics' + post.field_slug" :title="post.title"> -->
            <b-card
               :title="post.title"
               :img-src="post.field_pagelet_image_link"
               img-alt="Image"
               img-top
               tag="article"
               class=""
             >
               <b-card-text v-html="post.body" v-show="showDesc"></b-card-text>
               <b-button :href="'/academics'+post.field_slug" variant="more" :aria-label="'Learn more about '+post.title" :title="post.title" v-show="showCTA">Learn More</b-button>
             </b-card>
          <!-- </b-link> -->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['showDesc', 'showCTA'],
  data () {
    return {
      posts: null,
      filteredGradPrograms: [],
      ep: 'https://www.ocadu.ca/api/academic-programs-list',
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
          this.filteredGradPrograms = this.posts.filter(post => post.field_ip_department.includes('Graduate Studies'))
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
