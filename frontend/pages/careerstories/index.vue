<template>
<div class="careerstories p-4">
  <b-row>
    <b-col sm="12" md="3" class="fixed">
         <ceadStoriesLogo />
         <b-button class="mb-4 d-block" to="/careerstories/about" variant="quicklink">About</b-button>
         <select class="filters d-block" v-model="nameFilter">
              <!-- changed all value to taxomony ID for accuracy -->
              <option value="all">Program Name</option>
              <option value="3235">Advertising</option>
              <!-- <option value="Art and Public Spaces">Art and Public Spaces</option>
              <option value="Art &amp; Social Change">Art &amp; Social Change</option>
              <option value="Art History">Art History</option>
              <option value="Communication Design">Communication Design</option> -->
              <option value="3355">Contemporary Art, Design &amp; New Media Art Histories (MA)</option>
              <option value="3415">Creative Writing</option>
              <option value="3241">Criticism &amp; Curatorial Practice</option>
              <option value="3361">Criticism &amp; Curatorial Practice (MFA)</option>
              <option value="3247">Cross-Disciplinary Art: Life Studies</option>
              <!-- <option value="Cross-Disciplinary Art: Publications">Cross-Disciplinary Art: Publications</option> -->
              <option value="3367">Design for Health (MDes)</option>
              <option value="3277">Drawing &amp; Painting</option>
              <option value="3265">Drawing &amp; Painting: Digital Painting and Expanded Animation</option>
              <option value="3259">Digital Futures</option>
              <option value="3373">Digital Futures (MA, MFA, MDes &amp; Graduate Diploma)</option>
              <!-- <option value="Digital Media">Digital Media</option>
              <option value="Digital &amp; Media Studies">Digital &amp; Media Studies</option>
              <option value="English">English</option>
              <option value="Entrepreneurship & Social Innovation">Entrepreneurship &amp; Social Innovation</option> -->
              <option value="3283">Environmental Design</option>
              <option value="3289">Environmental Design: Interior Design</option>
              <!-- <option value="Expanded Animation">Expanded Animation</option>
              <option value="First-Year Art (General)">First-Year Art (General)</option>
              <option value="Furniture Design">Furniture Design</option>
              <option value="Games and Play">Games and Play</option>
              <option value="Gender and Sexuality Studies">Gender and Sexuality Studies</option> -->
              <option value="3295">Graphic Design</option>
              <option value="3301">Illustration</option>
              <option value="3379">Inclusive Design (MDes) </option>
              <option value="3307">Indigenous Visual Culture</option>
              <!-- <option value="Industrial Ceramics">Industrial Ceramics</option> -->
              <option value="3313">Industrial Design</option>
              <option value="3271">Integrated Media: Digital Painting and Expanded Animation</option>
              <option value="3319">Integrated Media</option>
              <option value="3385">Interdisciplinary Master's in Art, Media and Design (MA, MDes &amp; MFA) </option>
              <option value="3325">Material Art &amp; Design</option>
              <!-- <option value="On-Screen Media">On-Screen Media</option> -->
              <option value="3331">Photography</option>
              <!-- <option value="Printmaking">Printmaking</option> -->
              <option value="25241">Printmaking and Publications</option>
              <option value="3343">Sculpture/Installation</option>
              <!-- <option value="Social Sciences">Social Sciences</option> -->
              <option value="3391">Strategic Foresight and Innovation (MDes) </option>
              <!-- <option value="Sustainability">Sustainability</option> -->
              <option value="3349">Visual and Critical Studies</option>
              <!-- <option value="Wearable Technology">Wearable Technology</option> -->
          </select>

      </b-col>
    </b-row><!--// menu //-->

    <b-row>
    <b-col sm="12" md="9" offset-md="3">
        <b-row>
         <b-col sm="6" md="3" v-for="post in filteredPosts" v-bind:key="post.nid" class="my-5">
            <p v-if="!filteredPosts.length">No story found in this program.</p>
            <a :href="`careerstories/` + post.field_slug" class="alumni">
              <img :src="post.field_profile_picture_home" :alt="post.title">
              <div class="alumni-desc">
                <p>{{ post.title }}<br>
                <span v-html="post.field_program"></span>
                <span>{{ post.field_program_year }}</span></p>
              </div>
            </a>
          </b-col>
        </b-row>
        <ceadStoriesFooter />

     </b-col>
  </b-row>
</div>
</template>

<script>
import axios from 'axios'
import ceadStoriesLogo from '@/components/ui/CEADStoriesLogo'
import ceadStoriesFooter from '@/components/ui/CEADStoriesFooter'
export default {
  name: 'careerstoriesIndex',
  layout: 'layout-blank',
  components: {
    ceadStoriesLogo,
    ceadStoriesFooter
  },
  head() {
    return {
      titleTemplate: 'Career Stories'
    }
  },
  data() {
    return {
      search: '',
      posts: [],
      nameFilter: 'all',
      epPG: 'https://live-ocad.pantheonsite.io/api/career-stories',
    }
  },
  mounted() {
    this.getAllPosts();
  },
  methods: {
    resetSearch: function(e){
      e.preventDefault()
      this.nameFilter = 'all'
    },
    getAllPosts: function(){
      const slug = this.$route.fullPath
      axios.get(this.epPG)
        .then(response => {
          this.posts = response.data
        })
        .catch(error => {
          console.log('-----error------- ' + slug);
          console.log(error)
        })
    }
  },
  computed: {
    filteredPosts: function(){
      if (this.search.length == 0){
        // accumulate filters
        const nameFilter = post =>
          (this.nameFilter == 'all') ||
          (post.program_id == this.nameFilter)
        const reducer = (accumulator, post) => {
          if (nameFilter(post))
            accumulator.push(post)
          return accumulator
        }
        return this.posts.reduce(reducer, [])
      }
      // else {
      //   // search
      //   return this.posts.filter(post => {
      //     return post.field_program.toLowerCase().includes(this.search.toLowerCase())
      //   })
      // }
    }
  } // computed
}
</script>
