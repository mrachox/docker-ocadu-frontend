<template>
<div>
    <b-container v-for="post in posts" v-bind:key="post.field_slug">
      <Fall2020Quicklinks />
      <h1 class="sr-only">{{post.title}}</h1>
      <div class="the-content one-col" v-html="post.body"></div>
    </b-container>
    <b-container class="mb-5">
      <b-row>
        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://ocadu.ca/sites/default/files/students/fall-2020/fall%20hub%201.jpg');">
            <a href="https://www.ocadu.ca/services/centre-for-emerging-artists-and-designers/advising" target="_blank" class="stretched-link">
              <h3 class="text-light text-center">Career Advising</h3>
            </a>
          </article>
        </b-col>
        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://ocadu.ca/sites/default/files/students/fall-2020/fall%20hub%202.jpg');">
            <a href="https://www.ocadu.ca/services/centre-for-emerging-artists-and-designers/experiential-learning/" target="_blank" class="stretched-link">
              <h3 class="text-light text-center">Experiential Learning, Work Placements and Internships</h3>
            </a>
          </article>
        </b-col>
        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://ocadu.ca/sites/default/files/students/fall-2020/fall%20hub%203.jpg');">
            <a href="https://www.ocadu.ca/services/financial-matters" target="_blank" class="stretched-link">
              <h3 class="text-light text-center">Financial Aid, Budgeting, Emergency Bursaries, Scholarships & Awards</h3>
            </a>
          </article>
        </b-col>
        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://ocadu.ca/sites/default/files/students/fall-2020/fall%20hub%204.jpg');">
            <a href="https://www.ocadu.ca/services/indigenous-students" target="_blank" class="stretched-link">
              <h3 class="text-light text-center">Indigenous Student Centre</h3>
            </a>
          </article>
        </b-col>
        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://ocadu.ca/sites/default/files/students/fall-2020/fall%20hub%205.jpg');">
            <a href="https://www.ocadu.ca/services/international-students" target="_blank" class="stretched-link">
              <h3 class="text-light text-center">International Student Services</h3>
            </a>
          </article>
        </b-col>
        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://ocadu.ca/sites/default/files/students/fall-2020/fall%20hub%206.jpg');">
            <a href="https://www.ocadu.ca/itsupport" target="_blank" class="stretched-link">
              <h3 class="text-light text-center">IT, Laptop Program, Helpdesk</h3>
            </a>
          </article>
        </b-col>
        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://ocadu.ca/sites/default/files/students/fall-2020/fall%20hub%207.jpg');">
            <a href="https://www.ocadu.ca/itsupport" target="_blank" class="stretched-link">
              <h3 class="text-light text-center">Book One-on-one Support With IT</h3>
            </a>
          </article>
        </b-col>
        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://ocadu.ca/sites/default/files/students/fall-2020/fall%20hub%208.jpg');">
            <a href="https://www.ocadu.ca/services/library" target="_blank" class="stretched-link">
              <h3 class="text-light text-center">Library Digital Collection</h3>
            </a>
          </article>
        </b-col>
        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://ocadu.ca/sites/default/files/students/fall-2020/fall%20hub%209.jpg');">
            <a href="https://docs.google.com/document/d/1mYGErexYcfxERkWmcUrQsAUwFJBCCIrYcCAjOouRwAY/edit?fbclid=IwAR2QAHo40F4tw6sjuf317QjcaNUOvg9aIta9z3pJAk202dF3En5tBFP08ps" target="_blank" class="stretched-link">
              <h3 class="text-light text-center">Student Union Resource Toolkit</h3>
            </a>
          </article>
        </b-col>
        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://ocadu.ca/sites/default/files/students/fall-2020/fall%20hub%2010.jpg');">
            <a href="https://www.ocadu.ca/services/student-union" target="_blank" class="stretched-link">
              <h3 class="text-light text-center">Student Union</h3>
            </a>
          </article>
        </b-col>
        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://ocadu.ca/sites/default/files/students/fall-2020/fall%20hub%2011.jpg');">
            <a href="https://www.ocadu.ca/services/odesi" target="_blank" class="stretched-link">
              <h3 class="text-light text-center">Human Rights, Equity and Sustainability Matters</h3>
            </a>
          </article>
        </b-col>
        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://ocadu.ca/sites/default/files/students/fall-2020/fall%20hub%2012.jpg');">
            <a href="https://www.ocadu.ca/services/records-and-registration" target="_blank" class="stretched-link">
              <h3 class="text-light text-center">Course Registration, Account Holds, Forms and Documents, Petitions, Graduation Assessments</h3>
            </a>
          </article>
        </b-col>
        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://ocadu.ca/sites/default/files/students/fall-2020/fall%20hub%2013.jpg');">
            <a href="https://www.ocadu.ca/services/academic-advising" target="_blank" class="stretched-link">
              <h3 class="text-light text-center">Academic Planning, Education Pathway, Program Requirements and Course Selection</h3>
            </a>
          </article>
        </b-col>
        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://ocadu.ca/sites/default/files/students/fall-2020/fall%20hub%2014.jpg');">
            <a href="https://www.ocadu.ca/services/writing-and-learning-centre/appointment-bookings-wlc" target="_blank" class="stretched-link">
              <h3 class="text-light text-center">Make a Tutoring Appointment</h3>
            </a>
          </article>
        </b-col>
        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://ocadu.ca/sites/default/files/students/fall-2020/fall%20hub%2016.jpg');">
            <a href="https://www.ocadu.ca/services/writing-and-learning-centre" target="_blank" class="stretched-link">
              <h3 class="text-light text-center">Writing and Learning, English Language Learning, Time Management, Studying</h3>
            </a>
          </article>
        </b-col>
        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://ocadu.ca/sites/default/files/students/fall-2020/fall%20hub%2016.jpg');">
            <a href="https://www.ocadu.ca/services/health-and-wellness" target="_blank" class="stretched-link">
              <h3 class="text-light text-center">Student Accessibility, Counselling, Sexual Violence, Health Programs & Medical Appointments</h3>
            </a>
          </article>
        </b-col>
        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://ocadu.ca/sites/default/files/students/fall-2020/fall%20hub%2016.jpg');">
            <a href="https://www.ocadu.ca/services/financial-matters/tuition-and-fees" target="_blank" class="stretched-link">
              <h3 class="text-light text-center">Tuition and Fees Payments</h3>
            </a>
          </article>
        </b-col>
        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://ocadu.ca/sites/default/files/students/fall-2020/fall%20hub%2016.jpg');">
            <a href="https://www.ocadu.ca/research" target="_blank" class="stretched-link">
              <h3 class="text-light text-center">Research</h3>
            </a>
          </article>
        </b-col>
        <b-col class="my-4" sm="12" md="6">
          <article class="card-overlay w-100" style="background-image: url('https://www.ocadu.ca/sites/default/files/assets/media/studio-services.jpg');">
            <a href="http://bit.ly/OCADU-Support-with-Studio" target="_blank" class="stretched-link">
              <h3 class="text-light text-center">Book one-on-one support with Studio Services</h3>
            </a>
          </article>
        </b-col>
      </b-row>
    </b-container>
</div>
</template>
<script>
import Fall2020Quicklinks from '@/components/quicklinks/Fall2020Quicklinks'
import axios from 'axios'
export default {
    name: 'studentPolSecondSlug',
    layout: 'default',
    components: {
      Fall2020Quicklinks,
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
  data () {
    return {
      posts: '',
      ep: 'https://live-ocad.pantheonsite.io/api/students-pages',
      postTitle: '',
      postMetaDesc: '',
      postKeywords: '',
    }
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    getAllPosts() {
      const slug1 = this.$route.path.split("/")[2]
      const slug2 = this.$route.path.split("/")[3]
      const slug = slug1 + '/' + slug2
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data.filter(post => post.field_slug.includes(slug))
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
<style lang="scss" scoped>

</style>
