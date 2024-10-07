<template>
<b-container class="my-5">
  <h1 class="text-center">Program Guides</h1>
  <b-row class="my-5">
    <b-col sm="12" md="8">
      <p>Program Guides list the course requirements that you need to fulfill in order to complete your degree or certificate. Use the guide for your <strong>‘Catalog’ year</strong>, which is the year you were admitted to your program or certificate.</p>
      <p>To find your ‘Catalog’ year in myocadu.ca, select <strong>My OCAD U Records</strong>, click on <strong>Student Planning</strong> and then <strong>My Progress</strong>; your <strong>‘Catalog’ year</strong> is listed under <strong>At a Glance</strong>. If you have declared a minor, click on <strong>Show Program Notes</strong> to see your <strong>‘Minor Catalog’ year</strong>. </p>
      <ul>
        <li> <strong> If your ‘Catalog’ year is 2013 or later:</strong> select your <strong>Program Type, ‘Catalog’ year</strong> and your <strong>Program Name</strong>, then download your program guide.</li>
        <li> <strong>If your ‘Catalog’ year is earlier than 2013</strong>: access the <a href="http://coursecatalogue.ocadu.ca/historical_calendar/undergraduate/archives.html">Archived Course Calendars</a> for your <strong>‘Catalog’ year</strong>. If you were sent an Assessment of Graduation Requirements by the Office of the Registrar, you should follow that assessment instead of a program guide.</li>
      </ul>
    </b-col>
    <b-col sm="12" md="4">
      <ul class="page-nav">
        <li class="d-block w-100"><a href="http://www.ocadu.ca/services/academic-advising.htm">Academic Advising</a></li>
        <li><a href="http://coursecatalogue.ocadu.ca/historical_calendar/undergraduate/archives.html">Archived Course Calendars</a></li>
        <li><a href="http://www.ocadu.ca/services/records-and-registration.htm">Office of the Registrar</a></li>
      </ul>
    </b-col>
  </b-row>

   <b-row class="my-5">
     <b-col sm="12" md="10">
       <label for="programguidesearch" style="">Search Program Guides</label>
       <input type="text" class="form-control" id="programguidesearch" v-model="search" placeholder="Search by program name or year of admission (e.g., Advertising or 2014)."/>
     </b-col>
     <b-col sm="12" md="2">
       <b-button @click="resetSearch" variant="quicklink" class="text-uppercase d-block">RESET</b-button>
     </b-col>
   </b-row>

   <b-row>
       <!--SELECT PROGRAM TYPE-->
       <div class="col col-sm-12 col-md-3">
       <label for="program_type">Program Type</label>
       <select id="program_type" class="filters" v-model="typeFilter">
          <option value="all">Program Type</option>
          <option value="Undergraduate">Undergraduate</option>
          <option value="Minor">Minor</option>
          <option value="Postgraduate Certificate">Postgraduate Certificate</option>
          <option value="Graduate">Graduate</option>
       </select>
       </div>
       <div class="col col-sm-12 col-md-2">
       <!--SELECT CATALOG YEAR-->
       <label for="catalogue_year">Year</label>
       <select id="catalogue_year" class="filters" v-model="yearFilter">
           <option value="all">Catalog Year</option>
           <option value="2024/2025">2024/2025</option>
           <option value="2023/2024">2023/2024</option>
           <option value="2022/2023">2022/2023</option>
           <option value="2021/2022">2021/2022</option>
           <option value="2020/2021">2020/2021</option>
           <option value="2019/2020">2019/2020</option>
           <option value="2018/2019">2018/2019</option>
           <option value="2017/2018">2017/2018</option>
           <option value="2016/2017">2016/2017</option>
           <option value="2015/2016">2015/2016</option>
           <option value="2014/2015">2014/2015</option>
           <option value="2013/2014">2013/2014</option>
       </select>
       </div>
       <div class="col col-sm-12 col-md-7">
       <!--SELECT PROGRAM NAME-->
       <!-- TO DO: iterate through -->


       <label for="program_name">Program Name</label>
       <select for="program_name" class="filters" v-model="nameFilter">
           <option value="all">Program Name</option>
           <option value="Advertising">Advertising</option>
           <option value="Advertising [returning, admitted prior to 2020]">Advertising [returning, admitted prior to 2020]</option>
           <option value="Art and Public Spaces">Art and Public Spaces</option>
           <option value="Art &amp; Social Change">Art &amp; Social Change</option>
           <option value="Art History">Art History</option>
           <option value="Black Studies Design &amp; Art">Black Studies Design &amp; Art</option>
           <option value="Communication Design">Communication Design</option>
           <option value="Contemporary Art, Design and New Media Art Histories (MA)">Contemporary Art, Design &amp; New Media Art Histories (MA)</option>
           <option value="Creative Writing">Creative Writing</option>
           <option value="Creative Writing [returning, admitted prior to 2020]">Creative Writing [returning, admitted prior to 2020]</option>
           <option value="Criticism &amp; Curatorial Practice">Criticism &amp; Curatorial Practice</option>
           <option value="Criticism &amp; Curatorial Practice [returning, admitted prior to 2022]">Criticism &amp; Curatorial Practice [returning, admitted prior to 2022]</option>
           <option value="Criticism and Curatorial Practice (MFA)">Criticism &amp; Curatorial Practice (MFA)</option>
           <option value="Cross-Disciplinary Art: Life Studies">Cross-Disciplinary Art: Life Studies</option>
           <option value="Cross-Disciplinary Art: Life Studies [returning, admitted prior to 2021]">Cross-Disciplinary Art: Life Studies [returning, admitted prior to 2021]</option>
           <option value="Cross-Disciplinary Art: Publications">Cross-Disciplinary Art: Publications</option>
           <option value="Cross-Disciplinary Art: Publications [returning, admitted prior to 2020]">Cross-Disciplinary Art: Publications [returning, admitted prior to 2020]</option>
           <option value="Design for Health (MDes)">Design for Health (MDes)</option>
           <option value="Drawing &amp; Painting">Drawing &amp; Painting</option>
           <option value="Drawing &amp; Painting [returning, admitted prior to 2022]">Drawing &amp; Painting [returning, admitted prior to 2022]</option>
           <option value="Drawing &amp; Painting: Digital Painting and Expanded Animation">Drawing &amp; Painting: Digital Painting and Expanded Animation</option>
           <option value="Drawing &amp; Painting: Digital Painting and Expanded Animation [returning, admitted prior to 2022]">Drawing &amp; Painting: Digital Painting and Expanded Animation [returning, admitted prior to 2022]</option>
           <option value="Digital Futures">Digital Futures</option>
           <option value="Digital Futures [returning, admitted prior to 2020]">Digital Futures [returning, admitted prior to 2020]</option>
           <option value="Digital Futures (MA, MFA, MDes)">Digital Futures (MA, MFA, MDes)</option>
           <option value="Digital Media">Digital Media</option>
           <option value="Digital &amp; Media Studies">Digital &amp; Media Studies</option>
           <option value="English">English</option>
           <option value="Entrepreneurship & Social Innovation">Entrepreneurship &amp; Social Innovation</option>
           <option value="Environmental Design">Environmental Design</option>
           <option value="Environmental Design [returning, admitted prior to 2021]">Environmental Design [returning, admitted prior to 2021]</option>
           <option value="Environmental Design: Interior Design">Environmental Design: Interior Design</option>
           <option value="Environmental Design: Interior Design [returning, admitted prior to 2021]">Environmental Design: Interior Design [returning, admitted prior to 2021]</option>
           <option value="Expanded Animation">Expanded Animation</option>
           <option value="Experimental Animation">Experimental Animation</option>
           <option value="Experimental Animation [returning, admitted prior to 2022]">Experimental Animation [returning, admitted prior to 2022]</option>
           <option value="First-Year Art (General)">First-Year Art (General)</option>
           <option value="First-Year Art (General) [returning, admitted prior to 2020]">First-Year Art (General) [returning, admitted prior to 2020]</option>
           <option value="Furniture Design">Furniture Design</option>
           <option value="Games and Play">Games and Play</option>
           <option value="Gender and Sexuality Studies">Gender and Sexuality Studies</option>
           <option value="Graphic Design">Graphic Design</option>
           <option value="Graphic Design [returning, admitted prior to 2020]">Graphic Design [returning, admitted prior to 2020]</option>
           <option value="Illustration">Illustration</option>
           <option value="Illustration [returning, admitted prior to 2021]">Illustration [returning, admitted prior to 2021]</option>
           <option value="Inclusive Design (MDes)">Inclusive Design (MDes) </option>
           <option value="Indigenous Visual Culture">Indigenous Visual Culture</option>
           <option value="Indigenous Visual Culture [returning, admitted prior to 2020]">Indigenous Visual Culture [returning, admitted prior to 2020]</option>
           <option value="Industrial Ceramics">Industrial Ceramics</option>
           <option value="Industrial Design">Industrial Design</option>
           <option value="Industrial Design [returning, admitted prior to 2021]">Industrial Design [returning, admitted prior to 2021]</option>
           <option value="Integrated Media">Integrated Media</option>
           <option value="Integrated Media [returning, admitted prior to 2020]">Integrated Media [returning, admitted prior to 2020]</option>
           <option value="Integrated Media Life">Integrated Media Life</option>
           <option value="Integrated Media: Digital Painting and Expanded Animation">Integrated Media: Digital Painting and Expanded Animation</option>
           <option value="Integrated Media: Digital Painting and Expanded Animation [returning, admitted prior to 2022]">Integrated Media: Digital Painting and Expanded Animation [returning, admitted prior to 2022]</option>
           <option value="Interdisciplinary Master's in Art, Media and Design (MA, MFA &amp; MDes)">Interdisciplinary Master's in Art, Media and Design (MA, MDes &amp; MFA) </option>
           <option value="Life Studies">Life Studies</option>
           <option value="Material Art &amp; Design">Material Art &amp; Design</option>
           <option value="On-Screen Media">On-Screen Media</option>
           <option value="Photography">Photography</option>
           <option value="Photography [returning, admitted prior to 2021]">Photography [returning, admitted prior to 2021]</option>
           <option value="Printmaking">Printmaking</option>
           <option value="Printmaking [returning, admitted prior to 2020]">Printmaking [returning, admitted prior to 2020]</option>
           <option value="Printmaking and Publications">Printmaking &amp; Publications</option>
           <option value="Printmaking and Publications [returning, admitted prior to 2020]">Printmaking &amp; Publications [returning, admitted prior to 2020]</option>
           <option value="Science">Science</option>
           <option value="Sculpture/Installation">Sculpture/Installation</option>
           <option value="Sculpture/Installation [returning, admitted prior to 2021]">Sculpture/Installation [returning, admitted prior to 2021]</option>
           <option value="Social Sciences">Social Sciences</option>
           <option value="Strategic Foresight and Innovation (MDes)">Strategic Foresight &amp; Innovation (MDes) </option>
           <option value="Sustainability">Sustainability</option>
           <option value="Visual and Critical Studies">Visual and Critical Studies</option>
           <option value="Wearable Technology">Wearable Technology</option>
       </select>
       </div>
  </b-row>

  <div v-for="post in filteredPosts" v-bind:key="post.nid">
    <b-row align-h="between" class="my-4">
      <b-col sm="6" md="3">
        {{ post.field_program_type }}
      </b-col>
      <b-col sm="6" md="2">
        {{ post.field_catalog_year }}
      </b-col>
      <b-col sm="6" md="5" v-html="post.field_program"></b-col>
      <b-col sm="6" md="2" align-self="end">
        <b-button :href="post.field_document" variant="more" class="text-uppercase d-block" :aria-label='"Download "+post.field_program+" Program Guide PDF"'>Download PDF</b-button>
      </b-col>
    </b-row>
  </div>
</b-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'pgIndex',
  layout: 'layout-onecol-services',
  head() {
    return {
      titleTemplate: 'Program Guides'
    }
  },
  data() {
    return {
      search: '',
      posts: [],
      typeFilter: 'all',
      yearFilter: 'all',
      nameFilter: 'all',
      epPG: 'https://live-ocad.pantheonsite.io/api/program-guides',
    }
  },
  mounted() {
    this.getAllPosts();
  },
  methods: {
    resetSearch: function(e){
      e.preventDefault()
      this.typeFilter = 'all',
      this.yearFilter = 'all',
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
        const typeFilter = post =>
          (this.typeFilter == 'all') ||
          (post.field_program_type === this.typeFilter)
        const yearFilter = post =>
          (this.yearFilter == 'all') ||
          (post.field_catalog_year === this.yearFilter)
        const nameFilter = post =>
          (this.nameFilter == 'all') ||
          (post.title.includes(this.nameFilter))
        const reducer = (accumulator, post) => {
          if (typeFilter(post) && yearFilter(post) && nameFilter(post))
            accumulator.push(post)
          return accumulator
        }
        return this.posts.reduce(reducer, [])
      } else {
        // search
        return this.posts.filter(post => {
          return post.field_program_type.toLowerCase().includes(this.search.toLowerCase()) ||
                 post.field_catalog_year.toLowerCase().includes(this.search.toLowerCase()) ||
                 post.title.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    }
  } // computed
}
</script>

<style>

</style>
