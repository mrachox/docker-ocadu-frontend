<template>
 <div class="component--galleriesubnav">
   <div id="top">
     <ul class="sub-nav">
       <li><a href="/gallery/onsite">Onsite Gallery</a></li>
       <li><a href="/gallery/ignite-gallery">Ignite Gallery</a></li>
       <li><a href="/gallery/graduate-gallery">Graduate Gallery</a></li>
       <li><a href="/gallery/ada-slaight">Ada Slaight Student Gallery</a></li>
       <!-- <li><a href="/gallery/continuing-studies">Continuing Studies Gallery</a></li> -->
       <li><a href="/gallery/great-hall">The Great Hall</a></li>
       <li><a href="/gallery/open-space">Open Space Gallery</a></li>
       <!-- <li><a href="/services/Library/about-the-library/learning-zone">Learning Zone</a></li> -->
       <!-- <li><a href="/gradex">Annual Graduate Exhibition</a></li> -->
       <!-- <li><a href="/gallery/submit">How to Submit</a></li> -->
     </ul>
   </div>
 </div>
</template>
<script>
export default {
  mounted () {
    this.$accordionControl();
  }
}
</script>
<style lang="scss" scoped>
.component--galleriesubnav{
 .sub-nav {
   li {
     &:first-child{
       // display: none;
     }
   }
 }
}
</style>
