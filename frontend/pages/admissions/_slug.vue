<template>
<div class="child--admissions mb-5 my-5">
  <popupUndergrad />

  <!--CHILDPAGES-->
  <div v-for="post in child_pages_posts" v-bind:key="post.nid">
    <h1 class="sr-only">{{post.title}}</h1>
    <div v-html="post.body"></div>
  </div>

  <!--SEGMENTS-->
  <div v-for="post in posts" v-bind:key="post.field_slug">
    <b-row>
      <b-col sm="12" md="6">
        <div class="content border-top py-4" v-html="post.body"></div>
      </b-col>
      <b-col sm="12" md="6">
        <div class="recruitment-links border-top py-4" v-html="post.field_quicklinks"></div>
      </b-col>
    </b-row>
    <div class="my-5">
      <div v-html="post.field_ip_body"></div>
    </div>
  </div>

  <undergradProgramsNew />

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

  <gradPrograms />
</div>
</template>

<script>
import undergradProgramsNew from '@/components/feature/UndergradProgramsNew'
import gradPrograms from '@/components/feature/GradPrograms'
import popupUndergrad from '@/components/spotlight/PopupUndergrad'


import axios from 'axios'
export default {
  name: 'admissionsSlug',
  layout: 'layout-admissions',
  scrollToTop: true,
  components: {
    undergradProgramsNew,
    gradPrograms,
    popupUndergrad

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
      all: "Faculty of",
      child_pages_posts: '',
      posts: '',
      postTitle: '',
      postMetaDesc: '',
      postKeywords: '',
      epChP: 'https://live-ocad.pantheonsite.io/api/admissions-child-pages',
      ep: 'https://live-ocad.pantheonsite.io/api/admissions-segment-pages',
    }
  },
  created() {
    this.getChPosts();
    this.getAllPosts();
  },
  methods: {
    getChPosts() {
      // const slug1 = this.$route.path.split("/")[1]
      // const slug2 = this.$route.path.split("/")[2]
      // const slug = slug1 + '/' + slug2

      const slug = this.$route.params.slug
      // console.log(slug)
      axios.get(this.epChP)
        .then(response => {
          this.child_pages_posts = response.data.filter(child_pages_post => child_pages_post.field_slug === slug )
          this.postTitle = this.child_pages_posts[0].title
          this.postMetaDesc = this.child_pages_posts[0].field_ip_meta_description
          this.postKeywords = this.child_pages_posts[0].field_ip_meta_keywords
        })
        .catch(error => {
          console.log('-----error------- ' + slug);
          console.log(error);
        })
    },

    getAllPosts() {
      const slug = this.$route.params.slug
      axios.get(this.ep)
        .then(response => {
          // this.posts = response.data.filter(post => post.field_slug.includes(slug))
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
.knockout {
    background: $secondary;
    &:hover {
        background: darken($secondary, 20%);
        text-decoration: none;
    }
}

.tabs {
  .tab {
    .tab-content {
      img {
        max-width: 400px;
      }
    }
  }
}

strong {
  font-family: 'malaga_bold';
}

p a {
  text-decoration: underline;
}
</style>
