<template>
  <div>
    <alumniSlugSubNav />
    <b-container v-for="post in posts" v-bind:key="post.field_slug">
      <h1 class="sr-only">{{post.title}}</h1>
      <!-- <p>{{post.field_ip_meta_description}}</p>
      <p>{{post.field_ip_meta_keywords}}</p> -->
      <div class="the-content one-col" v-html="post.body"></div>
    </b-container>
    <contactAlumni />
  </div>
</template>


<script>
import axios from 'axios'
import alumniSlugSubNav from '@/components/subnav/alumni/AlumniSlugSubNav'
import contactAlumni from '@/components/contact/ContactAlumni'
export default {
  name: 'alumniSecondIndex',
  layout: 'default',
  components: {
    alumniSlugSubNav,
    contactAlumni,
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
      ep: 'https://live-ocad.pantheonsite.io/api/alumni-pages',
      postTitle: '',
      postMetaDesc: '',
      postKeywords: '',
      
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
          this.posts = response.data.filter(post => post.nid === '100056976')
          this.postTitle = this.posts[0].title
          this.postMetaDesc = this.posts[0].field_ip_meta_description
          this.postKeywords = this.posts[0].field_ip_meta_keywords
          this.title = this.posts
          // return {
          //   metaDetails = this.posts
          // }
        })
        .catch(error => {
          console.log('-----error------- ' + slug);
          console.log(error);
          console.log(error.response.status);
          console.log(error.response.headers);
        })
    },
  },
  // head() {
  //   return {
  //     title: this.metaDetails.title,
  //     meta: [
  //      {
  //        hid: `description`,
  //        name: 'description',
  //        content: this.metaDetails.field_ip_meta_description
  //      },
  //      {
  //        hid: `keywords`,
  //        name: 'keywords',
  //        keywords: this.metaDetails.field_ip_meta_keywords
  //      }
  //     ]
  //   }
  // },
}
</script>

<style>

</style>
