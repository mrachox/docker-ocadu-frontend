<template>
<div>
    <b-container v-for="post in posts" v-bind:key="post.field_slug">
      <Fall2020Quicklinks />
      <h1 class="sr-only">{{post.title}}</h1>
      <div class="the-content one-col" v-html="post.body"></div>
    </b-container>
    <b-container class="mb-5">
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
    <b-carousel-slide img-blank img-alt="Click to play video.">
      <b-embed
       type="iframe"
       aspect="16by9"
       src="https://www.youtube.com/embed/LEAfTW96DLQ"
       allowfullscreen
     ></b-embed>
    </b-carousel-slide>

    <b-carousel-slide img-blank img-alt="Click to play video.">
      <b-embed
       type="iframe"
       aspect="16by9"
       src="https://www.youtube.com/embed/XmoIgAqrkWM"
       allowfullscreen
     ></b-embed>
    </b-carousel-slide>

    <b-carousel-slide img-blank img-alt="Click to play video.">
      <b-embed
       type="iframe"
       aspect="16by9"
       src="https://www.youtube.com/embed/ZwU14e9rwWs"
       allowfullscreen
     ></b-embed>
    </b-carousel-slide>

    <b-carousel-slide img-blank img-alt="Click to play video.">
      <b-embed
       type="iframe"
       aspect="16by9"
       src="https://www.youtube.com/embed/QRR8osRrxF8"
       allowfullscreen
     ></b-embed>
    </b-carousel-slide>

    <b-carousel-slide img-blank img-alt="Click to play video.">
      <b-embed
       type="iframe"
       aspect="16by9"
       src="https://www.youtube.com/embed/IbuobeX5MEU"
       allowfullscreen
     ></b-embed>
    </b-carousel-slide>

    <b-carousel-slide img-blank img-alt="Click to play video.">
      <b-embed
       type="iframe"
       aspect="16by9"
       src="https://www.youtube.com/embed/KYl_4YPlzSE"
       allowfullscreen
     ></b-embed>
    </b-carousel-slide>

    <b-carousel-slide img-blank img-alt="Click to play video.">
      <b-embed
       type="iframe"
       aspect="16by9"
       src="https://www.youtube.com/embed/nQV-TtQRSBw"
       allowfullscreen
     ></b-embed>
    </b-carousel-slide>

    <b-carousel-slide img-blank img-alt="Click to play video.">
      <b-embed
       type="iframe"
       aspect="16by9"
       src="https://www.youtube.com/embed/oUilG8wY1_I"
       allowfullscreen
     ></b-embed>
    </b-carousel-slide>

        </b-carousel>
    </b-container>
</div>
</template>
<script>
import Fall2020Quicklinks from '@/components/quicklinks/Fall2020Quicklinks'
import axios from 'axios'
export default {
    name: 'studentPolSecondSlug',
    layout: 'default',
    components: {
      Fall2020Quicklinks,
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
      const slug1 = this.$route.path.split("/")[2]
      const slug2 = this.$route.path.split("/")[3]
      const slug = slug1 + '/' + slug2
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
