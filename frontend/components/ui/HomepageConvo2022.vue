<template>
  <div class="banner">
    <div class="panel img">
      <p><img src="https://www.ocadu.ca/sites/default/files/convocation2022/convo2022-homepage-banner.jpg" style="width: 100%; height: auto;" /></p>
    </div>
    <div class="panel title">
      <h1><a href="https://ocadu.ca/class-of-2022">CONGRATULATIONS CLASS&nbsp;OF&nbsp;2022!</a></h1>
      <h2><a href="https://ocadu.ca/class-of-2022">Convocation returns as an in-person event at Roy Thomson Hall on Friday, June 17. <br /><br />Get tickets or watch the livestream &raquo;</a></h2>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  name: 'homePageConvo2022',
  layout: 'default',
}
</script>

<style lang="scss">


.banner{ 
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
}

.banner a:hover,
.banner a {
  text-decoration: none;
  color: #FFF;
}

.panel {
  width: 50%;
  padding: 1rem;
  box-sizing: border-box;
}

.title {
  color: #FFF;
}

.title h1 {
  font-size: 4vmax;
}

.title h2 {
  font-size: 2vmax;
}

@media screen and (max-width: 860px) {
  .banner {
    display: block;
  }
  
  .panel {
    width: 100%;
    padding: 1rem;
  }
}

</style>
