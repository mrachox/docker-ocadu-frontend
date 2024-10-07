<template>
<b-container class="my-5">
  <h1 class="text-center">Dates &amp; Deadlines</h1>
  <b-row class="my-5" v-for="post in pdfDDs" v-bind:key="post.nid">
    <div style="width:100%" v-html="post.body"></div>
  </b-row>

   <!-- <b-row class="my-5">
     <b-col sm="12" md="10">
       <input type="text" class="form-control" v-model="search" placeholder="Search"/>
     </b-col>
     <b-col sm="12" md="2">
       <b-button @click="resetSearch" variant="quicklink" class="text-uppercase d-block">RESET</b-button>
     </b-col>
   </b-row> -->

   <!-- <b-row> -->
       <!--SELECT YEAR-->
       <!-- <select class="filters col col-sm-12 col-md-4" v-model="yearFilter" @click="resetSearch">
           <option value="all">All Years</option>
           <option value="2022">2022</option>
           <option value="2021">2021</option>
           <option value="2020">2020</option>
           <option value="2019">2019</option>
           <option value="2018">2018</option>
           <option value="2017">2017</option>
           <option value="2016">2016</option>
       </select> -->

       <!--SELECT MONTH-->
       <!-- <select class="filters col col-sm-12 col-md-4" v-model="monthFilter" @click="resetSearch">
           <option value="all">All Months</option>
           <option value="01">January</option>
           <option value="02">February</option>
           <option value="03">March</option>
           <option value="04">April</option>
           <option value="05">May</option>
           <option value="06">June</option>
           <option value="07">July</option>
           <option value="08">August</option>
           <option value="09">September</option>
           <option value="10">October</option>
           <option value="11">November</option>
           <option value="12">December</option>
       </select> -->

       <!--SELECT CATEGORIES-->
       <!-- <select class="filters col col-sm-12 col-md-4" v-model="typeFilter" @click="resetSearch">
           <option value="all">All Categories</option>
           <option value="Fee Payment Deadline">Fee Payment Deadline</option>
           <option value="Grade Appeal/Change Deadline">Grade Appeal/Change Deadline</option>
           <option value="Holiday/University Closure">Holiday/University Closure</option>
           <option value="Important Term Date">Important Term Date</option>
           <option value="Submission Deadline">Submission Deadline</option>
           <option value="Student Feedback Deadline">Student Feedback Deadline</option>
           <option value="Study Week">Study Week</option>
           <option value="Registration Deadline/Period">Registration Deadline/Period</option>
           <option value="Waitlists">Waitlists</option>
           <option value="Withdrawal Deadline/Period">Withdrawal Deadline/Period</option>
       </select> -->

  <!-- </b-row> -->

  <!-- <div v-for="post in filteredPosts" v-bind:key="post.nid">
    <b-row align-h="between" class="my-5">
      <b-col sm="12" md="2">
        <h4>{{ post.field_start_date.slice(0, 4) }}</h4>
      </b-col>
      <b-col sm="12" md="10">
        <h6>{{ post.field_start_date.replace('-', '/').replace('-', '/').split(' ')[0] }}</h6>
        <div class="mt-2" v-html="post.body"></div>
      </b-col>
    </b-row>
    <hr>
  </div> -->
</b-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ddIndex',
  layout: 'layout-onecol',
  head() {
    return {
      title: 'Important Dates & Deadlines',
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
      search: '',
      pdfDDs: '',
      posts: [],
      typeFilter: 'all',
      yearFilter: '2020',
      monthFilter: 'all',
      // ep: 'https://live-ocad.pantheonsite.io/api/dates-and-deadlines',
      epPDF: 'https://live-ocad.pantheonsite.io/api/students-pages',
      postTitle: '',
      postMetaDesc: '',
      postKeywords: '',
    }
  },
  mounted() {
    // this.getAllPosts();
    this.getPDF();
  },
  methods: {
    resetSearch: function(e){
      e.preventDefault()
      this.search = ""
    },
    // getAllPosts: function(){
    //   const slug = this.$route.fullPath
    //   axios.get(this.ep)
    //     .then(response => {
    //       this.posts = response.data
    //     })
    //     .catch(error => {
    //       console.log('-----error------- ' + slug);
    //       console.log(error)
    //     })
    // },
    getPDF() {
      axios.get(this.epPDF)
        .then(response => {
          // console.log(response)
          this.pdfDDs = response.data.filter(post => post.nid === '100065352')
          this.postTitle = this.posts[0].title
          this.postMetaDesc = this.posts[0].field_ip_meta_description
          this.postKeywords = this.posts[0].field_ip_meta_keywords
        })
        .catch(error => {
          console.log('-----error------- ' + slug);
          console.log(error);
        })
    },
  },
  // computed: {
  //
  //   filteredPosts: function(){
  //     if (this.search.length == 0){
  //       const typeFilter = post =>
  //         (this.typeFilter == 'all') ||
  //         (post.field_date_deadline === this.typeFilter)
  //       const yearFilter = post =>
  //         (this.yearFilter == 'all') ||
  //         (post.field_start_date.slice(0, 4) === this.yearFilter)
  //       const monthFilter = post =>
  //         (this.monthFilter == 'all') ||
  //         (post.field_start_date.slice(5, 7) === this.monthFilter)
  //       const reducer = (accumulator, post) => {
  //         if (typeFilter(post) && yearFilter(post) && monthFilter(post))
  //           accumulator.push(post)
  //         return accumulator
  //       }
  //       return this.posts.reduce(reducer, [])
  //     } else {
  //       // search
  //       return this.posts.filter(post => {
  //         return post.field_date_deadline.toLowerCase().includes(this.search.toLowerCase()) ||
  //                post.field_start_date.toLowerCase().includes(this.search.toLowerCase()) ||
  //                post.title.toLowerCase().includes(this.search.toLowerCase())
  //       })
  //     }
  //   }
  // } // computed
}
</script>

<style>

</style>
