<template>
  <div id="footer">
      <b-row>
        <b-col md="3">
          <h4 class="text-uppercase text-white">connect</h4>
          <nav>
          <ul class="footer-links nav flex-column">
        		<!-- <li class="nav-item"><a href="https:/signup.htm" title="Sign up for our Newsletter">Newsletter Sign Up</a></li> -->
        		<li class="nav-item"><a href="//www.facebook.com/ocaduniversity" title="Facebook">Facebook</a></li>
        		<li class="nav-item"><a href="//www.twitter.com/ocad" title="Twitter">Twitter</a></li>
        		<li class="nav-item"><a href="//www.linkedin.com/edu/school?id=20413&amp;trk=edu-ca-head-title" title="LinkedIn">LinkedIn</a></li>
        		<li class="nav-item"><a href="//www.youtube.com/ocaduniversity" title="YouTube">YouTube</a></li>
        		<li class="nav-item"><a href="//www.vimeo.com/ocaduniversity" title="Vimeo">Vimeo</a></li>
        		<li class="nav-item"><a href="//www.flickr.com/ocaduniversity" title="Flickr">Flickr</a></li>
        		<li class="nav-item"><a href="//www.instagram.com/ocaduniversity" title="Instagram">Instagram</a></li>
          </ul>
          </nav>
        </b-col>
        <b-col md="3">
          <h4 class="text-uppercase text-white">study</h4>
          <nav>
          <ul class="footer-links nav flex-column">
            <li class="nav-item"><a href="/admissions" title="Admissions">Admissions</a></li>
            <li class="nav-item"><a href="/admissions/programs" title="Undergraduate Programs">Undergraduate Programs</a></li>
            <li class="nav-item"><a href="/academics/graduate-studies" title="Graduate Studies">Graduate Studies</a></li>
            <li class="nav-item"><a href="/academics/continuing-studies" title="Continuing Studies">Continuing Studies</a></li>
          </ul>
          </nav>
        </b-col>
        <b-col md="3">
          <h4 class="text-uppercase text-white">work</h4>
          <nav>
          <ul class="footer-links nav flex-column">
            <li class="nav-item"><a href="/services/human-resources/employment-opportunities" title="Careers">Employment Opportunities</a></li>
            <li class="nav-item"><a href="//ocadu-csm.symplicity.com/students/index.php" title="Student Jobs">Student Jobs</a></li>
            <li class="nav-item"><a href="//ocadu-csm.symplicity.com/students/index.php" title="Alumni Jobs">Alumni Jobs</a></li>
          </ul>
          </nav>
        </b-col>
        <b-col md="3">
          <h4 class="text-uppercase text-white">contact</h4>
          <nav>
          <ul class="footer-links nav flex-column">
            <li class="nav-item text-white">416.977.6000</li>
						<li class="nav-item"><a href="/about/media" title="Media">Media</a></li>
						<li class="nav-item"><a href="https://map.ocadu.ca/" title="Campus Map" target="_blank">Campus Map</a></li>
						<li class="nav-item text-white">100 McCaul Street, Toronto, Ontario, Canada, M5T 1W1</li>
						<li class="nav-item"><a href="/about/accessibility" target="_blank">Accessibility at OCAD U</a></li>
            <!-- <li class="nav-item"><a href="/ignite" alt="Ignite Imagination - The Campaign for OCAD U"><img src="/Assets/images/ignite-logo-black.jpg" class="footer-logo-ignite" alt="Ignite Imagination - The Campaign for OCAD U"></a></li> -->
          </ul>
          </nav>
        </b-col>
      </b-row>
  </div>
</template>
<script>
export default {


}
</script>
<style lang="scss">
#footer{
  background: $primary;
  padding: $spacer*4 0;
  h4 {
    font-family: 'gotham_black', Arial, sans-serif;
    font-size: 18px;
  }
}

.footer-links{
  li{
    list-style: none;
    margin-bottom: $spacer*0.75;

    a{
      color: $light;
    }
  }
}

</style>
