<template>
<div class="careerstories p-4">
  <b-row>
    <b-col sm="12" md="3" class="fixed">
      <ceadStoriesLogo />
      <b-button class="mb-4 d-block" to="/careerstories/about" variant="quicklink">About</b-button>
      <b-button class="mb-4 d-block" to="/careerstories" variant="quicklink">Browse by Program</b-button>
    </b-col>
  </b-row><!--// menu //-->
  <b-row>
    <b-col sm="12" md="9" offset-md="3">
        <div v-for="post in posts" v-bind:key="post.field_slug" class="p-5">
          <b-row>
            <b-col sm="12" md="3" class="fullwidth">
              <img :src="post.field_profile_picture" :alt="post.title">
            </b-col>
            <b-col sm="12" md="9">
              <h1>{{post.title}}</h1>
              <p><span v-html="post.field_program"></span>, {{post.field_program_year}}. <span v-html="post.field_role"></span></p>
              <p v-if="post.field_website"><a :href="post.field_website" target="_blank" class="careerstories">{{ post.field_website }}</a></p>
              <blockquote class="my-4">"{{post.field_quote}}"</blockquote>
            </b-col>
          </b-row>

            <div class="summary" v-html="post.field_story_summary" v-if="!show"></div>
            <div class="fullstory" v-html="post.body" v-if="show"></div>
            <b-button variant="quicklink" class="text-uppercase d-block my-5" @click="show = !show"><span v-if="show">close</span> <span v-if="!show">read more</span></b-button>

            <!-- hide for now May 18, 2021 -->
            <!-- <b-img :src="post.field_career_path" fluid-grow :alt="post.title"></b-img> -->

            <b-row>
              <b-col sm="12" md="4">
                <b-img :src="post.field_portfolio_image_1" fluid-grow :alt="post.title" v-if="post.field_portfolio_image_1"></b-img>
                <p v-if="post.field_portfolio_description_1" class="py-2" v-html="post.field_portfolio_description_1"></p>
              </b-col>
              <b-col sm="12" md="4">
                <b-img :src="post.field_portfolio_image_2" fluid-grow :alt="post.title" v-if="post.field_portfolio_image_2"></b-img>
                <p v-if="post.field_portfolio_description_2" class="py-2" v-html="post.field_portfolio_description_2"></p>
              </b-col>
              <b-col sm="12" md="4">
                <b-img :src="post.field_portfolio_image_3" fluid-grow :alt="post.title" v-if="post.field_portfolio_image_3"></b-img>
                <p v-if="post.field_porfolio_description_3" class="py-2" v-html="post.field_porfolio_description_3"></p>
              </b-col>
            </b-row>
        </div>
        <ceadStoriesFooter />
     </b-col>
</b-row>

</div>
</template>

<script>
import axios from 'axios'
import ceadStoriesLogo from '@/components/ui/CEADStoriesLogo'
import ceadStoriesFooter from '@/components/ui/CEADStoriesFooter'
export default {
    name: 'careerstoriesSlug',
    layout: 'layout-blank',
    components: {
       ceadStoriesLogo,
       ceadStoriesFooter
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
      show: false,
      posts: '',
      ep: 'https://live-ocad.pantheonsite.io/api/career-stories',
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
          this.posts = response.data.filter(post => post.field_slug.includes(slug))
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


</style>
