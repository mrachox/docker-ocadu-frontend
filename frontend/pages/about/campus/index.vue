<template>
  <div>
    <campusCarousel />
  </div>
</template>
<script>
import campusCarousel from '@/components/ui/CampusCarousel'

export default {
  name: 'aboutIndex',
  layout: 'layout-onecol',
  components: {
    campusCarousel,
  },
  head() {
    return {
      title: 'OCADU\'s Campus'

    }
  },
  data() {
    return {
      posts: '',
      ep: 'https://live-ocad.pantheonsite.io/api/about-pages',
    }
  },
  created() {
    // this.getAllPosts();
  },
  methods: {
    getAllPosts() {
      // const slug = this.$route.fullPath
      // axios.get(this.ep)
      //   .then(response => {
      //     this.posts = response.data.filter(post => post.nid === '100056931')
      //   })
      //   .catch(error => {
      //     console.log('-----error------- ' + slug);
      //     console.log(error);
      //     console.log(error.response.status);
      //     console.log(error.response.headers);
      //   })
    },
  }
}
</script>

<style>

</style>
