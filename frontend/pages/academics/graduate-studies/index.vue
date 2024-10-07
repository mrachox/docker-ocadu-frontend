<template>
  <div>
    <gradStudiesSubNavCustom />
    <Hero
    variableImg="/Assets/design/spotlights/spotlight-graduate-main-openhouse-pink.jpg"
    variableText="Graduate Studies"
    variableSubhead="OCAD U has a long standing tradition of contemporary thinking and practice in art and design. Our graduate degree programs offer the next generation of artists, designers and industry leaders a level of scholarship that is virtually unmatched in Canada."
    variableCredit="Photo by Angie Griffith of student work at the 2014 Graduate Studies Open House, called Grad Open."
    />

   <div class="my-5">
        <gradParentQuicklinks />
        <gradStudiesNews />

        <b-container class="my-5">
          <!-- <graduateCurrentEvents /> -->
          <graduateUpcomingEvents />
          <!-- <graduatePastEvents /> -->
        </b-container>

    </div>
    
    <b-container class="my-5">
      <b-row class="my-4">
        <b-col sm="12" md="12">
          <div v-for="post in posts" v-bind:key="post.nid">
            <h1>{{ post.title }}</h1>
            <div v-html="post.body"></div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    


    <div class="my-5">
      <gradPrograms :showDesc="true" :showCTA="true" />
    </div>
  </div>
</template>

<script>
import gradStudiesSubNavCustom from '@/components/subnav/services/GradStudiesSubNavCustom'
import gradParentQuicklinks from '@/components/quicklinks/GradParentQuicklinks'
import gradPrograms from '@/components/feature/GradPrograms'
import gradStudiesNews from '@/components/news/GradStudiesNews'
import graduateCurrentEvents from '@/components/events/GraduateCurrentEvents'
import graduateUpcomingEvents from '@/components/events/GraduateUpcomingEvents'
// import graduatePastEvents from '@/components/events/GraduatePastEvents'
import Hero from '@/components/ui/Hero'
import axios from 'axios'
export default {
  name: 'gradIndex',
  layout: 'default',
  components: {
      Hero,
      gradStudiesSubNavCustom,
      gradParentQuicklinks,
      gradPrograms,
      gradStudiesNews,
      graduateCurrentEvents,
      graduateUpcomingEvents
      // graduatePastEvents
  },

  head() {
    return {
      title: this.postTitle,
    //   meta: [{
    //     hid: 'description',
    //     name: 'description',
    //     content: this.postMetaDesc
    //   },
    //   {
    //     hid: 'keywords',
    //     name: 'keywords',
    //     content: this.postKeywords
    //   }
    // ]
    }
  },
  data() {
    return {
      posts: '',
      ep: 'https://live-ocad.pantheonsite.io/api/grad-academic-programs-pages',
      postTitle: 'Graduate Studies',
      // postMetaDesc: '',
      // postKeywords: '',
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
          this.posts = response.data.filter(post => post.nid === '100064598')
          // this.postTitle = this.posts[0].title
          // this.postMetaDesc = this.posts[0].field_ip_meta_description
          // this.postKeywords = this.posts[0].field_ip_meta_keywords
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
