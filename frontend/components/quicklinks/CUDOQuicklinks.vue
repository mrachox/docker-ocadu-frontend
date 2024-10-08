<template>
  <div class="component--cudoquicklinks my-5">
    <div id="top">
      <ul class="page-nav">
        <li><a :href="slug + '/general-information'" title="General Information">General Information</a></li>
        <li><a :href="slug + '/admission'" title="Admission">Admission</a></li>
        <li><a :href="slug + '/transfer-students'" title="Transfer Students">Transfer Students</a></li>
        <li><a :href="slug + '/library-collections'" title="Library Collections">Library Collections</a></li>
        <li><a :href="slug + '/student-life'" title="Student Life">Student Life</a></li>
        <li><a :href="slug + '/student-experience-information'" title="Student Experience Information">Student Experience Information</a></li>
        <li><a :href="slug + '/annual-student-expenses'" title="Annual Student Expenses">Annual Student Expenses</a></li>
        <li><a :href="slug + '/instructional-faculty-and-class-size'" title="Instructional Faculty and Class Size">Instructional Faculty and Class Size</a></li>
        <li><a :href="slug + '/university-revenue-and-expenses'" title="University Revenue and Expenses">University Revenue and Expenses	</a></li>
        <li><a :href="slug + '/research'" title="Research">Research</a></li>
        <li><a :href="slug + '/other-useful-information'" title="Other Useful Information">Other Useful Information</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['slug'],
  data () {
    return {

    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
