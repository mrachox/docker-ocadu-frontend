<template>
  <div>
    <!-- <copyprintSubNav /> -->
    <div id="copyprint" v-for="post in posts" v-bind:key="post.nid">
      <Hero
      :variableImg="post.field_ip_header_image"
      :variableCredit="post.field_credit"
      :variableText="post.title"
      :variableSubhead="post.field_subtitle"/>
      <b-container>
        <div class="the-content my-4" v-html="post.body"></div>
      </b-container>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/ui/Hero'
import copyprintSubNav from '@/components/subnav/services/CopyPrintSubNav'
import axios from 'axios'
export default {
name: 'copyprintIndex',
  layout: 'default-services',
    components: {
      Hero,
      copyprintSubNav
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
  data () {
    return {
      posts: '',
      ep: 'https://live-ocad.pantheonsite.io/api/all-ip-pages',
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
          this.posts = response.data.filter(post => post.nid === "100064979")
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
#copyprint {
  .card {
    img {
      height: 50vh;
    }
  }
}

@media screen and (min-width: 992px) {
  #copyprint {
    .card {
      img {
        height: 80vh;
      }
    }
  }

}

@media screen and (min-width: 1200px) {
  #copyprint {
    .card {
      img {
        height: 110vh;
      }
    }
  }

}
</style>
