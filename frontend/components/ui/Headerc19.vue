<template>
<div id="c19">
  <!-- <script src="https://www.ocadu.ca/recruitment2020/js/jquery.js"></script>
  <script src="https://www.ocadu.ca/recruitment2020/js/hammer.js"></script>
  <script src="https://www.ocadu.ca/recruitment2020/js/html5shiv.js"></script>
  <script src="https://www.ocadu.ca/recruitment2020/js/main.js"   ></script>

  <style media="screen">
    @import 'https://www.ocadu.ca/recruitment2020/css/main.css';
    @import 'https://www.ocadu.ca/recruitment2020/css/admissions.css';
  </style> -->
  <!-- Google Tag Manager (noscript) -->
  <!-- <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TM5DPVZ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> -->
  <!-- <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=G-TCB0DPVWWH" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> -->
  <!-- End Google Tag Manager (noscript) -->
  <header>
    <div class="custom-menu">
      <a href="/" class="ocad-university ir"></a>
      <p style="display: inline-block; color: white;"><strong>OCAD UNIVERSITY</strong></p>


      <!-- <button id="covid-button" aria-controls="menu" aria-expanded="false" @click="openMenu">Menu</button>
      <nav id="covidmenu" role="navigation" class="" style="display: none;">
        <ul>
          <li><a href="/about/covid19/health-guidance">Health Guidance</a></li>
          <li><a href="/about/covid19/return-to-campus-plan">Return to Campus Plan</a></li>
          <li><a href="/about/covid19/case-tracking">Case Tracking</a></li>
          <li><a href="/about/covid19/boosters">Boosters</a></li>
          <li><a href="/about/covid19/student-info">Students</a></li>
          <li><a href="/about/covid19/staff-and-faculty-info">Staff and Faculty</a></li>
          <li><a href="/about/covid19/news">News</a></li>
          <li><a href="/about/covid19/engagement">Engagement</a></li>
          <li><a href="/about/covid19/faq">FAQs</a></li>

        </ul>
      </nav> -->
    </div>

    <!-- <div class="access-form">

      <p>
        <a href="https://erpapps.ocadu.ca/ecm_anon_sso/default.aspx?ecmform=FacilityAccess">Access Request Form</a>
      </p>

    </div> -->

  </header>

</div>
</template>
<script>
export default {

  mounted() {
  },

  methods: {
    openMenu() {
      const menuBtn = document.getElementById('covid-button');
      const navMenu = document.getElementById('covidmenu');

      if (navMenu.style.display == 'block'){
        navMenu.style.display = 'none';
      } else {
        navMenu.style.display = 'block';
      }

    }
  }

}
</script>

<style lang="scss">
body {
    #c19 {
        header {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
          background: #000;
          background: rgba(0, 0, 0, 1);
          width: 100%;


          .access-form {
            p {
              background-color: #ee2f7e;
              text-align: center;
              padding: 10px;
              margin-bottom: 0;
              a {
              }
            }
          }
          .custom-menu {
            a:hover {
              color: white;
              text-decoration: underline;
            }
            .ocad-university {
                display: inline-block;
                width: 4em;
                height: 3.336em;
                background: url("https://www.ocadu.ca/sites/default/files/assets/media/logo-ocad.png") no-repeat center center;
                background-size: contain;
                vertical-align: top;
            }
            #covidmenu {
              float: right;
            }
          }

        }
    }

}

.ir {
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
}

@media only screen and (min-width: 801px) {
    body {
        #c19 {

            .custom-menu {
                max-width: 1180px;
                padding: 0.75em 20px;
                position: relative;
                margin-left: auto;
                margin-right: auto;
                text-align: left;
            }
        }
    }
}
/*
 * Breakpoints for menu
 */
@media only screen and (max-width: 1140px) {
    body {
        header {

            #covidmenu {
                display: none;
                background: #000;
                text-align: center;
                font-size: 1.25em;
                width: 100%;
                position: absolute;
                top: 100%;
                left: 0;
                z-index: 100;
                float: right;
                ul {
                    margin: 0;
                    padding: 0;
                    li {
                        margin: 0;
                        padding: 0;
                        a {
                            display: block;
                            padding: 1em;
                            color: white;
                        }
                    }
                }
            }

            #covid-button {
                float: right;
                display: block;
                margin: 0.625em 0;
                display: block;
                background: transparent;
                border: none;
                width: 2em;
                height: 2em;
                background: url("https://www.ocadu.ca/recruitment2020/img/menu.png") no-repeat center center;
                background-size: cover;
                text-indent: -9999px;
            }

            #covid-button[aria-expanded="true"] {
                background-image: url("https://www.ocadu.ca/recruitment2020/img/menu_close.png");
            }
        }
    }
}

@media only screen and (min-width: 1141px) {

    body {
        header {
            #covid-button {
                display: none;
            }
            #covidmenu {
                ul {
                    float: right;
                    padding: 0;
                    margin: 1em 0;
                    li {
                        display: block;
                        float: left;
                        padding: 0;
                        margin: 0 1em;
                    }
                }
            }
        }
    }

    #covidmenu {
        display: inline-block !important;
    }

    .header-line {
        font-size: 4em;
    }

    .header-line-h2 {
        font-weight: 500;
        font-size: 3em;
        line-height: 0.95em;
        text-transform: uppercase;
        /* margin-left: 20px; */
    }
}
</style>
