<template>
  <div>
    <div class="main-wrapper-reverse">
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
<style lang="scss">
html {
    background: black;
    overflow-x: hidden;
    //goes with scrollbars
    --scrollbarBG: #ffffff;
    --thumbBG: #000000;
    .main-wrapper-reverse {
        border: 0;
        background: black;
    }
}
</style>
