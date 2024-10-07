<template>
<div>
  <popupUndergrad />

  <div v-for="post in posts" v-bind:key="post.nid" class="my-5">
    <!-- <heroVideo :variableVideo="post.field_ip_hero_landing" /> -->
    <!-- <div class="rec-title-blackout">
      <h1>OCAD UNIVERSITY</h1>
      <p>OCAD U has twelve buildings in the heart of downtown Toronto.
        The university offers an inspiring work environment for over 400 faculty and more than 4300 undergraduate and 250 graduate students.</p>
    </div> -->



    <b-container>

      <h1>Take a virtual tour of OCAD University</h1>
      <p>OCAD U has twelve buildings in the heart of downtown Toronto.
        The university offers an inspiring work environment for over 400 faculty and more than 4300 undergraduate and 250 graduate students.
      </p>

      <h2>Land Acknowledgement</h2>
      <p><em>The original owners and custodians of the land on which we are situated are the ancestral and traditional territories of the Mississaugas of the Credit, the Haudenosaunee, the Anishinaabe and the Huron-Wendat.</em></p>

      <p>&nbsp;</p>


<hr>

      <b-row class="visit-carousels">
        <b-col sm="12" md="6" lg="6">
          <visitCarousel1 />
        </b-col>
        <b-col sm="12" md="6" lg="6">
          <visitCarousel2 />
        </b-col>
        <b-col sm="12" md="6" lg="6">
          <visitCarousel3 />
        </b-col>
        <b-col sm="12" md="6" lg="6">
          <visitCarousel4 />
        </b-col>
      </b-row>


      <b-row class="my-5">
        <b-col sm="12" md="12" lg="12">

          <div class="tabs">

          		 <div class="tab">
          			 <input type="checkbox" id="visit2" name="visit">
          			 <label class="tab-label" for="visit2">Downtown Toronto Campus</label>
          			 <div class="tab-content">
          				 <p><a href="https://www.ocadu.ca/sites/default/files/documents/Viewbook-Map-2019.pdf"><img src="https://www.ocadu.ca/sites/default/files/documents/map_ss.png" alt="OCAD U Campus Map" style="width: 400px; height: auto;"/></a></p>

          				 <p>When considering studying art, design or digital media the location of your school can be a major factor. Toronto is an amazing place to live, work and study. It is the 4th largest city in North America, the most multi-cultural city in the world (which means delicious food and amazing cultural festivals), a city of neighbourhoods with something for everyone, a cultural hub with major museums and galleries, a thriving arts community, home to TIFF, fashion weeks, design industries, a hub for wearable technology and start ups, a safe city and consistently ranked as one of the best cities in the world to live in. OCAD University is connected to the city through our alumni and the partnerships we have within the creative and cultural sectors. Being located in the heart of downtown Toronto, is a huge benefit to all of OCAD’s students. </p>

                   <iframe width="560" height="315" src="https://www.youtube.com/embed/oAd7W8p50ZU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                   <iframe width="560" height="315" src="https://www.youtube.com/embed/5WSnIKUmD94" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                   <iframe width="560" height="315" src="https://www.youtube.com/embed/0S5CfkYf3Gk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          			 </div>
          		 </div>
          		 <!-- <div class="tab">
          			 <input type="checkbox" id="visit3" name="visit">
          			 <label class="tab-label" for="visit3">Shops &amp; Studios</label>
          			 <div class="tab-content">
          				 <p>We are of course a studio-based institution and believe in a hands-on approach to learning and making. Depending on your program you have access to a whole range of studios, shops and fabrication spaces including:  </p>
          				 <p>Each shop/studio includes technicians who are on hand to help and support you in the studios as guides, in addition to the collaboration and learning that happens with your peers and faculty.  </p>
          				 <p>You can also borrow tools and equipment you might need – a drill, a light kit, a projector or a soldering iron etc.</p>
          				 <p><a href="https://www.ocadu.ca/services/studios" title="Studios">Learn more</a></p>
          			 </div>
          		 </div> -->
          		 <div class="tab">
          			 <input type="checkbox" id="visit4" name="visit">
          			 <label class="tab-label" for="visit4">Meet a Student Webinar</label>
          			 <div class="tab-content">
          				 <p>Join current undergraduate OCAD U students for an informal group hang to talk about what day to day life is like at OCAD University. Our diverse group of current students representing different program areas will share their personal experiences, as well as walk you through a typical day on our campus. They are here to offer advice on how to make friends, get involved in our wide range of on-campus events and activities, and talk all of the things that you can see and do while being in Toronto! In addition to that, they are here to answer any questions you might have about our programs, courses, and shops and studios ensuring that you have as much information as you need. Talk to us, we’re here for you and excited to meet you! We hope that join us. </p>

          				 <p><a href="https://apply.ocadu.ca/portal/meetastudent" title="Studios">Register Now</a></p>
          			 </div>
          		 </div>
          		 <div class="tab">
          			 <input type="checkbox" id="visit5" name="visit">
          			 <label class="tab-label" for="visit5">Portfolio Building Events</label>
          			 <div class="tab-content">
          				 <p>We’re here to help you build a strong portfolio through online sessions, hands-on workshops with OCAD instructors and more!</p>

          				 <p><a href="https://apply.ocadu.ca/portal/portfoliobuilding" title="Studios">Register for a portfolio building opportunity of here.</a></p>
          			 </div>
          		 </div>
          		 <a class="common-btn" href="#top" title="Back to top">Back to top</a>
          	 </div>


        </b-col>
      </b-row>
      <b-row class="my-5">
        <b-col sm="12" md="4">
          <b-card
          title="100 McCaul Street virtual tour"
          img-src="https://ocadu.ca/sites/default/files/legacy_assets/content/admissions/campus-tour.jpg"
          >
          <a class="stretched-link text-dark" href="https://www.google.com/maps/@43.6531768,-79.3914028,3a,75y,186.45h,76.73t/data=!3m6!1e1!3m4!1sAF1QipN5EdK5C6GYIoE_-zBS9qXQbqR51NI3JPD7CoxM!2e10!7i13312!8i6656"></a>
          </b-card>
        </b-col>
        <b-col sm="12" md="4">
          <b-card
          title="New Fabrication Centre tour"
          img-src="https://ocadu.ca/sites/default/files/legacy_assets/content/admissions/fab-centre-thumb.jpg"
          >
          <a class="stretched-link text-dark" href="https://vimeo.com/411045090"></a>
          </b-card>
        </b-col>
        <b-col sm="12" md="4">
          <b-card
          title="Tour OCAD U in 2 minutes"
          img-src="https://ocadu.ca/sites/default/files/legacy_assets/content/admissions/2-min-tour.jpg"
          >
          <a class="stretched-link text-dark" href="https://www.youtube.com/watch?v=SEdozbSxA6w"></a>
          </b-card>
        </b-col>
      </b-row>
      <h1 class="sr-only">{{post.title}}</h1>
      <!-- <div class="the-content" v-html="post.body"></div> -->
    </b-container>
  </div>
</div>
</template>

<script>
import heroVideo from '@/components/ui/HeroVideo'
import axios from 'axios'
import popupUndergrad from '@/components/spotlight/PopupUndergrad'
import visitCarousel1 from '@/components/ui/VisitCarousel1'
import visitCarousel2 from '@/components/ui/VisitCarousel2'
import visitCarousel3 from '@/components/ui/VisitCarousel3'
import visitCarousel4 from '@/components/ui/VisitCarousel4'

export default {
  name: 'visitIndex',
  layout: 'layout',
  scrollToTop: true,
  components: {
      heroVideo,
    popupUndergrad,
    visitCarousel1,
    visitCarousel2,
    visitCarousel3,
    visitCarousel4,

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

.visit-carousels {
  .carousel-caption {
    h3 {
      // background: black;
      padding: .5em;
      font-size: 1.1em;
      line-height: 1em;
      text-shadow: 2px 2px black;
    }
  }

  .carousel-control-next {
    background-image: linear-gradient(270deg, rgba(1, 1, 1, 0.5), rgba(0, 0, 0, 0.001));
  }

  .carousel-control-prev {
    background-image: linear-gradient(90deg, rgba(1, 1, 1, 0.5), rgba(0, 0, 0, 0.001));
  }

  .carousel-control-next-icon {
    // background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='000000' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e");
    padding: 15px;
  }

  .carousel-control-prev-icon {
    // background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='000000' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
    padding: 15px;
  }

}

</style>
