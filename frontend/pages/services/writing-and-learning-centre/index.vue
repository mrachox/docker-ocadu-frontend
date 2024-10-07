<template>
  <div>
      <wlcSubnav />
      <div v-for="post in posts" v-bind:key="post.nid" id="wlc">
        <Hero
        :variableImg="post.field_ip_header_image"
        :variableText="post.title"
        :variableSubhead="post.field_subtitle"
        :variableCredit="post.field_credit"
        />
        <wlcQuicklinksCustom />
        <b-container>
            <div class="the-content one-col" v-html="post.body"></div>
        </b-container>
      </div>

  </div>
</template>

<script>
import wlcSubnav from '@/components/subnav/services/WLCSubNav'
import wlcQuicklinksCustom from '@/components/quicklinks/WLCQuicklinksCustom'
import Hero from '@/components/ui/Hero'
import axios from 'axios'
export default {
  name: 'wlcFirstIndex',
  layout: 'default-services',
    components: {
      Hero,
      wlcQuicklinksCustom,
      wlcSubnav
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
        ep: 'https://live-ocad.pantheonsite.io/api/wlc-pages',
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
          this.posts = response.data.filter(post => post.nid === "100064918")
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
#wlc .the-content .grid-row article {
  margin-bottom: 10px;
}

#wlc article {
  a.text-dark:hover {
    color: white !important
  }
}
</style>
