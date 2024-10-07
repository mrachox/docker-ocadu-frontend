<template>
<div id="header">
  <!-- Google Tag Manager (noscript) -->
  <!-- <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TM5DPVZ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> -->
  <!-- Google tag (gtag.js) -->
  <!-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-TCB0DPVWWH"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-TCB0DPVWWH');
  </script> -->
  <!-- <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=G-TCB0DPVWWH" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> -->
  <!-- End Google Tag Manager (noscript) -->
  <b-row align-v="end">
    <b-col md="5" class="d-sm-none d-md-block">
      <div class="logo">
        <nuxt-link to="/"><img src="https://www.ocadu.ca/sites/default/files/assets/media/logo-ocad.png" alt="OCAD U LOGO"></nuxt-link>
      </div>
      <div class="ocadu-live">
        <!-- <nuxt-link to="/live"><img src="https://www.ocadu.ca/sites/default/files/assets/media/LiVE_mark.jpg" alt="OCAD U Live wordmark takes you to OCAD U Live page"></nuxt-link> -->
        <a href="/live"><img src="https://www.ocadu.ca/sites/default/files/assets/media/LiVE_mark.jpg" alt="OCAD U Live wordmark takes you to OCAD U Live page"></a>
      </div>
    </b-col>
    <!-- <b-col sm="4" class="d-sm-block d-md-none">
      <a class="mburger mburger--collapse" href="#mobile-menu">
        <b></b>
        <b></b>
        <b></b>
      </a>
    </b-col> -->
    <b-col sm="4" md="2">
      <h1 class="text-center">
        <nuxt-link to="/" class="text-uppercase text-white">OCAD UNIVERSITY</nuxt-link>
      </h1>
    </b-col>
    <b-col sm="8" md="5" class="d-sm-none d-md-block">
      <ul class="header-links nav justify-content-end">
        <li class="nav-item alerts">
          <nuxt-link class="nav-link" to="/services/alerts">
            <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
            ALERTS
          </nuxt-link>
        </li>
        <li class="nav-item"><a href="https://www.ocadu.ca/fundraising/" class="nav-link border border-light text-uppercase text-secondary">giving to ocad u</a></li>
        <li class="nav-item"><a href="/about/contact" class="nav-link border border-light text-uppercase text-white">contact</a></li>
        <li class="nav-item"><a href="https://my.ocadu.ca/" class="nav-link border border-light text-uppercase text-white">log in</a></li>
        <li class="nav-item"><a href="/search" class="nav-link border border-light text-uppercase text-white">search</a></li>
      </ul>
    </b-col>
  </b-row>

  <nav aria-label="Main Navigation">
    <a id="mobilemenu" href="Javascript:;" aria-label="Open Menu">&#9776;</a>
    <ul id="mainmenu">
      <li class="has-submenu" v-for="firstlevelitem in items" :key="firstlevelitem.key">
        <a class="link" aria-haspopup="true" aria-expanded="false" :href="firstlevelitem.relative">{{ firstlevelitem.title }}</a>
        <a class="button" href="Javascript:;" @click="showMenu($event)" @keypress="showMenu($event)">&raquo;<span><span class="visuallyhidden">show submenu for {{ firstlevelitem.title }}</span></span></a>
        <ul v-show="firstlevelitem.below">
          <li v-for="secondlevelitem in firstlevelitem.below" :key="secondlevelitem.key">
            <a :href="secondlevelitem.relative">{{ secondlevelitem.title }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>

    <!-- <nav id="desktop-menu" class="navbar mt-3 row">
    <div id="closebtn"><span>&times;</span></div>
    <div class="megamenu" v-for="firstlevelitem in items" :key="firstlevelitem.key">
      <button class="megamenubtn">
        <a class="text-light" :href="firstlevelitem.relative">{{ firstlevelitem.title }}</a>
      </button>
      <ul class="megamenu-content" v-show="firstlevelitem.below">
        <li v-for="secondlevelitem in firstlevelitem.below" :key="secondlevelitem.key">
          <a :href="secondlevelitem.relative">{{ secondlevelitem.title }}</a>
          <ul class="megamenu-subcontent" v-show="secondlevelitem.below">
            <li v-for="thirdlevelitem in secondlevelitem.below" :key="thirdlevelitem.key">
              <a :href="thirdlevelitem.relative">{{ thirdlevelitem.title }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav> -->

  <nav id="breadcrumbs"> 
  <breadcrumb v-show="!['index'].includes($route.name)" />
</nav>
</div>
</template>
<script>
import axios from 'axios'
import breadcrumb from '@/components/ui/Breadcrumbs'
export default {
  data() {
    return {
      items: '',
      epMENU: 'https://www.ocadu.ca/api/menu_items/main-menu',
    }
  },
  components: {
    breadcrumb
  },
  created() {
    this.getMenuItems();
  },
  methods: {
    getMenuItems() {
      const slug = this.$route.fullPath
      axios.get(this.epMENU, {
          // headers: {
          //   // 'Access-Control-Allow-Origin': 'http://localhost/',
          //   // 'access-control-allow-credentials': true,
          //   'crossDomain': true,
          //   'Content-Type': 'application/json',
          //   // 'Access-Control-Request-Method': 'POST, GET'
          //   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
          // }
        })
        .then(response => {
          //console.log(response.headers)
          this.items = response.data
        })
        .catch(error => {
          console.log('-----error------- ' + slug)
          console.log(error)
        })
    },
    showMenu: function(event) {
      let e = event.currentTarget.parentNode
      if (e.className == "has-submenu") {
          e.className = "has-submenu open"
          e.querySelector('.link').setAttribute('aria-expanded', "true")
          e.querySelector('.button').setAttribute('aria-expanded', "true")
      } else {
          e.className = "has-submenu"
          e.querySelector('.link').setAttribute('aria-expanded', "false")
          e.querySelector('.button').setAttribute('aria-expanded', "false")
      }
    },
    mouseIn: function(event) {
        let e = event.currentTarget
        e.className = "has-submenu open"
    },
    mouseOut: function() {
        timer = setTimeout( ()=> {
            document.querySelector(".has-submenu.open").className = "has-submenu"
        }, 1000)
    }
  },
  mounted() {
    this.$nextTick(function() {
      
      // add skip-to-content link
      console.log(this.$route.fullPath);
      // let skiplink = '<a class="skip" href="http://ocadu.ca'+this.$route.fullPath+'#site-content">Skip To Content</a>';
      let skiplink = '<a class="skip" href="'+this.$route.fullPath+'#site-content">Skip To Content</a>';
      document.body.insertAdjacentHTML('afterbegin', skiplink);

/*
      window.addEventListener("scroll", function() {
        var header = document.getElementById("header")
        var vidControl = document.getElementById("info")
        var header_classes = header.classList
        var vidControl_classes = vidControl.classList

        if (document.documentElement.scrollTop >= 150) {
          if (header_classes.contains("shrink") === false) {
            header_classes.toggle("shrink")
          }
          if (vidControl_classes.contains("reposition") === false) {
            vidControl_classes.toggle("reposition")
          }
        } else {
          if (header_classes.contains("shrink") === true) {
            header_classes.toggle("shrink")
          }
          if (vidControl_classes.contains("reposition") === true) {
            vidControl_classes.toggle("reposition")
          }
        }
      })
*/
      var mobilemenu = document.getElementById("mobilemenu")

      mobilemenu.addEventListener("click", function() {
        document.getElementById("mainmenu").classList.toggle("open")
        document.getElementById("mobilemenu").classList.toggle("open")
      })

    })
  },
}
</script>


<style lang="scss">
// * {
//   transition: all 50ms ease-in;
// }
.skip {
  position: absolute;
  left: -999px;
  width:1px;
  height: 1px;
  top: auto;

  &:focus {
    display: inline-block;
    height: auto;
    width: auto;
    position: static;
    margin: auto;
  }
}


#mainmenu {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  font-family:Arial, Helvetica, sans-serif;
  text-align: center;
  width: 100%;

  & > li {
    padding: 2rem 0.5rem 0.5rem !important;

    &:hover:after {
      content: '';
      display: block;
      position: absolute;
      width: 0;
      border-left: 14px solid transparent;
      border-right: 14px solid transparent;
      border-top: 12px solid #000;
      z-index: 99;
    }
  }

  li {
    display: inline-block;
    list-style-type: none;
    margin: 0;
    padding: 0;

    &:hover {
      ul {
        display: block;
        z-index: 999;
      }
      .button {
        color: #FFF;
      }
    }

    &.open {
      ul {
        display: block;
        z-index: 97;
      }
      .button {
        color: #FFF;
      }
    }

    a {
      color: #FFF;
      background: #000;
      padding: 2px 4px;
      text-decoration: none;
    }
              
    .button {
      appearance: none;
      float: right;
      margin: 0.25rem 0 0 0.75rem;
      border: none;
      color: #666;
      background: none;
      width: 2px;
      height: 2px;
      border-radius: 50%;
      transform: rotate(90deg);
      position: relative;
    }

    ul {
      font-family: gotham_regular, sans-serif!important;
      padding: 1.4rem;
      display: none;
      margin: 0.35rem auto;
      background: #FFF;
      width: calc(100% - 2.8rem);
      position: absolute;
      z-index: 9;
      left: 1.4rem;
      min-height: 200px;
      box-sizing: border-box;
      column-count: 4;
      grid-column-gap: 40px;
      column-gap: 40px;
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
      text-align: left;

      li {
        display: block;
        width: 100%;
        background: #FFF;
        margin-bottom: 0.15rem;
            
        a {
          font-size: 1rem;
          color: #000;
          background: #FFF;
        }
      }
    }
  }
}

#mobilemenu {
  display: none;
}
        
.visuallyhidden {
  display: none;
}

#header {
    background: $primary;
    padding-top: $spacer;
    padding-bottom: $spacer*0.5;
    padding-left: $spacer*0.5;
    padding-right: $spacer*0.5;
    z-index: 9999;

    .logo {
      display: inline-block;
      padding-right: 50px;
    }

    .ocadu-live {
      display: inline-block;
      max-width: 135px;

      img {
        width: 100%;
      }
    }

    h1.text-center {
        font-family: 'gotham_black', Arial, sans-serif;
        font-size: 18px;
    }

    .alerts {
        a {
            color: #FF671E;
        }
    }
}

#header.shrink {
    position: fixed;
    top: 0;
    padding-top: $spacer*0.5;
    padding-right: $spacer*1.5;
    width: 100%;

    .row{
      width: calc(100% - 0.35rem);
    }
}

// repositions video info bar
#info.reposition {
  bottom: 0;
}

.header-links {
    .nav-item {
        margin-left: $spacer*0.5;
    }

    .nav-link {
        font-size: 0.8rem;
        padding: $spacer*0.25 $spacer*0.5;
        margin-bottom: $spacer;
    }

    .border {
        border: 1px solid $light!important;
    }
}

@media screen and (min-width:1100px) {

}

@media screen and (max-width:980px) {

  .logo {
    float: left;
    padding-right: 50px * 2;
  }

  .ocadu-live {
    max-width: 135px;

    img {
      width: 100%;
    }
  }
  #mobilemenu {
    display: block;
    color: #FFF;
    text-decoration: none;
    font-size: 2rem;

    &.open {
      color: #FFF;
    }
  }
  
  #mainmenu {
    height: 0;
    width: 0;
    overflow: hidden;

    li {
      width: 100%;
      padding: 0 !important;

      a {
        display: block;
        box-sizing: border-box;
        width: 100%;
        padding: 1rem 0;
        font-size: 1.1rem;
        margin: 0.15rem;

        &:hover {
          background: #FFF;
          color: #000;
        }
      }
      
      .button {
        display: none !important;
      }

      ul {
        display: none !important;

        li {
          display: none !important;
          
        }
      }
    }
    &.open {
      width: 100%;
      height: auto !important;
      display: block;
    }
  }
  #mainmenu>li:hover:after {
    display: none important;
  }
}

</style>
