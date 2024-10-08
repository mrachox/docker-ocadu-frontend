<template>
  <div class="home--banner">
    <div class="vid-cont" v-for="post in posts" v-bind:key="post.nid">
        <div v-html="post.body"></div>
        <div id="info" v-html="post.field_quicklinks"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'homePageAltComponent',
  layout: 'default',
  data() {
    return {
      posts: '',
      ep: 'https://www.ocadu.ca/api/about-pages',

    }
  },
  components: {
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    getAllPosts() {
      const slug = this.$route.fullPath
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data.filter(post => post.nid === '100068199')
          /* 100068751 = o-days welcome */
          /* 100068133 = o-days welcome */
          /* 100066167 = jordan bennett */
          /* 100068199 = video */
          /* 100069215 = gradex 2024 */
          /* 100069270 = convo 2024 */

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

// .vid-cont {
//   position: relative;
// }

// #info {
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     display: flex;
//     align-items: flex-end;
//     justify-content: right;
//     top: 0;
//     left: 0;
//     z-index: 99;
//     padding: 0;
//     //text-align: center;
//     color: white;
//     font-family: 'gotham_bold', sans-serif;

//     h1 {
//       flex: 1;
//       // height: 100%;
//       // display: block;
//       padding: 2rem;
//       background: rgba(0,0,0,0.675);
//       max-width: 780px;
//       margin-bottom: 4rem;
//     }

//     a{
//       width: 100%;
//       height: 50%;
//       margin: 0;
//       padding: 0;
//       color: white;
//       display: block;
//       text-decoration: none;
//       flex: 1;
//     //  text-indent:-100000px;
//     }

// }

// @media only screen and (max-width:600px) {
//   #info {
//     h1 {
//       font-size: 2rem;
//       margin-bottom: 0;
//     }
//   }
// }

</style>
