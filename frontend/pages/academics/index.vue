<template>
  <div>
    <academicsSubnav />
    <b-container class="py-5">
      <academicFaculties  />
      <undergradPrograms :faculty="all"/>
      <gradPrograms />
    </b-container>
  </div>
</template>

<script>
import academicsSubnav from '@/components/subnav/academics/AcademicsSubNavCustom'
import academicFaculties from '@/components/feature/AcademicFaculties'
import undergradPrograms from '@/components/feature/UndergradPrograms'
import gradPrograms from '@/components/feature/GradPrograms'

export default {
  name: 'academicsIndex',
  layout: 'default',
  components: {
    undergradPrograms,
    gradPrograms,
    academicsSubnav,
    academicFaculties
  },
  head () {
    return {
      title: 'Programs and Faculties'
    }
  },
  data(){
    return {
      all: "Faculty of"
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
