<template>
<div>
  <galleriesSlugSubNav />

  <div v-for="post in posts" v-bind:key="post.nid"></div>
    <div style="text-align: center;">
      <!-- <img src="https://www.ocadu.ca/sites/default/files/creative-resilience/ChancellorsExhibitHeader-01.png" style="width:100%; max-width: 1180px; margin: 0 auto;"> -->
    </div>
    <div class="container">
    <div class="the-content one-col">
    <div v-for="post in posts" v-bind:key="post.nid" v-html="post.body"></div>




</div><!-- /container -->
</div><!-- /the-content one-col -->
</div>
</template>

<script>
import galleriesSlugSubNav from "@/components/subnav/gallery/GalleriesSlugSubNav";
import axios from "axios";
export default {
  layout: "default",

  head() {
    return {
      title: this.postTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.postMetaDesc,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.postKeywords,
        },
      ],
    };
  },
  components: {
    galleriesSlugSubNav,
  },
  data() {
    return {
      posts: "",
      ep: "https://live-ocad.pantheonsite.io/api/gallery-pages",
      postTitle: "",
      postMetaDesc: "",
      postKeywords: "",
    };
  },
  created() {
    this.getAllPosts();
  },
  mounted() {
    this.$nextTick(function () {
      this.$accessibleAccordion();
    });
  },
  updated() {
    this.$nextTick(function () {
      this.$accessibleAccordion();
    });
  },
  methods: {
    getAllPosts() {
      const slug = this.$route.fullPath;
      axios
        .get(this.ep)
        .then((response) => {
          this.posts = response.data.filter((post) => post.nid === "100068055");
          this.postTitle = this.posts[0].title;
          this.postMetaDesc = this.posts[0].field_ip_meta_description;
          this.postKeywords = this.posts[0].field_ip_meta_keywords;
        })
        .catch((error) => {
          console.log("-----error------- " + slug);
          console.log(error);
        });
    },
  },
};
</script>


<style lang="scss">
:root {
  --ocadblue2: #07255a;
  --ocadred2: #eb9430;
  --ocadyellow: #dac1a9;
}

ul {
  text-align: center;
  margin: 0;
  padding: 0;
}

ul li {
  list-style-type: none;
  margin: 0 0 2rem 0;
  padding: 0;
}

[data-artwork] {
  text-align: center;
}

[data-artwork-img] img {
  max-height: 600px;
  width: auto !important;
  margin: 0 auto 2rem auto;
  // float: left;
}

[data-artist-name] {
  font-family: "gotham_bold", Arial, sans-serif;
  font-weight: 900;
  font-size: 2.25rem;
  color: var(--ocadblue2);
}

[data-artist-email] {
  font-family: "gotham_bold", Arial, sans-serif;
  font-weight: 100;
  font-size: 1rem;
}

[data-artwork-title] {
  font-family: "gotham_bold", Arial, sans-serif;
  font-style: italic;
  font-weight: 600;
  font-size: 1.5rem;
  margin-top: 1.5rem;
  color: var(--ocadred2);
}

[data-artwork-medium],
[data-artwork-year] {
  font-family: "gotham_bold", Arial, sans-serif;
  font-weight: 900;
  font-size: .85rem;
  margin: 0.75rem 0;
}

[data-artwork-details] {
  font-family: "gotham_bold", Arial, sans-serif;
  font-weight: 900;
  font-size: .85rem;
  margin-bottom: 1rem;
}

[data-artwork-description],
[data-artist-bio] {
  margin: 1rem 0;
}


.Accordion {
  text-align: left;
  max-width: 64em;
  margin: 2rem auto 0 auto !important;
}

button.Accordion-trigger {
  background-color: #DDD !important;
  color: #111 !important;
}

button.Accordion-trigger:hover {
  background-color: #111 !important;
  color: #FFF !important;
}

button[aria-expanded="true"] {
  background-color: #333 !important;
  color: #FFF !important;
}

.Accordion-panel {
  background: #333;
  color: #FFF !important;
}

.Accordion-title {
  text-align: center;
}

.Accordion-icon {
  display: none;
}

@media only screen and (max-width: 960px) {

}
</style>
