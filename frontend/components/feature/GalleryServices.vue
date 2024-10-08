<template>
  <div class="my-5">
    <b-container>
      <b-row>
        <b-col sm="12" md="6" lg="4" v-for="post in posts" v-bind:key="post.id">
            <b-card
               :title="post.title"
               :img-src="'https://ocadu.ca/' + post.field_ip_auxnav"
               img-alt="Image"
               img-top
               tag="article"
               class="mb-4"
             >
               <b-card-text v-html="post.field_ip_body"></b-card-text>
               <b-button :href="'/gallery/' + post.field_slug" variant="more" :aria-label="'Learn more about '+post.title" :title="post.title" class="stretched-link">Learn More</b-button>
             </b-card>
        </b-col>
        <!-- <b-col sm="12" md="6" lg="4">
            <b-card
               title="Learning Zone"
               img-src="https://ocadu.ca/Assets/design/spotlights/learning-zone-spotlight.jpg"
               img-alt="Learning Zone"
               img-top
               tag="article"
               class="mb-4"
             >
               <b-card-text>
                 The Learning Zone is an active space, often hosting workshops, drop-in services, exhibition receptions, book launches, art supply swaps, and much more.
               </b-card-text>
               <b-button href="/services/library/services/student-exhibitions" variant="more" title="Learning Zone" class="stretched-link">Learn More</b-button>
             </b-card>
        </b-col> -->
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      posts: null,
      ep: 'https://www.ocadu.ca/api/gallery-pages',
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
          this.posts = response.data.filter(post => post.field_ip_department.includes('Gallery System'))
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
