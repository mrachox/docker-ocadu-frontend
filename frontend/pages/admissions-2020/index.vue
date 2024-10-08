<template>
<div>
  <div class="py-5">
    <!-- <admLandingSpotlight /> -->
    <h1 class="text-center mb-4">UNDERGRADUATE ADMISSIONS</h1>

    <div class="tabs">
      <div class="tab"><input id="adm1" name="adm1" type="checkbox"> <label class="tab-label" for="adm1">WHAT DO YOU WANT TO DO?</label>
        <div class="tab-content">
          <b-row>
            <b-col class="my-4" sm="12" md="4" v-for="post in segment_posts" v-bind:key="post.nid">
              <article class="card-overlay w-100" :style="{ backgroundImage: 'url(https://www.ocadu.ca/' + post.field_ip_auxnav + ')' }">
                <nuxt-link :to="'/admissions/' + post.field_slug" class="stretched-link">
                  <h3 class="text-light text-center">{{ post.title }}</h3>
                </nuxt-link>
              </article>
            </b-col>
          </b-row>
        </div>
      </div>
      <div class="tab"><input id="adm2" name="adm2" type="checkbox"> <label class="tab-label" for="adm2">EXPLORE OUR UNDERGRADUATE PROGRAMS</label>
        <div class="tab-content">
          <undergradPrograms :showDesc="false" :showCTA="false" />
        </div>
      </div>

      <div class="tab"><input id="adm3" name="adm3" type="checkbox"> <label class="tab-label" for="adm3">HOW TO APPLY</label>
        <div class="tab-content">
          <p><a href="https://www.ocadu.ca/admissions/admission-requirements">Academic requirements</a></p>
          <p><a href="https://www.ocadu.ca/admissions/transfer-pathways">Transfer to OCAD U</a></p>
          <p><a href="https://www.ocadu.ca/admissions/admission-requirements">International academic requirements</a></p>
          <p><a href="https://www.ocadu.ca/admissions/admission-requirements/english-proficiency">English language requirements</a></p>
        </div>
      </div>

      <div class="tab">
        <label class="no tab-label" for="adm4"><a target="_blank" href="https://www.ocadu.ca/admissions/preparing-a-portfolio">HOW TO PREPARE A PORTFOLIO</a></label>
      </div>

    <div class="tab">
      <label class="no tab-label" for="adm5"><a target="_blank" href="https://www.ocadu.ca/admissions/tuition-and-funding">TUITION AND FUNDING YOUR EDUCATION</a></label>
    </div>

    <div class="tab">
      <label class="no tab-label" for="adm6"><a target="_blank" href="https://www.ocadu.ca/admissions/housing-information">HOUSING</a></label>
    </div>

    <div class="tab">
      <label class="no tab-label" for="adm7"><a target="_blank" href="https://www.ocadu.ca/admissions/faqs">FAQs</a></label>
    </div>

    <div class="tab">
      <label class="no tab-label" for="adm8"><a target="_blank" href="https://www.ocadu.ca/admissions/info-for-parents">INFO FOR PARENTS</a></label>
    </div>

    <div class="tab">
      <label class="no tab-label" for="adm9"><a target="_blank" href="https://www.ocadu.ca/admissions/teachers-and-counsellors">INFO FOR TEACHERS AND COUNSELLORS</a></label>
    </div>
  </div>

  <a class="knockout d-block p-4" href="https://apply.ocadu.ca/register/?id=face087d-fb39-4738-af58-6946d8689097&_ga=2.265185803.562860445.1578930052-992900859.1521221276">
    <b-row class="text-light">
      <b-col sm="12" md="6" align-self="center">
        <h4 class="text-center text-uppercase">sign up!</h4>
      </b-col>
      <b-col sm="12" md="6">
        <p class="larger">Get dates, deadlines, and news sent to your email - you could win $500 from Above Ground Art Supplies!</p>
      </b-col>
    </b-row>
  </a>

  </div>
</div>
</template>

<script>
// import admLandingSpotlight from '@/components/spotlight/AdmLandingSpotlight'
import undergradPrograms from '@/components/feature/UndergradProgramsNew'

import axios from 'axios'
export default {
  name: 'admissionsIndex',
  layout: 'layout-admissions',
  scrollToTop: true,
  components: {
    // admLandingSpotlight,
    undergradPrograms,

  },
  head() {
    return {
      title: 'Undergraduate Admissions',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Design a career doing what you love at Canada\'s biggest art and design university.'
      }]
    }
  },
  data() {
    return {
      segment_posts: '',
      ep: 'https://live-ocad.pantheonsite.io/api/admissions-segment-pages',
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
          this.segment_posts = response.data
        })
        .catch(error => {
          console.log('-----error------- ' + slug);
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        })
    },
  }
}
</script>

<style lang="scss">
.tab-label:hover a {
  color: white;
}

.no.tab-label::after{
  content: "" !important;
}

.tab-content{
  p{
    a{
      text-decoration: underline;
    }
  }
}

.knockout {
    background: $secondary;
    &:hover {
        background: darken($secondary, 20%);
        text-decoration: none;
    }
}

</style>
