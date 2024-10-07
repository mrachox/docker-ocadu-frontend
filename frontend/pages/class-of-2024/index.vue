<template>
<div class="wrap">
  <div v-for="post in posts" v-bind:key="post.nid" v-html="post.body"></div>
</div>
</template>

<script>
import axios from 'axios'

export default {
name: 'convoIndex',
layout: 'default',

head() {
  return {
    title: this.postTitle,
    meta: [{
      hid: 'description',
      name: 'description',
      content: this.postMetaDesc
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: this.postKeywords
    }
  ]
  }
},
data () {
  return {
    posts: '',
    ep: 'https://live-ocad.pantheonsite.io/api/special-events-pages',
    postTitle: '',
    postMetaDesc: '',
    postKeywords: '',
  }
},
components: {

},
created() {
  // vue created
  this.getAllPosts();
},
mounted() {
  // vue mounted
},
updated() {
  // vue updated
  this.flipCardCountdown();
},
methods: {
  getAllPosts() {
    const slug = this.$route.fullPath
    axios.get(this.ep)
      .then(response => {
        this.posts = response.data.filter(post => post.nid === "100069254")
        this.postTitle = this.posts[0].title
        this.postMetaDesc = this.posts[0].field_ip_meta_description
        this.postKeywords = this.posts[0].field_ip_meta_keywords
      })
      .catch(error => {
        console.log('-----error------- ' + slug);
        console.log(error);
      })
  },
  flipCardCountdown() {
    const countToDate = new Date("June 14, 2024 10:30:00").getTime();
    let previousTimeBetweenDates;
    setInterval(() => {
      const currentDate = new Date();
      const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);
      flipAllCards(timeBetweenDates);

      previousTimeBetweenDates = timeBetweenDates;
    }, 1000);

    function flipAllCards(time) {
      const seconds = Math.abs(time % 60);
      const minutes = Math.abs(Math.floor(time / 60) % 60);
      const hours = Math.abs(Math.floor(time / 3600) % 24);
      const days = Math.abs(Math.floor(time / (3600 * 24)));

      flip(document.querySelector("[data-days-tens]"), Math.floor(days / 10));
      flip(document.querySelector("[data-days-ones]"), days % 10);
      flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10));
      flip(document.querySelector("[data-hours-ones]"), hours % 10);
      flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10));
      flip(document.querySelector("[data-minutes-ones]"), minutes % 10);
      flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10));
      flip(document.querySelector("[data-seconds-ones]"), seconds % 10);
    }

    function flip(flipCard, newNumber) {
      const topHalf = flipCard.querySelector(".top");
      const startNumber = parseInt(topHalf.textContent);
      if (newNumber === startNumber) return;

      const bottomHalf = flipCard.querySelector(".bottom");
      const topFlip = document.createElement("div");
      topFlip.classList.add("top-flip");
      const bottomFlip = document.createElement("div");
      bottomFlip.classList.add("bottom-flip");

      top.textContent = startNumber;
      bottomHalf.textContent = startNumber;
      topFlip.textContent = startNumber;
      bottomFlip.textContent = newNumber;

      topFlip.addEventListener("animationstart", e => {
        topHalf.textContent = newNumber;
      });
      topFlip.addEventListener("animationend", e => {
        topFlip.remove();
      });
      bottomFlip.addEventListener("animationend", e => {
        bottomHalf.textContent = newNumber;
        bottomFlip.remove();
      });
      flipCard.append(topFlip, bottomFlip);
    }
  },
}
}
</script>

<style lang="scss">
// :root {
// 	 --blue: #0867e6;
// 	 --pink: #ff228e;
// 	 --orange: #ff9c07;
// }

// .flip-card {
//   font-family: 'Courier New', Courier, monospace;
//   position: relative;
//   display: inline-flex;
//   flex-direction: column;
//   box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .2);
//   border-radius: .1em;
//   font-size: 2.5rem;
//   color: purple;
// }

// .top,
// .bottom,
// .flip-card .top-flip,
// .flip-card .bottom-flip {
//   height: .75em;
//   line-height: 1;
//   padding: .25em;
//   overflow: hidden;
// }

// .top,
// .flip-card .top-flip {
//   background-color: #f7f7f7;
//   border-top-right-radius: .1em;
//   border-top-left-radius: .1em;
//   border-bottom: 1px solid rgba(0, 0, 0, 0.1);
// }

// .bottom,
// .flip-card .bottom-flip {
//   background-color: white;
//   display: flex;
//   align-items: flex-end;
//   border-bottom-right-radius: .1em;
//   border-bottom-left-radius: .1em;
// }

// .flip-card .top-flip {
//   position: absolute;
//   width: 100%;
//   animation: flip-top 250ms ease-in;
//   transform-origin: bottom;
// }

// @keyframes flip-top {
//   100% {
//     transform: rotateX(90deg);
//   }
// }

// .flip-card .bottom-flip {
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   animation: flip-bottom 250ms ease-out 250ms;
//   transform-origin: top;
//   transform: rotateX(90deg);
// }

// @keyframes flip-bottom {
//   100% {
//     transform: rotateX(0deg);
//   }
// }

// .container {
//   display: flex;
//   gap: .5em;
//   justify-content: center;
//   box-sizing: border-box;
// }

// .container * {
//   box-sizing: border-box;
// }

// .container-segment {
//   display: flex;
//   flex-direction: column;
//   gap: .1em;
//   align-items: center;
// }

// .segment {
//   display: flex;
//   gap: .1em;
// }

// .segment-title {
//   font-size: 1rem;
// }


// :root {
//   --blue: #0867e6;
//   --pink: #ff228e;
//   --orange: #ff9c07;
// }

// p,ul,li {
//    font-family: "gotham_book", Arial, sans-serif !important;
// }

// .ceremony-button {
//   width: 100%;
//   height: 260px;
//   max-width: 260px;
//   box-sizing: border-box;
//   align-items: center;
//   justify-content: center;
//   text-decoration: none;
//   text-transform: uppercase;
//   font-family: "gotham_medium", Arial, sans-serif !important;
//   display: inline-flex;
//   margin: 1rem;

//   &.am {
//     background: url('images/button-am-ceremony.png') center center no-repeat;
//     background-size: contain;
//   }

//   &.pm {
//     background: url('images/button-pm-ceremony.png') center center no-repeat;
//     background-size: contain;
//   }

//   span {
//     width: 100%;
//     display: block;
//     text-align: center;
//     background: #FFF;
//     padding: 0.25rem 0;
//   }

//   &:hover {
//     text-decoration: none;
//   }
// }

// .stretch {
//   padding: 2rem 0;
//   width: calc(100vw - 2.8rem);
//   margin-left: calc(-50vw + 50% + 1.4rem);
//   box-sizing: border-box;
  
//   .inner {
//     box-sizing: border-box;
//     max-width: 1080px;
//     margin: 0 auto;
//     padding: 0 2rem;
//   }

// }

// .button {
//   font-family: "gotham_medium", Arial, sans-serif !important;
//   display: inline-block;
//   padding: 1rem 2rem;
//   border: 2px solid #FFF;
//   color: #FFF;
//   text-decoration: none;
//   margin-top: 1rem;
//   text-transform: uppercase;
//   transition: all 0.2s ease-in-out;

//   &:hover {
//     text-decoration: none;
//     color: #000;
//     background: #FFF;
//   }

//   &.black {
//     background: var(--pink);
//     color: #FFF;

//    &:hover {
//       background: #000;
//     }
//   }

//   &.blue {
//    border: 2px solid var(--blue);
//    color: var(--blue);

//    &:hover {
//       background: var(--blue);
//       color: #FFF;
//     }
//   }

//   &.pink {
//   border: 2px solid var(--pink);
//   color: var(--pink);

//     &:hover {
//       background: var(--pink);
//       color: #FFF;
//     }
//   }

// }

// [data-header] {
//   box-sizing: border-box;
//   clear: both;
//   background: url('images/blob.png') bottom center no-repeat, url('images/header_bg.png') top left repeat-x;
//   background-size: 100% 130px, 166px 100%;
//   text-shadow: 0px 2px 2px rgba(0,0,0,0.25);
//   padding-bottom: 160px;

//   p {
//     font-weight: 600;
//     color: #FFF;

//     a {
//       color: #FFF;
//     }
//   }

//   h1 {
//     font-weight: 900;
//     font-size: 3.15rem;
//     text-transform: uppercase;
//     color: #FFF;
//    // padding: 6rem 0 2rem 0;
//   }

//   .countdown-timer {
//     text-align: left;
//     color: #FFF;
//     font-size: 1.65rem;
//     font-weight: bold;
//     font-family: "gotham_medium", Arial, sans-serif !important;
//     margin: 2rem auto;
//     border-radius: 1rem;
//     background: url('images/header_bg.png') top left repeat-x;
//     background-size: 166px auto;
//     padding: 1rem;

//     h3 {
//       font-size: 1.25rem;
//     }
//   }

//   [data-headline] {
//     background: url('images/convocation_logo.png') top left no-repeat;
//     background-size: 460px auto;
//     padding-left: 500px;
//   }

//   [data-intro] {
//     clear: both;
//     padding-top: 4rem;
//     text-align: center;
//   }

// }

// [data-event-info] {
//   padding-top: 0 !important;

//   p {
//     font-weight: 100;
//     font-size: 1.2rem;
//     line-height: 1.8rem;
//     color: #000;
//   }

//   ul {
//     font-size: 1rem;
//     color: #000;
//     margin: 0;
//     padding: 0;

//     li {
//      margin: .25rem 0;
//      padding: 0;
//      list-style-type: none;
//     }
//   }

//   .inner {
//     display: flex;
//     flex-flow: wrap;

//     [data-ceremony] {
//       padding: 0 2.5rem;
//       width: 50%;

//       &.morning {
//         color: var(--blue);
//       }

//       &.afternoon {
//         color: var(--pink);
//       }
//     }
//   }
// }

// [data-ticket-info] {
//   background: url('images/footer_bg.png') top left repeat-x;
//   background-size: 166px 100%;
//   text-align: center;
//   padding: 6rem 0;

//   p {
//     font-weight: 600;
//     color: #000;
//   }

//   h2 {
//     margin-bottom: 2rem;
//     font-size: 2.5rem;
//     color: #FFF;
//     text-shadow: 0px 2px 2px rgba(0,0,0,0.25);
//   }
// }

// @media only screen and (max-width: 980px) {

//   .flip-card {
//     font-size: 7vmin;
//   }
  
//   .button {
//     padding: 0.75rem;
//   }

//   .stretch {
//     .inner {
//       padding: 0 1rem;
//     }
//   }

//   [data-header] {
//     h1 {
//       font-size: 2.25rem;
//     }
//     [data-headline] {
//       background: url('images/convocation_logo.png') top center no-repeat;
//       background-size: 380px auto;
//       padding-left: 0;
//       padding-top: 520px;
//       text-align: center;
//     }
//     .countdown-timer {
//       width: 100%;
//       text-align: center;
//       padding: 0.75rem;
//     }
//   }
 
//   [data-event-info] {
//     text-align: center;
//     padding-top: 0 !important;
//     .inner {
//       display: block;

//       [data-ceremony] {
//         padding: 0;
//         width: 100%;

//         &.morning {
//           margin-bottom: 3rem;

//         }
//       }
//     }
//   }
  
//   .ceremony-button {
//     margin: 1rem auto;
//   }
// }

// @media only screen and (max-width: 440px) {
//   [data-header] {
//     h1 {
//       font-size: 1.7rem;
//     }
//     [data-headline] {
//       background-size: contain;
//       padding-top: 480px;
//     }
//   }
// }


// @media only screen and (max-width: 360px) {
//   [data-header] {

//     [data-headline] {
//       padding-top: 420px;
//     }
//   }
// }

</style>
