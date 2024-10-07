<template>
  <div class="my-4 pl-4 pr-4">
      <h3 class="text-center my-4">News</h3>
      <b-row class="my-5 justify-content-center">
      <b-col sm="12" md="6" class="home-news-btn">
        <b-button href="https://www.ocadu.ca/news" variant="quicklink" target="_blank">More News</b-button>
      </b-col>
      <b-col sm="12" md="6" class="home-events-btn">
        <b-button href="https://www.ocadu.ca/events" variant="quicklink" target="_blank">Events</b-button>
      </b-col>
      </b-row>

      <!-- <b-row class="my-5">
        <b-card no-body class="overflow-hidden" style="min-height: 400px;" v-for="(post, index) in posts" v-if="index == 0" v-bind:key="post.nid">
          <b-row>
            <b-col v-if="post.field_image" sm="12" md="6">
              <b-card-img  :src="'https://www.ocadu.ca' + post.field_image" class="rounded-0"></b-card-img>
            </b-col>
            <div v-if="post.field_banner_image" class="col-sm-12 col-md-6">
              <div class="banner-image" v-html="post.field_banner_image"></div>
            </div>
            <b-col v-else sm="12" md="6">
              <b-card-img  src="https://www.ocadu.ca/sites/default/files/design/default.jpg" class="rounded-0"></b-card-img>
            </b-col>
            <b-col sm="12" md="6">
              <time v-html="post.field_date"></time>
              <b-card-body :title="post.title" class="pt-0"> -->
                <!-- <b-card-text v-if="post.body" v-html="truncate(post.body, 150)"></b-card-text>
                <b-card-text v-if="post.field_body" v-html="truncate(post.field_body, 150)"></b-card-text> -->
                <!-- <b-card-text v-html="truncate(post.field_summary, 150)"></b-card-text>
                <b-button class="stretched-link" :href="'https://www.ocadu.ca/node/' + post.nid" variant="more" target="_blank">Learn More</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-row> -->

      <b-row class="my-5">
        <b-col sm="12" md="6" v-for="(post) in posts" v-bind:key="post.id">
            <b-card>
                  <time>{{ post.field_date }}</time>
                  <b-card-body :title="post.title" class="pt-0">
                    <!-- <b-card-text v-if="post.body" v-html="truncate(post.body, 150)"></b-card-text>
                    <b-card-text v-if="post.field_body" v-html="truncate(post.field_body, 150)"></b-card-text> -->
                    <b-card-text v-if="post.field_summary" v-html="truncate(post.field_summary, 150)">
                    </b-card-text>
                    <b-card-text v-if="post.field_news_summary" v-html="truncate(post.field_news_summary, 150)">
                    </b-card-text>
                    <b-button class="stretched-link" :aria-label="'Learn more about '+post.title" :href="'https://www.ocadu.ca/node/' + post.nid" variant="more" target="_blank">Learn More</b-button>
                  </b-card-body>
            </b-card>
        </b-col>
      </b-row>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      posts: null,
      ep: 'https://www.ocadu.ca/api/homepage-news',
    }
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    truncate: function(value, limit) {
      if (value.length > limit) {
        value = value.substring(0, (limit - 3)) + '...';
      }
      return value
    },
    getAllPosts() {
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data
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

@media screen and (min-width: 768px) {
  .home-news-btn {
    text-align: right;
    padding-right: 0;
  }

  .home-events-btn {
    text-align: left;
  }


  .home-news-btn, .home-events-btn {
    padding-bottom: 0;
  }
}

.home-news-btn, .home-events-btn {
  padding-bottom: 1em;
}

</style>
