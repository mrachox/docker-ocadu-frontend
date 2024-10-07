<template>
  <div class="my-5">
    <undergradPrograms :faculty="all"/>
  </div>
</template>

<script>
import undergradPrograms from '@/components/feature/UndergradPrograms'

export default {
  name: 'undergradIndex',
  components: {
      undergradPrograms
  },
  head () {
    return {
      title: 'Undergraduate Studies'
    }
  },
  layout: 'default',
  data(){
    return {
      all: 'Faculty of'
    }
  },
}
</script>
<style lang="scss" scoped>

</style>
