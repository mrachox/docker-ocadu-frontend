<template>
<div>
  <b-container v-for="post in posts" v-bind:key="post.field_slug" class="my-5">
    <!-- <Hero
    :variableImg="post.field_ip_header_image"
    :variableText="post.title"
    :variableSubhead="post.field_subtitle"
    :variableCredit="post.field_credit"
    /> -->

      <h1 class="text-center">{{post.title}}</h1>
      <div class="the-content one-col" v-html="post.body"></div>

  </b-container>

    <b-container class="my-5">
      <Fall2020LandingSpotlight/>
    </b-container>

    <!-- <b-container class="mb-5">
      <b-carousel
      id="carousel-fall2020"
      v-model="slide"
      :interval="2500"
      fade
      indicators
      img-width="1024"
      img-height="480"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
    <b-carousel-slide img-blank>
      <b-embed
       type="iframe"
       aspect="16by9"
       src="https://www.youtube.com/embed/wG1Y7ImQdc0"
       allowfullscreen
     ></b-embed>
    </b-carousel-slide>

    <b-carousel-slide img-blank>
      <b-embed
       type="iframe"
       aspect="16by9"
       src="https://www.youtube.com/embed/qXoFuEkWhSE"
       allowfullscreen
     ></b-embed>
    </b-carousel-slide>

    <b-carousel-slide img-blank>
      <b-embed
       type="iframe"
       aspect="16by9"
       src="https://www.youtube.com/embed/rPq4TKNgtlc"
       allowfullscreen
     ></b-embed>
    </b-carousel-slide>

    <b-carousel-slide img-blank>
      <b-embed
       type="iframe"
       aspect="16by9"
       src="https://www.youtube.com/embed/Pzvxsuj3h74"
       allowfullscreen
     ></b-embed>
    </b-carousel-slide>

    <b-carousel-slide img-blank>
      <b-embed
       type="iframe"
       aspect="16by9"
       src="https://www.youtube.com/embed/b9E4FMut8Js"
       allowfullscreen
     ></b-embed>
    </b-carousel-slide>


    <b-carousel-slide img-blank>
      <b-embed
       type="iframe"
       aspect="16by9"
       src="https://www.youtube.com/embed/q_nTFOfjm1I"
       allowfullscreen
     ></b-embed>
    </b-carousel-slide>


    <b-carousel-slide img-blank>
      <b-embed
       type="iframe"
       aspect="16by9"
       src="https://www.youtube.com/embed/l7eZh6uaCiM"
       allowfullscreen
     ></b-embed>
    </b-carousel-slide>

    <b-carousel-slide img-blank>
      <b-embed
       type="iframe"
       aspect="16by9"
       src="https://www.youtube.com/embed/NGtn9zavDbU"
       allowfullscreen
     ></b-embed>
    </b-carousel-slide>

    <b-carousel-slide img-blank>
      <b-embed
       type="iframe"
       aspect="16by9"
       src="https://www.youtube.com/embed/AGfv0iqe2jM"
       allowfullscreen
     ></b-embed>
    </b-carousel-slide>


    <b-carousel-slide img-blank>
      <b-embed
       type="iframe"
       aspect="16by9"
       src="https://www.youtube.com/embed/FIXvKz6d2W8"
       allowfullscreen
     ></b-embed>
    </b-carousel-slide>

    <b-carousel-slide img-blank>
      <b-embed
       type="iframe"
       aspect="16by9"
       src="https://www.youtube.com/embed/gaSNqb4WMSY"
       allowfullscreen
     ></b-embed>
    </b-carousel-slide>

    <b-carousel-slide img-blank>
      <b-embed
       type="iframe"
       aspect="16by9"
       src="https://www.youtube.com/embed/j8CwevGxCTk"
       allowfullscreen
     ></b-embed>
    </b-carousel-slide>

    <b-carousel-slide img-blank>
      <b-embed
       type="iframe"
       aspect="16by9"
       src="https://www.youtube.com/embed/6zlTEXSggTo"
       allowfullscreen
     ></b-embed>
    </b-carousel-slide>

    <b-carousel-slide img-blank>
      <b-embed
       type="iframe"
       aspect="16by9"
       src="https://www.youtube.com/embed/Zsk8kGzfv8Q"
       allowfullscreen
     ></b-embed>
    </b-carousel-slide>

    <b-carousel-slide img-blank>
      <b-embed
       type="iframe"
       aspect="16by9"
       src="https://www.youtube.com/embed/zLBd6FobX8U"
       allowfullscreen
     ></b-embed>
    </b-carousel-slide>

    <b-carousel-slide img-blank>
      <b-embed
       type="iframe"
       aspect="16by9"
       src="https://www.youtube.com/embed/a4_MNkuulm0"
       allowfullscreen
     ></b-embed>
    </b-carousel-slide>



        </b-carousel>
    </b-container> -->

</div>
</template>

<script>
import Fall2020LandingSpotlight from '@/components/spotlight/Fall2020LandingSpotlight'
// import Hero from '@/components/ui/Hero'
import axios from 'axios'
export default {
  name: 'studentPolIndex',
  layout: 'default',
  components: {
    Fall2020LandingSpotlight,
    // Hero,
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
      slide: 0,
      posts: '',
      ep: 'https://live-ocad.pantheonsite.io/api/students-pages',
      postTitle: '',
      postMetaDesc: '',
      postKeywords: '',
    }
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    getAllPosts() {
      const slug = this.$route.fullPath
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data.filter(post => post.nid === '100065989')
          this.postTitle = this.posts[0].title
          this.postMetaDesc = this.posts[0].field_ip_meta_description
          this.postKeywords = this.posts[0].field_ip_meta_keywords
        })
        .catch(error => {
          console.log('-----error------- ' + slug);
          console.log(error);
          console.log(error.response.status);
          console.log(error.response.headers);
        })
    },
  }
}


</script>

<style lang="scss" scoped>

</style>
