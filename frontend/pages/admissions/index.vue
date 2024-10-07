<template>
  <div>
    <div class="py-3">
      <!-- <b-card-group>
        <b-card
          header="UNDERGRADUATE ADMISSIONS"
          img-src="https://www.ocadu.ca/sites/default/files/assets/design/UNDERGRAD_ADMISSIONS.jpg"
          style="padding:10px; border: none !important;"
        >
        <b-button
            class="stretched-link text-dark"
            href="/admissions/undergraduate"
            variant="more"
            >Learn More</b-button
          >
        </b-card>
        <b-card
          header="GRADUATE ADMISSIONS"
          img-src="https://www.ocadu.ca/sites/default/files/assets/design/GRAD_ADMISSIONS.jpg"
          style="padding: 10px; border: none !important;"
        >
          <b-button
            class="stretched-link text-dark"
            href="/admissions/graduate"
            variant="more"
            >Learn More</b-button
          >
        </b-card> 
              </b-card-group>

        -->
      <div class="cards">
        <div class="admissions-card">
          <a href="/admissions/undergraduate">
            <img
              src="https://www.ocadu.ca/sites/default/files/assets/design/button-undergrad.jpg"
              alt="A photo of an art student painting on a canvas."
            />
          </a>
        </div>
        <div class="admissions-card">
          <a href="/admissions/graduate">
            <img
              src="https://www.ocadu.ca/sites/default/files/assets/design/button-grad.jpg"
              alt="Three students gathered in a circle discussing something."
          />
          </a>
        </div>
      </div>
      <br>
      <div class="videos">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/Uanvv9Rupwc" frameborder="0" allowfullscreen></iframe>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/fmEYnDlyf24" frameborder="0" allowfullscreen></iframe>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/XGAyByKl5N0" frameborder="0" allowfullscreen></iframe>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/yv_Lt_e9pPo" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
// import admLandingSpotlight from "@/components/spotlight/AdmLandingSpotlight";

import axios from "axios";
export default {
  name: "admissionsIndex",
  layout: "layout-admissions",
  scrollToTop: true,
  // components: {
  //   admLandingSpotlight,
  // },
  head() {
    return {
      title: "OCADU Admissions",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Design a career doing what you love at Canada's biggest art and design university.",
        },
      ],
    };
  },
  data() {
    return {
      segment_posts: "",
      ep: "https://live-ocad.pantheonsite.io/api/admissions-segment-pages",
    };
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    getAllPosts() {
      const slug = this.$route.fullPath;
      axios
        .get(this.ep)
        .then((response) => {
          this.segment_posts = response.data;
        })
        .catch((error) => {
          console.log("-----error------- " + slug);
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        });
    },
  },
};
</script>

<style lang="scss" scoped>

.cards {
  display: flex;
}


.videos {
  text-align: center;
  
  iframe {
    display: inline;
    box-sizing: border-box;
    width: 48%;
    margin: 0.8%;
  }
}
.admissions-card {

  a {
    display: block;
    text-decoration: none;

    img {
      width: 100%;
      height: auto;
    }

    h5 {
      border: 1px solid #000;
      padding: 8px;
    }

    &:hover {
      h5 {
        background: #000;
        color: #fff;
      }
    }
  }
}

@media only screen and (max-width:640px) {
  .cards {
    display: block;
  }

  .videos {
    iframe {
      display: block;
      width: 100%;
    }
  }
}
</style>
