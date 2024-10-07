<template>
<div>
  <div v-for="post in posts" v-bind:key="post.field_slug" id="not-too-late-container">
    <Hero :variableImg="post.field_ip_header_image"
    :variableText="post.title"
    :variableSubhead="post.field_subtitle"
    :variableCredit="post.field_credit" />
    <h1 class="mobile-only my-5">{{ post.title }}</h1>
    <h4 class="mobile-only"><em>{{post.field_subtitle}}</em></h4>
    <div class="the-content one-col container" id="not-too-late" v-html="post.body"></div>

  </div>
</div>
</template>

<script>
import axios from 'axios'
import Hero from '@/components/ui/Hero'
export default {
  name: 'gradNotTooLate',
  layout: 'layout-admissions-grad-alt',
  components: {
    Hero
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
      ep: 'https://live-ocad.pantheonsite.io/api/admissions-graduate-child-pages',
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
      const slug = this.$route.params.slug
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data.filter(post => post.nid === "100065890")
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

#not-too-late {

  padding-bottom: 0;

  .row .page-nav li,
  .row .page-nav li a {
    width: 100%;
  }


}

#not-too-late-container {
  .mobile-only {
    display: none;
    margin: 0 1em;
  }
}

@media screen and (max-width: 480px) {

  #not-too-late {
    .page-nav li, .page-nav li a {
      width: 100%;
    }

    .page-nav, p, h4, .row article.card {
      margin: 0 1em;
    }

  }

  #not-too-late-container {
    .component--hero .card {
      display: none;
    }

    .mobile-only {
      display: block;
      margin: 0 1em;
    }
  }

}

</style>
