<template>
<div class="component--studentssubnav">
  <div id="top">
  <ul class="sub-nav">
      <li><a href="/services/academic-advising">Academic Advising</a></li>
      <li><a href="/students/academic-integrity">Academic Integrity</a></li>
      <li><a href="/services/campus-life">Campus Life</a></li>
      <li><a href="/services/centre-for-emerging-artists-and-designers/career-development">Career Development</a></li>
      <!-- <li><a href="https://coursecatalogue.ocadu.ca/" target="_blank">Course Catalogue</a></li> -->
      <li><a href="https://selfservice.ocadu.ca/Student/Courses/Search?keyword=" target="_blank">Course Catalogue</a></li>
      <li><a href="/students/dates-and-deadlines">Dates &amp; Deadlines</a></li>
      <li><a href="/services/disability-services">Disability Services</a></li>
      <li><a href="/services/centre-for-emerging-artists-and-designers/experiential-learning">Experiential Learning Program</a></li>
      <li><a href="/services/financial-matters">Financial Matters</a></li>
      <!-- <li><a href="/students/one-stop-email-form">Get Help</a></li> -->
      <li><a href="/services/records-and-registration/graduation-and-convocation">Graduation &amp; Convocation</a></li>
      <li><a href="/services/health-and-wellness">Health &amp; Wellness</a></li>
      <li><a href="/services/indigenous-students">Indigenous Students</a></li>
      <li><a href="/services/international-students">International Students</a></li>
      <li><a href="/services/it/laptop-program">Laptop Program</a></li>
      <li><a href="/services/library">Library</a></li>
      <li><a href="/services/records-and-registration/program-guides">Program Guides</a></li>
      <li><a href="/services/records-and-registration">Records &amp; Registration</a></li>
      <li><a href="/students/sexual-violence-support">Sexual Violence Support</a></li>
      <li><a href="/students/student-policies">Student Policies</a></li>
      <li><a href="/services/student-union">Student Union</a></li>
      <li><a href="/services/writing-and-learning-centre">Writing &amp; Learning Centre</a></li>
  </ul>

</div>
</div>
</template>

<script>
export default {
  mounted () {
    this.$accordionControl();
  },
}
</script>

<style lang="scss" scoped>
.component--studentssubnav {
    .sub-nav {
        li {
            &:first-child {
                // display: none;
            }
        }
    }
}
</style>
