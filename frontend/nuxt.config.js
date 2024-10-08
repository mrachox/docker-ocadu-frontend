import axios from 'axios'

export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        htmlAttrs: {
            lang: 'en'
        },
        title: 'OCAD University',
        titleTemplate: '%s',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'OCAD U is the largest and most comprehensive art, design and media university in Canada.OCAD University acknowledges the ancestral and traditional territories of the Mississaugas of the Credit, the Haudenosaunee, the Anishinaabe and the Huron-Wendat, who are the original owners and custodians of the land on which we stand.'
            },
            {
                hid: 'keywords',
                name: 'keywords',
                content: 'ocad, ocad university, art, design, new media, graduate studies, BA, digital futures'
            },
            {
                name: 'facebook-domain-verification',
                content: '219rjqqq81vno7uu5bzczyv7cvnroa'
            },
        ],
        // script: [
        //   { src: '/mmenu.js' }
        // ],
        script: [{
      
            },
            {
                type: 'text/javascript',
                src: '/analytics.js',
                aysnc: false
            }
        ],
        link: [{
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
            },
            // { rel: 'stylesheet', href: '/mmenu.css'},
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico',
            },
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#fff'
    },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '~/plugins/client-only' },
        { src: '~/plugins/vue-carousel', ssr: false }
    ],
    
    modules: [
        // With options
        '@nuxtjs/style-resources',
        // Doc: https://bootstrap-vue.js.org/docs/
        'bootstrap-vue/nuxt',
        
    ],
   
    axios: {
        // proxyHeaders: false,
        credentials: false,
        timeout: 5000
    },
    styleResources: {
        scss: [
            './assets/scss/main.scss'
        ]
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {},
        extractCSS: true,
        babel: {
            compact: true
        },
        html: {
            minify: {
                collapseWhitespace: true,
                removeComments: true,
            },
        },
        splitChunks: {
            pages: true
        },
    },
    env: {
        apiBaseUrl: process.env.API_BASE_URL || 'https://live-ocad.pantheonsite.io/api'
    },
    /**
    Change for deployment
    (**/
    router: {
        base: process.env.ROUTER_BASE || '/',
        
    },

    generate: {
        concurrency: 10,
        dir: process.env.GENERATE_DIR,
        routes: function() {
            var apiBaseUrl = process.env.API_BASE_URL || 'https://live-ocad.pantheonsite.io/api'
                // let aca_ell = axios.get('https://www.ocadu.ca/api/ell-pages')
            let about = axios.get(apiBaseUrl + '/about-pages')
                .then((res) => {
                    return res.data.map((about) => {
                        return '/about/' + about.field_slug
                    })
                })
            let abt_acc = axios.get(apiBaseUrl + '/accountability-pages')
                .then((res) => {
                    return res.data.map((abt_acc) => {
                        return '/about/' + abt_acc.field_slug
                    })
                })
            let abt_gradopen = axios.get(apiBaseUrl + '/about-pages')
                .then((res) => {
                    return res.data.map((abt_gradopen) => {
                        return '/about/' + abt_gradopen.field_slug
                    })
                })
            let abt_gov = axios.get(apiBaseUrl + '/governance-pages')
                .then((res) => {
                    return res.data.map((abt_gov) => {
                        return '/about/' + abt_gov.field_slug
                    })
                })
            let abt_gov_alt = axios.get(apiBaseUrl + '/governance-pages')
                .then((res) => {
                    return res.data.map((abt_gov_alt) => {
                        return '/about/governance/' + abt_gov_alt.field_slug
                    })
                })
            let abt_gov_bog = axios.get(apiBaseUrl + '/governance-pages-bog')
                .then((res) => {
                    return res.data.map((abt_gov_bog) => {
                        return '/about/governance/' + abt_gov_bog.field_slug
                    })
                })
            let abt_vpap = axios.get(apiBaseUrl + '/vpap-pages')
                .then((res) => {
                    return res.data.map((abt_vpap) => {
                        return '/about/governance/VP-academic-and-provost/' + abt_vpap.field_slug
                    })
                })
            let abt_vm = axios.get(apiBaseUrl + '/about-vm-pages')
                .then((res) => {
                    return res.data.map((abt_vm) => {
                        return '/about/' + abt_vm.field_slug
                    })
                })

            let aca_ell = axios.get(apiBaseUrl + '/ell-pages')
                .then((res) => {
                    return res.data.map((aca_ell) => {
                        return '/academics/' + aca_ell.field_slug
                    })
                })
            let aca_foa = axios.get(apiBaseUrl + '/foa-child-pages')
                .then((res) => {
                    return res.data.map((aca_foa) => {
                        return '/academics/faculty-of-art/' + aca_foa.field_slug
                    })
                })
            let aca_fod = axios.get(apiBaseUrl + '/fod-child-pages')
                .then((res) => {
                    return res.data.map((aca_fod) => {
                        return '/academics/faculty-of-design/' + aca_fod.field_slug
                    })
                })
            let aca_folassis = axios.get(apiBaseUrl + '/folasis-child-pages')
                .then((res) => {
                    return res.data.map((aca_folassis) => {
                        return '/academics/faculty-of-arts-and-science/' + aca_folassis.field_slug
                    })
                })
            let aca_grad = axios.get(apiBaseUrl + '/grad-academic-programs-pages')
                .then((res) => {
                    return res.data.map((aca_grad) => {
                        return '/academics/graduate-studies/' + aca_grad.field_slug
                    })
                })
            let aca_grad1 = axios.get(apiBaseUrl + '/grad-academic-programs-pages')
                .then((res) => {
                    return res.data.map((aca_grad1) => {
                        return '/academics/' + aca_grad1.field_slug
                    })
                })
            let aca_minors = axios.get(apiBaseUrl + '/minor-programs-pages')
                .then((res) => {
                    return res.data.map((aca_minors) => {
                        return '/academics/minors/' + aca_minors.field_slug
                    })
                })
            let aca_mobilityex = axios.get(apiBaseUrl + '/mobility-exchange-pages')
                .then((res) => {
                    return res.data.map((aca_mobilityex) => {
                        return '/academics/' + aca_mobilityex.field_slug
                    })
                })
            let aca_mobilityexout = axios.get(apiBaseUrl + '/mobility-exchange-pages')
                .then((res) => {
                    return res.data.map((aca_mobilityexout) => {
                        return '/academics/mobility-exchange/' + aca_mobilityexout.field_slug
                    })
                })
            let aca_undergrad = axios.get(apiBaseUrl + '/undergrad-academic-programs-pages')
                .then((res) => {
                    return res.data.map((aca_undergrad) => {
                        return '/academics/undergraduate-studies/' + aca_undergrad.field_slug
                    })
                })
            let aca_wac = axios.get(apiBaseUrl + '/wac-pages')
                .then((res) => {
                    return res.data.map((aca_wac) => {
                        return '/academics/' + aca_wac.field_slug
                    })
                })
                // let aca_fac = axios.get('https://ultima-its.ocadu.ca/bios.json')
            let aca_fac = axios.get('https://ultima7-its.ocadu.ca/bios.json')
                .then((res) => {
                    return res.data.map((aca_fac) => {
                        return '/academics/bios/' + aca_fac.username
                    })
                })
            let adm_graduate = axios.get(apiBaseUrl + '/admissions-graduate-child-pages')
                .then((res) => {
                    return res.data.map((adm_graduate) => {
                        return '/admissions/' + adm_graduate.field_slug
                    })
                })
            let adm_programs = axios.get(apiBaseUrl + '/admissions-programs')
                .then((res) => {
                    return res.data.map((adm_programs) => {
                        return '/admissions' + adm_programs.field_slug
                    })
                })
            let adm_childpgs = axios.get(apiBaseUrl + '/admissions-child-pages')
                .then((res) => {
                    return res.data.map((adm_childpgs) => {
                        return '/admissions/' + adm_childpgs.field_slug
                    })
                })
            let adm_segpgs = axios.get(apiBaseUrl + '/admissions-segment-pages')
                .then((res) => {
                    return res.data.map((adm_segpgs) => {
                        return '/admissions/' + adm_segpgs.field_slug
                    })
                })
            let alumni_pgs = axios.get(apiBaseUrl + '/alumni-pages')
                .then((res) => {
                    return res.data.map((alumni_pgs) => {
                        return '/alumni/' + alumni_pgs.field_slug
                    })
                })
            let gallery_pgs = axios.get(apiBaseUrl + '/gallery-pages')
                .then((res) => {
                    return res.data.map((gallery_pgs) => {
                        return '/gallery/' + gallery_pgs.field_slug
                    })
                })
            let research = axios.get(apiBaseUrl + '/research')
                .then((res) => {
                    return res.data.map((research) => {
                        return '/research/' + research.field_slug
                    })
                })
            let ser_aa = axios.get(apiBaseUrl + '/academic-advising-pages')
                .then((res) => {
                    return res.data.map((ser_aa) => {
                        return '/services/academic-advising/' + ser_aa.field_slug
                    })
                })
            let ser_campuslife = axios.get(apiBaseUrl + '/campus-life-pages')
                .then((res) => {
                    return res.data.map((ser_campuslife) => {
                        return '/services/campus-life/' + ser_campuslife.field_slug
                    })
                })
            let ser_indistudents = axios.get(apiBaseUrl + '/indigenous-students-pages')
                .then((res) => {
                    return res.data.map((ser_indistudents) => {
                        return '/services/indigenous-students/' + ser_indistudents.field_slug
                    })
                })
            let careerstories = axios.get(apiBaseUrl + '/career-stories')
                .then((res) => {
                    return res.data.map((careerstories) => {
                        return '/careerstories/' + careerstories.field_slug
                    })
                })
            let ser_cead1 = axios.get(apiBaseUrl + '/cead-pages')
                .then((res) => {
                    return res.data.map((ser_cead1) => {
                        return '/services/centre-for-emerging-artists-and-designers/' + ser_cead1.field_slug
                    })
                })
            let ser_cead2 = axios.get(apiBaseUrl + '/cead-ic-pages')
                .then((res) => {
                    return res.data.map((ser_cead2) => {
                        return '/services/' + ser_cead2.field_slug
                    })
                })
            let ser_facilities = axios.get(apiBaseUrl + '/facilities-pages')
                .then((res) => {
                    return res.data.map((ser_facilities) => {
                        return '/services/facilities/' + ser_facilities.field_slug
                    })
                })
            let ser_fcdc = axios.get(apiBaseUrl + '/fcdc-pages')
                .then((res) => {
                    return res.data.map((ser_fcdc) => {
                        return '/services/faculty-curriculum-development-centre/' + ser_fcdc.field_slug
                    })
                })
            let ser_ds = axios.get(apiBaseUrl + '/disability-services-pages')
                .then((res) => {
                    return res.data.map((ser_ds) => {
                        return '/services/disability-services/' + ser_ds.field_slug
                    })
                })
            let ser_odesi = axios.get(apiBaseUrl + '/odesi-pages')
                .then((res) => {
                    return res.data.map((ser_odesi) => {
                        return '/services/odesi/' + ser_odesi.field_slug
                    })
                })
            let ser_fin_mat = axios.get(apiBaseUrl + '/finance-pages')
                .then((res) => {
                    return res.data.map((ser_fin_mat) => {
                        return '/services/financial-matters/' + ser_fin_mat.field_slug
                    })
                })
            let ser_hw = axios.get(apiBaseUrl + '/student-wellness-pages')
                .then((res) => {
                    return res.data.map((ser_hw) => {
                        return '/services/health-and-wellness/' + ser_hw.field_slug
                    })
                })
            let ser_safety = axios.get(apiBaseUrl + '/safety-pages')
                .then((res) => {
                    return res.data.map((ser_safety) => {
                        return '/services/safety/' + ser_safety.field_slug
                    })
                })
            let ser_studios = axios.get(apiBaseUrl + '/shops-pages')
                .then((res) => {
                    return res.data.map((ser_studios) => {
                        return '/services/' + ser_studios.field_slug
                    })
                })
            let ser_rpp = axios.get(apiBaseUrl + '/shops-pages')
                .then((res) => {
                    return res.data.map((ser_rpp) => {
                        return '/services/studios/' + ser_rpp.field_slug
                    })
                })
            let ser_hr = axios.get(apiBaseUrl + '/hr-pages')
                .then((res) => {
                    return res.data.map((ser_hr) => {
                        return '/services/human-resources/' + ser_hr.field_slug
                    })
                })
            let ser_intl = axios.get(apiBaseUrl + '/international-pages')
                .then((res) => {
                    return res.data.map((ser_intl) => {
                        return '/services/international-students/' + ser_intl.field_slug
                    })
                })
            let ser_rr = axios.get(apiBaseUrl + '/records-pages')
                .then((res) => {
                    return res.data.map((ser_rr) => {
                        return '/services/records-and-registration/' + ser_rr.field_slug
                    })
                })
            let ser_it = axios.get(apiBaseUrl + '/it-services-pages')
                .then((res) => {
                    return res.data.map((ser_it) => {
                        return '/services/it/' + ser_it.field_slug
                    })
                })
            let ser_it_cat = axios.get(apiBaseUrl + '/it-sc-services-pages')
                .then((res) => {
                    return res.data.map((ser_it_cat) => {
                        return '/services/it/' + ser_it_cat.field_slug
                    })
                })
            let ser_library = axios.get(apiBaseUrl + '/library-pages')
                .then((res) => {
                    return res.data.map((ser_library) => {
                        return '/services/library/' + ser_library.field_slug
                    })
                })
            let ser_wlc = axios.get(apiBaseUrl + '/wlc-pages')
                .then((res) => {
                    return res.data.map((ser_wlc) => {
                        return '/services/writing-and-learning-centre/' + ser_wlc.field_slug
                    })
                })
            let ser_wlc1 = axios.get(apiBaseUrl + '/wlc-pages')
                .then((res) => {
                    return res.data.map((ser_wlc1) => {
                        return '/services/writing-and-learning-centre/wlc-services/' + ser_wlc1.field_slug
                    })
                })
            let students = axios.get(apiBaseUrl + '/students-pages')
                .then((res) => {
                    return res.data.map((students) => {
                        return '/students/' + students.field_slug
                    })
                })
            let students_ai = axios.get(apiBaseUrl + '/students-pages')
                .then((res) => {
                    return res.data.map((students_ai) => {
                        return '/students/academic-integrity/' + students_ai.field_slug
                    })
                })
            let students_svs = axios.get(apiBaseUrl + '/students-pages')
                .then((res) => {
                    return res.data.map((students_svs) => {
                        return '/students/sexual-violence-support/' + students_svs.field_slug
                    })
                })
            let students_policies = axios.get(apiBaseUrl + '/students-pages')
                .then((res) => {
                    return res.data.map((students_policies) => {
                        return '/students/student-policies/' + students_policies.field_slug
                    })
                })
            let students_fall = axios.get(apiBaseUrl + '/students-pages')
                .then((res) => {
                    return res.data.map((students_fall) => {
                        return '/students/' + students_fall.field_slug
                    })
                })
                

            return Promise.all([
                about,
                abt_acc,
                abt_gradopen,
                abt_gov,
                abt_gov_alt,
                abt_gov_bog,
                abt_vpap,
                abt_vm,
                aca_ell,
                aca_foa,
                aca_fod,
                aca_folassis,
                aca_grad,
                aca_grad1,
                aca_minors,
                aca_mobilityex,
                aca_mobilityexout,
                aca_undergrad,
                aca_wac,
                aca_fac,
                adm_graduate,
                adm_programs,
                adm_childpgs,
                adm_segpgs,
                alumni_pgs,
                gallery_pgs,
                research,
                ser_aa,
                ser_campuslife,
                ser_indistudents,
                careerstories,
                ser_cead1,
                ser_cead2,
                ser_facilities,
                ser_fcdc,
                ser_ds,
                ser_fin_mat,
                ser_hw,
                ser_safety,
                ser_studios,
                ser_rpp,
                ser_hr,
                ser_intl,
                ser_it,
                ser_it_cat,
                ser_library,
                ser_odesi,
                ser_rr,
                ser_wlc,
                ser_wlc1,
                students,
                students_ai,
                students_svs,
                students_policies,
                students_fall
            ]).then(values => {
                return values.join().split(',');
            })


        }
    }
}
