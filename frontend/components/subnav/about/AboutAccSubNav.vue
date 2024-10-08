<template>
 <div class="component--aboutaccsubnav">
   <div id="top">
     <ul class="sub-nav">
       <li><a href="/about/accountability/key-performance-indicators">Key Performance Indicators</a></li>
       <li><a href="/about/accountability/cudo-2016">CUDO 2016</a></li>
       <li><a href="/about/accountability/cudo-2015">CUDO 2015</a></li>
       <li><a href="/about/accountability/cudo-2014">CUDO 2014</a></li>
       <li><a href="/about/accountability/cudo-2013">CUDO 2013</a></li>
       <li><a href="/about/accountability/cudo-2012">CUDO 2012</a></li>
       <li><a href="/about/accountability/cudo-2011">CUDO 2011</a></li>
     </ul>
   </div>
 </div>
</template>
<script>
export default {
  mounted () {
    this.$accordionControl();
  },
}
</script>
<style lang="scss" scoped>
.component--aboutaccsubnav{
 .sub-nav {
   li {
     &:first-child{
       // display: none;
     }
   }
 }
}
</style>
