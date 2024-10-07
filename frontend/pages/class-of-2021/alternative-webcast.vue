<template>
  <div class="">
    <div v-for="post in posts" v-bind:key="post.nid">


      <img :src="post.field_ip_header_image" style="width:100%;" :alt="post.title">

      <b-container class="">
        <div class="the-content one-col" v-html="post.body"></div>

      </b-container>
      <b-container>

      </b-container>
    </div>

  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'classof2020Slug',
  layout: 'default',

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
  data () {
    return {
      posts: '',
      ep: 'https://live-ocad.pantheonsite.io/api/special-events-pages',
      postTitle: '',
      postMetaDesc: '',
      postKeywords: '',
    }
  },
  components: {

  },
  created() {
    this.getAllPosts();
  },
  methods: {
    getAllPosts() {
      // const slug = this.$route.fullPath
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data.filter(post => post.nid === "100065882")
          this.postTitle = this.posts[0].title
          this.postMetaDesc = this.posts[0].field_ip_meta_description
          this.postKeywords = this.posts[0].field_ip_meta_keywords
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
//
// .convocation-cont {
//   color: white;
//   background: black;
// }
//
// .convocation {
//   text-align: left;
//   margin: 2em 0 0 0;
// }
//
// .convocation-cont {
//   a {
//     color: white;
//   }
//
//   a:hover {
//     text-decoration: none;
//     color: white;
//   }
// }

</style>
