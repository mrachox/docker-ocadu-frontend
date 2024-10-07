<template>
<div>
    <b-container v-for="post in posts" v-bind:key="post.field_slug">
      <Fall2020Quicklinks />
      <h1 class="sr-only">{{post.title}}</h1>
      <div class="the-content one-col" v-html="post.body"></div>
    </b-container>
    <b-container class="mb-5">
      <b-row>
        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://ocadu.ca/sites/default/files/students/fall-2020/virtual-orientation.jpg');">
            <a href="https://www.ocadu.ca/services/campus-life/orientation" target="_blank" class="stretched-link">
              <h3 class="text-light text-center">Virtual Orientation</h3>
            </a>
          </article>
        </b-col>
        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://ocadu.ca/sites/default/files/students/fall-2020/fall%20hub%2013.jpg');">
            <a href="https://www.ocadu.ca/services/writing-and-learning-centre/wlc-services/english-language-learning" target="_blank" class="stretched-link">
              <h3 class="text-light text-center">Support for English Language Learning</h3>
            </a>
          </article>
        </b-col>
        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://ocadu.ca/sites/default/files/students/fall-2020/academic-advising.jpg');">
            <a href="https://ocadu.ca/services/academic-advising" target="_blank" class="stretched-link">
              <h3 class="text-light text-center">Academic Advising</h3>
            </a>
          </article>
        </b-col>
        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://ocadu.ca/sites/default/files/students/fall-2020/fall%20hub%2016.jpg');">
            <a href="https://ocadu.ca/services/health-and-wellness" target="_blank" class="stretched-link">
              <h3 class="text-light text-center">Health and Wellness</h3>
            </a>
          </article>
        </b-col>
        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://ocadu.ca/sites/default/files/students/fall-2020/fod-office.JPG');">
            <a href="https://ocadu.ca/academics/faculty-of-design" target="_blank" class="stretched-link">
              <h3 class="text-light text-center">Your Faculty of Design Office</h3>
            </a>
          </article>
        </b-col>
        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://ocadu.ca/sites/default/files/students/fall-2020/foa-office.jpg');">
            <a href="https://ocadu.ca/academics/faculty-of-art" target="_blank" class="stretched-link">
              <h3 class="text-light text-center">Your Faculty of Art Office</h3>
            </a>
          </article>
        </b-col>
        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://ocadu.ca/sites/default/files/students/fall-2020/folasis-office.JPG');">
            <a href="https://ocadu.ca/academics/faculty-of-las-and-sis" target="_blank" class="stretched-link">
              <h3 class="text-light text-center">Your Faculty of Liberal Arts &amp; Sciences and School of Interdisciplinary Studies Office </h3>
            </a>
          </article>
        </b-col>
        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://ocadu.ca/sites/default/files/students/fall-2020/graduate-office.jpg');">
            <a href="https://ocadu.ca/academics/graduate-studies" target="_blank" class="stretched-link">
              <h3 class="text-light text-center">Your Graduate Studies Office</h3>
            </a>
          </article>
        </b-col>
      </b-row>
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
<style lang="scss" scoped>

</style>
