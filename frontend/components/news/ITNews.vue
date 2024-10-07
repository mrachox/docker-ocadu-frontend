<template>
  <div class="my-4">
      <h3>IT News</h3>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      posts: null
    }
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    getAllPosts() {

    },
  }
}
</script>

<style lang="scss">

</style>
