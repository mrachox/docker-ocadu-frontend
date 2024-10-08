<template>
  <div>
    <Hero
    variableImg="https://www.ocadu.ca/Assets/design/spotlights/spotlight-wac.jpg"
    variableText="Writing Across the Curriculum"
    variableSubhead="Learning to Write and Writing to Learn."
    variableCredit="Photo of students working collaboratively on a project."/>

    <wacQuicklinks />

    <b-container class="my-5">
      <h1 class="text-center">Writing Across the Curriculum</h1>
      <p>The Writing Across the Curriculum (WAC) Initiative at OCAD U supports undergraduate students to develop strong writing and communication skills. It is a university-wide, interdisciplinary collaboration involving faculty, students, writing specialists, educational developers, and academic leadership.&nbsp;</p>
      <p>Together, we aim to ensure that students experience gradual and purposeful discipline-specific writing development within their programs, enabling them to meet writing benchmarks in OCAD U's <a target="_blank" href="/AssetFactory.aspx?did=2107" title="OCAD U Framework Undergraduate Writing Competency Feb 2015 Screen">Framework for Undergraduate Writing Competency</a>. The <a target="_blank" title="Teaching a WID Course" href="http://www.ocadu.ca/academics/writing-across-the-curriculum/teaching-a-wac-course.htm">Writing Across the Curriculum course stream</a> supports students in meeting these benchmarks. &nbsp;</p>
      <p>The WAC Initiative also seeks to foster a culture of writing at OCAD U by providing resources for faculty and students and showcasing the role of writing in art and design education and practice.</p>
      <p>The Writing &amp; Learning Centre (WLC) coordinates the initiative and chairs the Writing Across the Curriculum Steering Committee. The initiative is guided and informed by Writing Across the Curriculum Fellows drawn from the OCAD U Faculty.</p>
      <p>One of the first at an art and design institution, the WAC Initiative will establish OCAD University as a leader in writing pedagogy for art and design education.&nbsp;</p>
      <p>Interested in getting involved? &nbsp;Email <a target="_blank" title="Contact WAC Email address" href="mailto:wac@ocadu.ca">wac@ocadu.ca</a></p>
    </b-container>
  </div>
</template>

<script>
import wacQuicklinks from '@/components/quicklinks/WacQuicklinks'
import Hero from '@/components/ui/Hero'
export default {
  name: 'wacIndex',
  layout: 'default',
  head () {
    return {
      title: 'Writing and Learning Centre'
    }
  },
  components: {
    Hero,
    wacQuicklinks
  }
}
</script>
<style lang="scss" scoped>

</style>
