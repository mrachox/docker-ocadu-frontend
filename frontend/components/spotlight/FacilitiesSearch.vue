<template>
  <div>
    <b-row class="my-5">
      <select class="filters col col-sm-12 col-md-5" v-model="typeFilter" @click="resetSearch">
          <option value="all">All Categories</option>
          <option value="AUDIOVISUAL">AUDIOVISUAL &amp; MULTIMEDIA</option>
          <option value="ACADEMIC">ACADEMIC &amp; CURRICULAR</option>
          <option value="BUSINESS">BUSINESS APPLICATIONS</option>
          <option value="COMPUTING">COMPUTING</option>
          <option value="COPY">COPY &amp; PRINT</option>
          <option value="EMAIL">EMAIL &amp; CALENDARING</option>
          <option value="LAPTOP">LAPTOP PROGRAM</option>
          <option value="NETWORK">NETWORK &amp; TELEPHONY</option>
          <option value="SUPPORT">SUPPORT</option>
      </select>
      <b-col sm="12" md="6">
        <input type="text" class="form-control" v-model="search" placeholder="Search"/>
      </b-col>
      <b-col sm="12" md="1">
        <b-button @click="resetSearch" variant="more" class="text-uppercase d-inlineblock my-2">RESET</b-button>
      </b-col>
    </b-row>

    <div v-for="post in filteredPosts" v-bind:key="post.nid">
      <b-row align-h="around" align-v="center" class="my-5">
        <b-col sm="12" md="4">
          <h4><a :href="post.field_slug">{{ post.field_subtitle }}</a></h4>
        </b-col>
        <b-col sm="12" md="5">
          <div v-html="post.field_ip_body"></div>
        </b-col>
        <b-col sm="12" md="3">
          <h6 v-html="post.field_ip_auxnav"></h6>
        </b-col>
      </b-row>
      <hr>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'itSearch',
  layout: 'default',
  data () {
      return {
        search: '',
        posts: [],
        typeFilter: 'all',
        ep: 'https://www.ocadu.ca/api/it-sc-services-pages',
      }
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    resetSearch: function(e){
      e.preventDefault()
      this.search = ""
    },
    getAllPosts: function(){
      const slug = this.$route.fullPath
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data
        })
        .catch(error => {
          console.log('-----error------- ' + slug);
          console.log(error)
        })
    }
  },
  computed: {
    filteredPosts: function(){
      if (this.search.length == 0){
        const typeFilter = post =>
          (this.typeFilter == 'all') ||
          (post.field_ip_auxnav.toLowerCase().includes(this.typeFilter.toLowerCase()))
        const reducer = (accumulator, post) => {
          if (typeFilter(post))
            accumulator.push(post)
          return accumulator
        }
        return this.posts.reduce(reducer, [])
      } else {
        return this.posts.filter(post => {
          return post.field_subtitle.toLowerCase().includes(this.search.toLowerCase()) ||
                 post.field_ip_body.toLowerCase().includes(this.search.toLowerCase()) ||
                 post.field_ip_auxnav.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    }
  } // computed

}
</script>
<style lang="scss" scoped>

</style>
