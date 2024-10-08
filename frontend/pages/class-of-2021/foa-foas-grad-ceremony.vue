<template>
<div>
  <div v-for="post in posts" v-bind:key="post.nid">
    <!-- <Hero
    :variableImg="post.field_ip_header_image"
    :variableText="post.title"
    :variableSubhead="post.field_subtitle"
    :variableCredit="post.field_credit"
    /> -->
    <img :src="post.field_ip_header_image" style="width:100%;" :alt="post.title">

    <b-container>
      <div class="the-content one-col" v-html="post.body"></div>
    </b-container>
    <b-container>

      <gradexPrograms />
      <gradexGradPrograms />
    </b-container>
  </div>

</div>
</template>

<script>
import axios from 'axios'
import Hero from '@/components/ui/Hero'

export default {
name: 'convoIndex',
layout: 'default',

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
    ep: 'https://live-ocad.pantheonsite.io/api/special-events-pages',
    postTitle: '',
    postMetaDesc: '',
    postKeywords: '',
  }
},
components: {
  Hero,


},
created() {
  this.getAllPosts();
},
methods: {
  getAllPosts() {
    const slug = this.$route.fullPath
    axios.get(this.ep)
      .then(response => {
        this.posts = response.data.filter(post => post.nid === "100066962")
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

<!-- CLASS OF 2020 -->
<!-- <template>
  <div class="convocation-cont">
    <div v-for="post in posts" v-bind:key="post.nid">

      <img :src="post.field_ip_header_image" style="width:100%;" :alt="post.title">

      <b-container class="convocation">
        <div class="the-content one-col" v-html="post.body"></div>

      </b-container>
      <b-container>

      </b-container>
    </div>

  </div>
</template>
<script>
import Hero from '@/components/ui/Hero'
import gradexPrograms from '@/components/feature/GradexPrograms'
import gradexGradPrograms from '@/components/feature/GradexGradPrograms'
import axios from 'axios'
export default {
  name: 'classof2020Index',
  layout: 'default',
  head() {
    return {
      title: 'Congratulations to OCAD University\'s Class of 2020!'
    }
  },
  data () {
    return {
      posts: '',
      ep: 'https://live-ocad.pantheonsite.io/api/all-ip-pages',
    }
  },
  components: {
    Hero,
    gradexPrograms,
    gradexGradPrograms

  },
  created() {
    this.getAllPosts();
  },
  methods: {
    getAllPosts() {
      const slug = this.$route.fullPath
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data.filter(post => post.nid === "100065830")
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

.convocation-cont {
  color: white;
  background: black;
}

.convocation {
  text-align: left;
  margin: 2em 0 0 0;
}

.convocation-cont {
  a {
    color: white;
  }

  a:hover {
    text-decoration: none;
    color: white;
  }
}

</style> -->
