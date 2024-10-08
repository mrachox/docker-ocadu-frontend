<template>
<div class="exit-intent-popup">
  <!-- <div class="admpopup-cont"> -->
  <!-- <div class="admpopup" :style="{ backgroundImage: 'url(https://www.ocadu.ca/sites/default/files/assets/media/grange-park.jpg)' }">
    <h3 class="text-light text-center">
      <a href="https://apply.ocadu.ca/register/?id=729431c8-7ce3-45a3-b176-9630056f2bb5" class="stretched-link text-light">CLICK HERE</a> <br />and you could WIN $500 FROM ABOVE GROUND ART SUPPLIES
    </h3>
    <h5 class="text-light text-center"> <a href="https://apply.ocadu.ca/register/?id=729431c8-7ce3-45a3-b176-9630056f2bb5" class="stretched-link text-light">SIGN UP</a> TO GET DATES, DEADLINES AND NEWS FROM OCAD U SENT TO YOUR EMAIL</h5>
    <span class="close">x</span>
  </div> -->
</div>

<!-- </div> -->
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {

  },
  // mounted() {
  //
  //   // Tries to exit page
  //
  //   const mouseEvent = e => {
  //     const shouldShowExitIntent = !e.toElement &&
  //       !e.relatedTarget &&
  //       e.clientY < 10;
  //
  //     if (shouldShowExitIntent) {
  //       document.removeEventListener('mouseout', mouseEvent);
  //
  //       document.querySelector('.exit-intent-popup').classList.add('visible');
  //     }
  //   };
  //
  //   document.addEventListener('mouseout', mouseEvent);
  //
  //   // Closes pop up
  //
  //   const exit = e => {
  //     const shouldExit = [...e.target.classList].includes('exit-intent-popup') || // user clicks on mask
  //       e.target.className === 'close' || // user clicks on the close icon
  //       e.keyCode === 27; // user hits escape
  //
  //     if (shouldExit) {
  //       document.querySelector('.exit-intent-popup').classList.remove('visible');
  //     }
  //   };
  //
  //   document.querySelector('.exit-intent-popup').addEventListener('click', exit);
  //   document.addEventListener('keydown', exit);
  //
  //
  // }
}
</script>

<style lang="scss">
.exit-intent-popup {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9999;
    background: rgba(33, 33, 33, 0.8);
    transform: translateY(60%) scale(0);
    transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.exit-intent-popup.visible {
    transform: translateY(0) scale(1);
}

.admpopup {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-size: cover;
    background-position: 50%;
    width: 660px;
    height: 440px;

    h3 {
        position: absolute;
        z-index: 10;
        top: 30%;
        a {
          text-decoration: underline;
        }
        a:hover {
          text-decoration: none;
        }
    }

    h5 {
        position: absolute;
        z-index: 100;
        bottom: 30%;
        margin: auto 50px;
        a {
          text-decoration: underline;
        }
        a:hover {
          text-decoration: none;
        }
    }

    .close {
        color: white;
        position: absolute;
        right: 0;
        top: -25px;
        cursor: pointer;
    }
}

.admpopup::after {
    content: "";
    display: block;
    background: #000;
    opacity: 0.5;
    width: 100%;
    height: 440px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
}
</style>
