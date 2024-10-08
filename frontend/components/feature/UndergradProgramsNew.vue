<template>
  <div class="">
    <h2 class="text-center">Undergraduate Programs</h2>
    <b-container>
      <b-row>
        <b-col sm="12" md="6" lg="3" v-for="post in posts" v-bind:key="post.id">
          <b-link :href="'/admissions' + post.field_slug" :title="post.title">
            <b-card
             :title="post.title"
             :img-src="post.field_ip_thumbnail"
             img-alt="Image"
             img-top
             tag="article"
             class=""
             >
            </b-card>
         </b-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      posts: '',
      ep: 'https://www.ocadu.ca/api/admissions-programs',
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
          console.log('-----error------- ' + slug);
          console.log(error);
        })
    },
  }
}
</script>
<style lang="scss">

</style>
