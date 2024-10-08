<template>
<div>
  <!-- HIDING but keeping page path for next year -->

  <!-- <popupUndergrad />

  <div v-for="post in posts" v-bind:key="post.nid">
    <heroVideo :variableVideo="post.field_ip_hero_landing" />
    <h1 class="rec-title-blackout">
      <small>Look inside OCAD University:</small><br/>
      Open House October 20, 10am - 2pm
    </h1>
    <b-container>
      <h1 class="sr-only">{{post.title}}</h1>
      <div class="the-content" v-html="post.body"></div>
    </b-container>
  </div>
  <undergradPrograms :faculty="all" :showDesc="false" :showCTA="false" />
  <a class="knockout d-block p-4" href="https://join.ocadu.ca/Datatel.ERecruiting.Web.External/Pages/createaccount.aspx?f=5617bee4-8ce6-4fbb-82d8-505c95b75f34">
    <b-row class="text-light">
      <b-col sm="12" md="6" align-self="center">
        <h4 class="text-center text-uppercase">sign up!</h4>
      </b-col>
      <b-col sm="12" md="6">
        <p class="larger">Get dates, deadlines, and news sent to your email - you could win $500 from Above Ground Art Supplies!</p>
      </b-col>
    </b-row>
  </a>
  <gradPrograms /> -->
</div>
</template>

<script>
// import undergradPrograms from '@/components/feature/UndergradPrograms'
// import gradPrograms from '@/components/feature/GradPrograms'
// import heroVideo from '@/components/ui/HeroVideo'
// import axios from 'axios'
// import popupUndergrad from '@/components/spotlight/PopupUndergrad'
//
// export default {
//     name: 'tacIndex',
//     layout: 'default',
//     scrollToTop: true,
//     head() {
//       return {
//         title: this.postTitle,
//         meta: [{
//           hid: 'description',
//           name: 'description',
//           content: this.postMetaDesc
//         },
//         {
//           hid: 'keywords',
//           name: 'keywords',
//           content: this.postKeywords
//         }
//       ]
//       }
//     },
//   data () {
//     return {
//       all: "Faculty of",
//       posts: '',
//       ep: 'https://live-ocad.pantheonsite.io/api/admissions-child-pages',
//       postTitle: '',
//       postMetaDesc: '',
//       postKeywords: '',
//     }
//   },
//   components: {
//     heroVideo,
//     undergradPrograms,
//     gradPrograms,
//     popupUndergrad
//
//   },
//   created() {
//     this.getAllPosts();
//   },
//   methods: {
//     getAllPosts() {
//       const slug = this.$route.fullPath
//       axios.get(this.ep)
//         .then(response => {
//           this.posts = response.data.filter(post => post.nid === "100055524")
//           this.postTitle = this.posts[0].title
//           this.postMetaDesc = this.posts[0].field_ip_meta_description
//           this.postKeywords = this.posts[0].field_ip_meta_keywords
//         })
//         .catch(error => {
//           console.log('-----error------- ' + slug);
//           console.log(error);
//         })
//     },
//   }
// }
</script>
<style lang="scss" scoped>

</style>
