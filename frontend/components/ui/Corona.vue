<template>
<div class="coronavirus--banner">
  <div class="highlight">
    <a href="https://www.ocadu.ca/services/health-and-wellness/covid-19">
      <h1 style="text-transform: uppercase;">COVID-19 Updates</h1>
    </a>
  </div>
  <!-- <div>
    <a href="/students/remote-support">
      <h1>SUPPORTING YOU REMOTELY, DURING COVID-19</h1>
    </a>
  </div> -->
</div>
</template>

<script>
import axios from 'axios'
export default {

}
</script>

<style lang="scss">
.coronavirus--banner {
  h1{
    font-family: 'gotham_bold';
    text-align: center;
    padding: 0.75rem 0;
    letter-spacing: 1px;
    margin-bottom: 0;
    word-spacing: 5px;
    font-size: 1.5rem;
  }
}

@include media-breakpoint-down(sm) {
  .coronavirus--banner {
    h1{
      font-size: 1rem;
    }
  }

}
</style>
