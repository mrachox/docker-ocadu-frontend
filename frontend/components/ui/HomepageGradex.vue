<template>
  <div class="banner">
    <div class="panel img">
      <p><a href="https://ocadu.ca/gradex"><img src="https://www.ocadu.ca/gradex2022/img/header2.gif" style="width: 100%; height: auto;" /></a></p>
    </div>
    <div class="panel title">
      <h1><a href="https://ocadu.ca/gradex">OCAD University<br />GradEx 107</a></h1>
      <h2><a href="https://ocadu.ca/gradex">OCAD University's 107th Annual Graduate Exhibition is returning in person! Celebrate the work of OCAD U's class of 2022 in person and online May 11-15.</a></h2>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  name: 'homePageGradex',
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
  font-size: 5vmax;
}

.title h2 {
  font-size: 2vmax;
}

@media screen and (max-width: 720px) {
  .banner {
    display: block;
  }
  
  .panel {
    width: 100%;
    padding: 1rem;
  }
}

</style>
