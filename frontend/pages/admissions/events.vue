<template>
<div id="recruitment2020">
  <popupUndergrad />

  <div v-for="post in posts" v-bind:key="post.nid">
    <heroVideo :variableVideo="post.field_ip_hero_landing" />
    <div class="rec-title-blackout">
      <h1>ONLINE EVENTS</h1>
    </div>

    <b-container>
      <b-row class="my-5">
        <p>OCAD University’s campus is currently closed to events and tours because of the COVID-19 pandemic. Join us for an online event or <a style="text-decoration: underline" href="https://apply.ocadu.ca/register/?id=face087d-fb39-4738-af58-6946d8689097&_ga=2.25125310.562860445.1578930052-992900859.1521221276">sign up here</a> to receive the most up-to-date information about our campus events, workshops and tours.</p>

        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://www.ocadu.ca//Assets/design/features/undergrad%20-%20parents%20generic.jpg')">
            <a class="stretched-link text-dark" href="https://apply.ocadu.ca/portal/UGWebinars">
              <h3 class="text-light text-center text-uppercase">Undergraduate Online Information Sessions<br>
                <span class="text-lowercase">Meet our admissions team to get info about academic and portfolio requirements, campus life and more!</span>
              </h3>
            </a>
          </article>
        </b-col>

        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://www.ocadu.ca/sites/default/files/legacy_assets/content/admissions/creative-writing-thumb.png')">
            <a class="stretched-link text-dark" href="https://apply.ocadu.ca/portal/meetastudent">
              <h3 class="text-light text-center text-uppercase">Undergraduate Meet A Student Online Information Sessions<br>
                <span class="text-lowercase">Join current OCAD U students for online hangouts as they share their personal experience and walk you through a typical day on campus.</span></h3>
            </a>
          </article>
        </b-col>

        <!-- <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://www.ocadu.ca/sites/default/files/legacy_assets/content/admissions/fall-hub-2.png')">
            <a class="stretched-link text-dark" href="https://www.ocadu.ca/admissions/national-portfolio-day">
              <h3 class="text-light text-center text-uppercase">NATIONAL PORTFOLIO DAY<br>
                <span class="text-lowercase">Meet 1-1 with reps from art &amp; design schools across North America (including OCAD U) to get feedback on your portfolio.</span></h3>
            </a>
          </article>
        </b-col> -->

        <!-- <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://www.ocadu.ca/sites/default/files/legacy_assets/content/admissions/FB-ad-21.png')">
            <a class="stretched-link text-dark" href="https://apply.ocadu.ca/portal/ugexploreyourprogram">
              <h3 class="text-light text-center text-uppercase">Undergraduate<br/>EXPLORE YOUR PROGRAM<br>
                <span class="text-lowercase">Meet faculty, students and alumni from your program of interest.</span></h3>
            </a>
          </article>
        </b-col> -->

        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://www.ocadu.ca/sites/default/files/legacy_assets/content/admissions/ADMISSIONS-page-WORKSHOPS.png')">
            <a class="stretched-link text-dark" href="https://apply.ocadu.ca/portal/portfoliobuilding">
              <h3 class="text-light text-center text-uppercase">Undergraduate Portfolio Building Events<br>
                <span class="text-lowercase">We’re here to help you build a strong portfolio through online sessions, hands-on workshops with OCAD instructors and more.</span></h3>
            </a>
          </article>
        </b-col>

        <!-- <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://www.ocadu.ca/sites/default/files/legacy_assets/content/admissions/mexico-square.png')">
              <h3 class="text-light text-center text-uppercase">REGIONAL VISITS<br>
                <span class="text-lowercase">Coming soon! Check here to see if we’ll be attending an online event in your time zone!</span></h3>
          </article>
        </b-col> -->

        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://www.ocadu.ca/sites/default/files/legacy_assets/content/admissions/FB-ad-9.png')">
            <a class="stretched-link text-dark" href="https://apply.ocadu.ca/portal/GSWebinars">
              <h3 class="text-light text-center text-uppercase">Graduate Online Information Sessions<br>
                <span class="text-lowercase">Get more information about application deadlines, requirements, funding opportunities, and more!</span></h3>
            </a>
          </article>
        </b-col>

        <!-- <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://www.ocadu.ca/sites/default/files/legacy_assets/content/admissions/FB-ad-12.png')">
            <a class="stretched-link text-dark" href="https://apply.ocadu.ca/portal/gradmeetyourprogram">
              <h3 class="text-light text-center text-uppercase">GRAD - MEET YOUR PROGRAM<br>
                <span class="text-lowercase">Meet faculty, students and alumni from your program of interest.</span></h3>
            </a>
          </article>
        </b-col> -->

      </b-row>
      <h1 class="sr-only">{{post.title}}</h1>
      <!-- <div class="the-content" v-html="post.body"></div> -->
    </b-container>
  </div>
</div>
</template>

<script>
import heroVideo from '@/components/ui/HeroVideo'
import popupUndergrad from '@/components/spotlight/PopupUndergrad'

import axios from 'axios'
export default {
  name: 'visitIndex',
  layout: 'layout',
  scrollToTop: true,
  components: {
    heroVideo,
    popupUndergrad

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
  data() {
    return {
      posts: '',
      ep: 'https://live-ocad.pantheonsite.io/api/admissions-child-pages',
      postTitle: '',
      postMetaDesc: '',
      postKeywords: '',
      breadcrumb: 'Visit OCAD U'
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
          this.posts = response.data.filter(post => post.nid === "100055526")
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
.the-landing{
  height: 400px;
}

#recruitment2020 article.card-overlay h3 {
  font-size: 1.25em !important;
  font-weight: bold;
  font-family: 'gotham_medium';
  span {
    display: block;
    margin-top: 10px;
    font-weight: 100;
    font-family: 'gotham_light';
  }
}

@media screen and (max-width: 992px) {
  #recruitment2020 article.card-overlay h3 {
    font-size: 1.25em;

  }
}
</style>
