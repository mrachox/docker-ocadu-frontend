<template>
<div>
  <popupUndergrad />

  <!-- <programsSubNav /> -->
  <div class="my-5">
    <h1 class="text-center my-4">Undergraduate Programs</h1>
    <b-container>
      <b-row>
        <b-col sm="12" md="6" lg="3" v-for="post in posts" v-bind:key="post.nid">
          <b-link :href="'/admissions' + post.field_slug" :title="post.title">
            <b-card :title="post.title" :img-src="post.field_ip_thumbnail" img-alt="Image" img-top tag="article">
            </b-card>
          </b-link>
        </b-col>
      </b-row>
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
    </b-container>
    <gradPrograms :showDesc="false" :showCTA="false" />
    <b-container>
    <a class="knockout d-block p-4" href="https://apply.ocadu.ca/register/?id=729431c8-7ce3-45a3-b176-9630056f2bb5">
      <b-row class="text-light">
        <b-col sm="12" md="6" align-self="center">
          <h4 class="text-center text-uppercase">sign up!</h4>
        </b-col>
        <b-col sm="12" md="6">
          <p class="larger">Get dates, deadlines, and news sent to your email - you could win $500 from Above Ground Art Supplies!</p>
        </b-col>
      </b-row>
    </a>
    </b-container>
  </div>
</div>
</template>

<script>
import programsSubNav from '@/components/subnav/admissions/ProgramsSubNav'
import gradPrograms from '@/components/feature/GradPrograms'
import popupUndergrad from '@/components/spotlight/PopupUndergrad'

import axios from 'axios'
export default {
  name: 'admProgramsIndex',
  created() {
    this.$root.setLayout('default')
  },
  components: {
    gradPrograms,
    programsSubNav,
    popupUndergrad

  },
  head() {
    let programs = this.response
    return {
      title: 'Programs',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Design a career doing what you love at Canada\'s biggest art and design university.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'creative writing, writing program, writing BFA, BFA writing, BFA creative writing, creative writing university, creative writing programs Toronto, creative writing programs Canada, creative writing class, Indigenous art, Indigenous design, Indigenous, art, Indigenous art program, Indigenous art program Canada, Indigenous art Toronto, First Nations art, Metis art, Inuit art, game dev, game dev program, VR, apps, digital futures, game dev university, digital programs, game development, gamer program, game development class, learn game development, art history, university art history, art history degree, art history Canada, art history Toronto, study art history, graphic design, design, graphic design program, graphic design university, graphic design Toronto, graphic design university program, jewellery, textiles, fashion design, ceramics, pottery, pottery class Toronto jewellery design Toronto, fashion university, fashion program Toronto, pottery university, illustration, illustration program, illustration Toronto, illustration university, study illustration, illustration class, illustrate, illustration university programs, advertising, Advertising degree, study advertising, branding, copywriter, advertising class, Advertising university, industrial design, industrial design degree, industrial design Ontario, industrial design program, industrial design university, product design program, environmental design, environmental design program, environmental design university, architecture university, architecture Toronto, architecture programs Toronto, interior design, interior design Toronto, interior design university programs, study interior design, interior design class, art criticism, study art criticism, curatorial practice, become a curator, curator degree, art curator, study art curation, art curation, art critic, study art critic, art history, study art history, art history programs, art history degree, art history Toronto, life studies, medical illustration, science art art, medical illustration program, medical illustration university, medical illustration Toronto, prosthetic design, study prosthetic design, publishing, publications, study publications, publications Toronto, zines, zine, study publications, publications university, animation, study animation, animation university, animation Toronto, digital painting, study digital painting, learn animation, animation programs, animation class, painting, painting degree, painting class Toronto, best painting program Canada, painting Canadian, study painting, art class, film school Toronto, Integrated Media, study filmmaking, film class Toronto, video class, film school Canada, film university degree, photography, study photography, photography university canada, photography Toronto, photography class toronto, become photographer,printmaking, printmaking degree, study printmaking, printmaking toronto, printmaking class toronto, printmaking university, sculpture programs, sculpture/installation, sculpture and installation, learn to make sculptures, sculpture university, sculpture program, sculpture degree, sculpture toronto'
      }
    ]
    }
  },
  scrollToTop: true,
  data() {
    return {
      posts: '',
      ep: 'https://live-ocad.pantheonsite.io/api/admissions-programs',
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

<style lang="scss" scoped>
.knockout {
    background: $secondary;
    &:hover {
        background: darken($secondary, 20%);
        text-decoration: none;
    }
}

</style>
