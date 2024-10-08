<template>
<div class="wrap">
  <!-- <div v-for="post in posts" v-bind:key="post.nid" v-html="post.body"></div> -->

  <div data-header class="stretch">
    <div class="inner">
          <div data-banner><img src="https://www.ocadu.ca/sites/default/files/project-31/header.png" /></div>
    </div>
  </div>

  <div data-content class="stretch">
    <div class="inner black">
    <!-- <p>
      <img src="https://www.ocadu.ca/sites/default/files/project-31/yellow-arrows-bg.png" class="left arrows" />
      <a href="https://can.givergy.com/Project-31/?controller=tickets" class="cta">Buy Tickets Now<span></span></a>
      <img src="https://www.ocadu.ca/sites/default/files/project-31/yellow-arrows-bg.png" class="right arrows" />
    </p> -->
    <!-- <br><br> -->
    <p>
      <img src="https://www.ocadu.ca/sites/default/files/project-31/yellow-arrows-bg.png" class="left arrows" />
      <a href="https://can.givergy.com/Project-31/?controller=lots&category=All%20Lots" class="cta">View The Art<span></span></a>
      <img src="https://www.ocadu.ca/sites/default/files/project-31/yellow-arrows-bg.png" class="right arrows" />
    </p>
    </div>
  </div>


  <div data-content class="stretch">
    <div class="inner yellow">
      <p>On November 28, spend an evening with art and design collectors and enthusiasts by taking in a curated world-class collection of amazing works by some of Canada’s leading artists and designers.</p>
      <p>During this time-honoured event, guests will enjoy cocktails, hors d’oeuvres and an exclusive live auction with 20 lots and a silent online auction of 29 lots.</p>
      <p>Proceeds from this unique event will support programming and bursaries for OCAD University students who are Indigenous, Black and People of Colour.</p>
      <p><strong>From sculptures to paintings to mixed media pieces – don’t miss the opportunity to acquire exceptional works from Canada’s leading art, design and new media creatives.</strong></p>
      <p>&nbsp;</p>
      <p><img class="tote" src="https://www.ocadu.ca/sites/default/files/assets/design/mirage_totebag.png" /><br>
        <strong>Complimentary tote bag</strong><br>
        Guests attending Project 31 will receive a complimentary, limited edition <a href="https://fineline.art/" data-ogsc="" data-mce-href="https://fineline.art/">Fineline</a> tote bag featuring <em>Mirage,</em> an original artwork by OCAD U graduate Ethan Platt who graduated with a BFA (hons) in 2023. His work has recently been featured at Visionary Art Collective, Bau-Xi Gallery, Blitz Gallery, Ada Slaight Gallery, Purple Haze and Art Mur. In the coming months, his work will be featured as part of Visionary Projects at High Line Nine Galleries in New York City and at Maison Depoivre.</p>
      <p>&nbsp;</p>
      <p><strong>Fineline: Project 31 Collaboration</strong><br><a href="https://fineline.art/" data-ogsc="" data-mce-href="https://fineline.art/">Fineline</a> is an art marketplace and artist collective launched by OCAD U in October 2023. Fineline is proud to be supporting Project 31 through a collaboration with artist Ethan Platt to create a limited edition Fineline tote bag for each Project 31 guest to take home on November 28.&nbsp;</p>
  </div>
</div>

  <div data-content class="stretch">
    <div class="inner purple">
      <h3>Save These Dates</h3>
      <!-- <h4 class="highlight">Wednesday, September 13</h4>
      <ul><li>Early-bird tickets go on sale for $150; on October 20, tickets will be $175</li></ul> -->
      <h4 class="highlight">Tuesday, November 21</h4>
      <ul><li>Early bidding opens for online silent and live auctions</li></ul>
      <h4 class="circle">Tuesday, November 28</h4>
      <ul>
        <li>Project 31 in-person event with live auction, refreshments and entertainment</li>
        <!-- <li>OCAD University, 100 McCaul St.</li> -->
        <li>6 to 9 p.m.</li>
      </ul>
    </div>
  </div>

  <div data-content class="stretch">
    <div class="inner blue">
      <p><strong>WANT TO BE ADDED TO OUR MAILING LIST?</strong></p>
      <p>Email <a href="events@ocadu.ca">events@ocadu.ca</a> today.</p>
    </div>
  </div>

</div>
</template>

<script>
// import axios from 'axios'

export default {
name: 'convoIndex',
layout: 'default',

head() {
  return {
    title: 'Project 31',
    meta: [{
      hid: 'description',
      name: 'description',
      content: ''
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: ''
    }
  ]
  }
},
data () {
  return {
    // posts: '',
    // ep: 'https://live-ocad.pantheonsite.io/api/special-events-pages',
    // postTitle: '',
    // postMetaDesc: '',
    // postKeywords: '',
  }
},
components: {

},
created() {
  // vue created
  // this.getAllPosts();
},
mounted() {
  // vue mounted
  // this.$accessibleAccordion();
},
updated() {
  // vue updated
  // this.$accessibleAccordion();
},
methods: {
  // getAllPosts() {
  //   const slug = this.$route.fullPath
  //   axios.get(this.ep)
  //     .then(response => {
  //       this.posts = response.data.filter(post => post.nid === "100068007")
  //       this.postTitle = this.posts[0].title
  //       this.postMetaDesc = this.posts[0].field_ip_meta_description
  //       this.postKeywords = this.posts[0].field_ip_meta_keywords
  //     })
  //     .catch(error => {
  //       console.log('-----error------- ' + slug);
  //       console.log(error);
  //     })
  // },
}
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');

:root {
  --red: rgb(197, 17, 62);
  --31yellow: #ffe300;
  --31purple: #8b308e;
  --31blue: #4dc5e2;
}

.site-content {
  background: black;
  p, ul, li {
    font-family: 'Montserrat', sans-serif !important;
  }
}

@keyframes cta-arrows {
  from {
    margin: 0 1rem;
  }
  to {
    margin: 0;
  }
}

.tote {
  max-width: 100%;
}

.stretch {
  position: relative;
  box-sizing: border-box;
  width: calc(100vw - 2.8rem);
  margin-left: calc(-50vw + 50% + 1.4rem);
  
  .inner {
    max-width: 1080px;
    margin: 0 auto;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  .black {
    background-image: url(https://www.ocadu.ca/sites/default/files/project-31/black-bg.png);
    background-size: 1500px 350px;
    padding: 6rem;
    text-align: center;
    
    p {
      margin: 0;
    }

    img {
      display: inline-block;
      margin: 0 1rem;
      animation-name: cta-arrows;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-direction: alternate-reverse;
      width: 170px; 
      height: 50px;

      &.right {
        transform: rotate(180deg);
      }
    }
    div {
      display: inline-block;
    }
  }

  .yellow {
    background-color: var(--31yellow);
    background-image: url(https://www.ocadu.ca/sites/default/files/project-31/dots-bg.png),
                      url(https://www.ocadu.ca/sites/default/files/project-31/blob-bg.png),
                      url(https://www.ocadu.ca/sites/default/files/project-31/circle-bg.png),
                      url(https://www.ocadu.ca/sites/default/files/project-31/triangle-bg.png);
    background-position: top left, top right, bottom left, bottom right;
    background-repeat: no-repeat;
    background-size: 125px 150px, 300px 240px, 300px 350px, 150px 400px;
    text-align: center;
    padding: 8rem 12rem;
  }

  .purple {
    background-color: var(--31purple);
    background-image: url(https://www.ocadu.ca/sites/default/files/project-31/arrows-bg.png),
                      url(https://www.ocadu.ca/sites/default/files/project-31/cross-bg.png);
    background-position: top 40px left, top 40px right;
    background-repeat: no-repeat;
    background-size: 165px 50px, 130px 95px;

    padding: 2rem;
    color: white;
  }

  .blue {
    height: 150px;
    padding: 2rem;
    background-color: var(--31blue);
    background-image: url(https://www.ocadu.ca/sites/default/files/project-31/footer-bg.png);
    background-position: top left 600px;
    background-repeat: no-repeat;
    background-size: 500px 150px;

  }

}

h4 {
  float: left;
  clear: both;
  text-transform: uppercase;
  width: 50%;
  text-align: center;
  margin-right: 4rem;

  &.highlight {
    padding: 0.25rem 1.75rem;
    background-image: url(https://www.ocadu.ca/sites/default/files/project-31/highlight.png);
    background-size: 100% 40px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: transparent;
    color: black;
  }

  &.circle {
    color: #FFF;
    padding: 1.75rem;
    background-image: url(https://www.ocadu.ca/sites/default/files/project-31/circle-highlight.png);
    background-size: 100% 40px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: transparent;
  }
}

[data-banner] {
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
}

[data-content] {
  
}


h3,
.cta {
  text-decoration: none;
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
  position: relative;
  border: 1px solid white;
  background: var(--31yellow);
  width: 340px;
  height: 60px;
  padding-top: 12px;
  margin: 0 2rem;
  font-size: 1.5rem !important;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;

  span {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 0;
    background: #FF0000;
    text-align: center;
    display: block;
    height: 60px;
    transition: all 0.2s;
    mix-blend-mode: multiply;
  }

  &:before {
    display: block;
    content: '';
    position: absolute;
    width: 60px;
    height: 13px;
    left: -37px;
    bottom: 15px;
    background-color: #000;
    border: 1px solid white;
    transform: rotate(90deg) skew(45deg);
    transition: all 0.2;
  }

  &:after {
    content: '';
    position: absolute;
    width: 339px;
    height: 13px;
    bottom: -14px;
    left: -7px;
    border: 1px solid white;
    background-color: #000;
    transform: skew(-45deg) rotate(0deg);
    transition: all 0.2;

  }

  &:hover {    
    text-decoration: none;
    span {
      width: 338px;
    }
  }

}

h3 {
  background: var(--31blue);
  margin: 4rem auto !important;
  // font-size: 1.15rem !important;
  display: block;
  cursor: default;

  &:before {
    background-color: transparent;
  }
  &:after {
    background-color: transparent;
  }
}

@media only screen and (max-width: 1054px) {
  .stretch {
    .black {
      img {
        width: 100px;
        height: 30px;
      }
    }
  }

}

@media only screen and (max-width: 960px) {
  .stretch {
    .black {
      padding: 6rem 0;
    }
  }
  h4 {
    float: none;
    width: 75%;
  }
}

@media only screen and (max-width: 640px) {
  .stretch {
    .black {

      img {
         display: none;
      }
    }
  }
}
   

@media only screen and (max-width: 720px) {

  .stretch {
      .yellow {
      background-image: url(https://www.ocadu.ca/sites/default/files/project-31/blob-bg-2.png),
                        url(https://www.ocadu.ca/sites/default/files/project-31/circle-bg-2.png);
      background-position: top right, bottom left;
      background-repeat: no-repeat;
      background-size: 300px 240px, 300px 350px;
      padding: 2rem;
    }
  }
  h4 {
    font-size: 1.5rem;
  }

  h3,
  .cta {
  width: 250px;
  height: 50px;
  padding-top: 12px;
  margin: 0 2rem;
  font-size: 1rem !important;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;

  span {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 0;
    background: #FF0000;
    text-align: center;
    display: block;
    height: 50px;
    transition: all 0.2s;
    mix-blend-mode: multiply;
  }

  &:before {
    display: block;
    content: '';
    position: absolute;
    width: 50px;
    height: 13px;
    left: -32px;
    bottom: 11px;
  }

  &:after {
    content: '';
    position: absolute;
    width: 249px;
    height: 13px;
    bottom: -14px;
    left: -7px;
  }

  &:hover {    
    span {
      width: 248px;
    }
  }

}


}

</style>
