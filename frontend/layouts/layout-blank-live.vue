<template>
  <div>
    <div class="main-wrapper">
      <div class="site-content" id="site-content">
        <div id="live-new">

            <img class="header" src="https://www.ocadu.ca/sites/default/files/assets/media/header.jpg" alt="OCADU Live">

            <ul id="live-nav" class="my-2">
              <li><nuxt-link to="/live">
                watch live
              </nuxt-link></li>
              <li><a href="/live/watch-on-demand">
                watch on-demand
              </a></li>
              <li><nuxt-link to="/live/schedule">
                schedule
              </nuxt-link></li>
              <li><nuxt-link to="/live/apply">
                apply
              </nuxt-link></li>
              <li>
                <nuxt-link to="/live/meet-the-team">
                  meet the team
                </nuxt-link>
              </li>
              <li><a href="https://www.instagram.com/ocadulive/" target="_blank">instagram</a></li>
            </ul>

            <nuxt />

        </div>

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
