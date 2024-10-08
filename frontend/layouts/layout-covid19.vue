<template>
  <div id="covid19-body">
    <div class="main-wrapper">
      <mainHeaderc19 />

      <div class="site-content" id="site-content">
        <nuxt />
      </div>
    </div>
  </div>
</template>
<script>
import mainHeaderc19 from '@/components/ui/Headerc19'

export default {
  scrollToTop: true,
  components: {
    mainHeaderc19,

  }
}
</script>
<style lang="scss" scoped>
html {
    overflow-x: hidden;
    //goes with scrollbars
    --scrollbarBG: #ffffff;
    --thumbBG: #000000;
    .main-wrapper {
        border: 0;
    }

    #covid19-body {
      background: white;
      }
    }


</style>
