<template>
<div id="newstudents">
  <!-- HIDING but keeping page path for next year -->
  <popupUndergrad />

  <Hero variableImg="/sites/default/files/assets/media/new%20students%20new%20banner.jpg" variableText="Welcome to OCAD University!" />
  <b-container v-for="post in posts" v-bind:key="post.nid" class="one-col">
    <h1 class="sr-only">{{post.title}}</h1>
    <div class="the-content one-col" v-html="post.body"></div>

  </b-container>
</div>
</template>

<script>
import Hero from '@/components/ui/Hero'
import axios from 'axios'
import popupUndergrad from '@/components/spotlight/PopupUndergrad'

export default {
  name: 'newstudentsIndex',
  layout: 'default',
  scrollToTop: true,
  components: {
    Hero,
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
      posts: '',
      ep: 'https://live-ocad.pantheonsite.io/api/admissions-child-pages',
      postTitle: '',
      postMetaDesc: '',
      postKeywords: '',
      breadcrumb: 'New Students'
    }
  },
  created() {
    this.getAllPosts();
  },
  mounted() {
    // load custom script to page - libary/index.vue
    let newstudentsScript = document.createElement('script')
    newstudentsScript.setAttribute('src', 'newstudents.js')
    document.head.appendChild(newstudentsScript)
  },
  methods: {
    getAllPosts() {
      const slug = this.$route.fullPath
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data.filter(post => post.nid === "100055532")
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
#newstudents {
    .component--hero {
        .card {
            .card-img {
                height: 290px;
            }
        }
    }
}

.knockout {
    padding: 2rem;
    background: #000;
    color: #fff;

    a {
        color: #fff;
    }

    &:hover {
        background: darken(#000, 20%);
        text-decoration: none;
    }
}
</style>
