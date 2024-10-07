<template>
<div>
  <Hero
  variableImg="https://www.ocadu.ca/Assets/design/spotlights/english-language-spotlight.jpg"
  variableText="English Language Learning support"
  variableSubhead="Programs and resources for students whose first language isn’t English (ESL/multilingual Students)"/>

  <b-container class="my-5">
    <ellParentQuicklinks />
    <h1 class="text-center">English Language Learning support</h1>
    <p>English Language Learners (students whose first language isn’t
      English/ESL/multilingual students) come from diverse backgrounds
      and have a variety of educational experiences. You might be:</p>
    <ul>
      <li>a student who has been living and studying in Canada for
        many years</li>
      <li>a student who has been living and studying in Canada for
        a few years</li>
      <li>a student who primarily speaks other languages outside
        of school</li>
      <li>an international student</li>
      <li>several of the options above</li>
    </ul>
    <p>OCAD University has a variety of resources and supports available to help you continue to develop the English language skills you need to be successful in your studies.</p>
  </b-container>
</div>
</template>

<script>
import ellParentQuicklinks from '@/components/quicklinks/EllParentQuicklinks'
import Hero from '@/components/ui/Hero'
export default {
  name: 'ellIndex',
  layout: 'default',
  head() {
    return {
      title: 'English Language Learning'
    }
  },
  components: {
    Hero,
    ellParentQuicklinks
  }
}
</script>
<style lang="scss" scoped>

</style>
