<template>
<div class="component--programssubnav">
  <div id="top">
  <ul class="sub-nav">
      <li><a href="/admissions">Become a Student</a></li>
      <li><a href="/continuingstudies">Continuing Studies</a></li>
      <li><a href="/admissions/programs">Undergraduate Programs</a></li>
      <li><a href="/academics/graduate-studies">Graduate Studies</a></li>
      <li><a href="/academics/faculty-of-art">Faculty of Art</a></li>
      <li><a href="/academics/faculty-of-design">Faculty of Design</a></li>
      <li><a href="/academics/faculty-of-las-and-sis">Faculty of Arts &amp; Science</a></li>
      <li><a href="/academics/bios">Faculty Members</a></li>
      <li><a href="/academics/minors">Minors</a></li>
      <li><a href="/academics/english-language-learning">English Language Learning</a></li>
      <!-- <li><a href="/academics/studying-in-florence">Studying in Florence</a></li> -->
      <li><a href="/academics/letter-of-permission">Letter of Permission</a></li>
      <li><a href="/academics/mobility-exchange">Mobility / Exchange</a></li>
      <li><a href="/academics/independent-undergrad-study">Independent Undergraduate Study</a></li>
      <li><a href="/academics/writing-across-the-curriculum">Writing Across the Curriculum</a></li>
      <li><a href="/services/centre-for-emerging-artists-and-designers/experiential-learning/field-placement">Field Placement</a></li>
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
.component--programssubnav {
    .sub-nav {
        li {
            &:first-child {
                // display: none;
            }
        }
    }
}
</style>
