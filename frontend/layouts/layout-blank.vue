<template>
  <div>
    <div class="main-wrapper">
      <div class="site-content" id="site-content">
        <nuxt />
      </div>
    </div>
  </div>
</template>
<script>

export default {
  scrollToTop: true,
  components: {

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
}
</style>
