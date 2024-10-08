<template>
  <div class="component--subnav">
    <div id="top">
        <ul class="sub-nav">
          <!-- <li v-for="post in posts" v-bind:key="post.field_slug">
            <nuxt-link :to="'/services/records-and-registration/' + post.field_slug">{{ post.title }}</nuxt-link>
          </li> -->
          <li>
            <nuxt-link to="/services/records-and-registration/archived-course-calendars">Academic Calendar Archive</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/services/records-and-registration/degree-completion">Degree Completion</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/services/records-and-registration/forms">Forms and Requesting Documents</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/services/records-and-registration/graduation-and-convocation">Graduation &amp; Convocation</nuxt-link>
          </li>
          <!-- <li>
            <nuxt-link to="/services/records-and-registration/graduation-and-convocation-faqs/">Graduation &amp; Convocation FAQs</nuxt-link>
          </li> -->
          <li>
            <nuxt-link to="/academics/minors/faqs">Minor FAQs</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/services/records-and-registration/official-communications">Official Communications</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/services/records-and-registration/mycreds">Official Documents</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/services/records-and-registration/plan-courses-prepare-to-register">Plan Courses and Prepare to Register</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/services/records-and-registration/postgraduate-certificate">Postgraduate Certificate</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/services/records-and-registration/program-guides">Program Guides</nuxt-link>
          </li>
          <!-- <li>
            <nuxt-link to="/services/records-and-registration/records-and-registration-faqs">Records &amp; Registration FAQs</nuxt-link>
          </li> -->
          <li>
            <nuxt-link to="/services/records-and-registration/records-and-confidentiality">Records and Confidentiality</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/services/records-and-registration/registration-and-advising">Registration and Advising</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/services/records-and-registration/special-students">Special Students</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/services/records-and-registration/student-petitions">Student Petitions</nuxt-link>
          </li>
          <!-- <li>
            <nuxt-link to="/services/records-and-registration/student-petitions-faqs">Student Petitions FAQs</nuxt-link>
          </li> -->
          <!-- <li>
            <nuxt-link to="/students/student-policies/faqs">Student Policies FAQs</nuxt-link>
          </li> -->
        </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      posts: null,
      epIT: 'https://www.ocadu.ca/api/records-pages',
    }
  },
  mounted () {
    this.$accordionControl();
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    getAllPosts(env) {
      const slug = this.$route.fullPath
      axios.get(this.epIT)
        .then(response => {
          this.posts = response.data.filter(post => !post.field_slug.includes('/'))
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
// .component--subnav{
//   .sub-nav li{
//     &:first-child{
//       // display: none;
//     }
//   }
// }
</style>
