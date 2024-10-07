<template>
  <div>
    <galleriesSlugSubNav />
    <b-container>
      <h2 class="py-5 text-center">Past Exhibitions &amp; Events</h2>
      <b-card-group columns>
        <b-card
          :title="post.title"
          :img-src="'https://www.ocadu.ca' + (post.field_banner_image || post.field_poster || post.field_image)"
          :img-alt="post.title"
          img-top
          v-for="post in posts" v-bind:key="post.nid"
        >
          <b-card-text>
            <time class="my-2 d-block">{{ post.field_date }}</time>
          </b-card-text>
          <b-button class="stretched-link" :href="'https://www.ocadu.ca/' + post.nid" variant="more" target="_blank">Learn More</b-button>
        </b-card>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
import galleriesSlugSubNav from '@/components/subnav/gallery/GalleriesSlugSubNav'
import axios from 'axios'
export default {

  head() {
    return {
      title: this.postTitle,
    //   meta: [{
    //     hid: 'description',
    //     name: 'description',
    //     content: this.postMetaDesc
    //   },
    //   {
    //     hid: 'keywords',
    //     name: 'keywords',
    //     content: this.postKeywords
    //   }
    // ]
    }
  },
  components: {
    galleriesSlugSubNav
  },
  data () {
    return {
      posts: null,
      ep: 'https://live-ocad.pantheonsite.io/api/past-adaslaight-events',
      postTitle: 'Ada Slaight',
      // postMetaDesc: '',
      // postKeywords: '',
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
          // this.postTitle = this.posts[0].title
          // this.postMetaDesc = this.posts[0].field_ip_meta_description
          // this.postKeywords = this.posts[0].field_ip_meta_keywords
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
