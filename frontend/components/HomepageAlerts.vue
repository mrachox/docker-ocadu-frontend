<template>
  <div class="component--alerts">
    <!-- <b-alert variant="light" show style="margin-bottom: 0"> -->
      <!-- <h6 class="text-center"><a href="/about/coronavirus"><i class="fa fa-bullhorn" aria-hidden="true"></i> Coronavirus/COVID-19 Updates</a></h6> -->
    <!-- </b-alert> -->
    <!-- <Corona /> -->
    <div v-for="post in posts" v-bind:key="post.id" v-if="post.field_alert_type === 'Serious Alert (small red banner on all sites)'">
      <b-alert  variant="danger" dismissible show>
        <p><small class="text-muted" v-html="post.originalDate"></small></p>
        <div v-html="post.title"></div> <a href="https://ocadu.ca/alerts/">View Alert</a>
      </b-alert>
    </div>
  </div>
</template>

<script>
// import Corona from '@/components/ui/Corona'
import axios from 'axios'
export default {
  data () {
    return {
      posts: null,
      epEA: 'https://www.ocadu.ca/api/emergency-alerts',
    }
  },
  components: {
    // Corona
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    getAllPosts() {
      const slug = this.$route.fullPath
      axios.get(this.epEA)
        .then(response => {
          this.posts = response.data;
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
.alert-danger {
  margin-bottom: 0;
}
.component--alerts {
  .text-center {
    font-family: 'gotham', sans-serif;
  }

}


</style>
