<template>
<div class="mt-5">
  <b-container v-for="post in posts" v-bind:key="post.user_id">
    <div class="intro">
      <span>
        <img style="width: 300px; height: auto; object-fit: fill;" v-if="post.portrait_url" :src="post.portrait_url" :alt="post.name">
        <img v-else src="https://www.ocadu.ca/sites/default/files/design/default.jpg" :alt="post.name">
      </span>
      <span>
        <h1 v-if='post.name != null' class="name">{{post.name}}</h1>
        <h4 v-if='post.email != null' class="email"><a :href='"mailto:"+post.email' class="email">{{post.email}}</a></h4>
        <h2 v-if='post.title != null' class="title">{{ post.title }}</h2>
        <h2 v-if='post.department != null' class="department">{{ post.department }}</h2>
        <div v-if="(post.detail != null && Object.keys(post.detail.links).length !== 0)" class="links">
          <ul>
          <li v-for="(value, i) in post.detail.links" v-bind:key="`links`+i" class="item">
            <span v-if='(value["title"] != null && value["url"] != null)' class="link"><a :href="value['url']" target="_blank">&raquo; {{ value["title"] }}</a></span>
          </li>
          </ul>
        </div>
      </span>
    </div>
    
    <div class="profile" v-html="post.profile"></div>

    <div class="detail Accordion" v-if="(post.source === 'orcid' && post.detail != null)" data-allow-toggle data-allow-multiple>

      <section v-if="Object.keys(post.detail.works).length !== 0" class="section">
        <button aria-controls="sect1" aria-expanded="true" class="Accordion-trigger" id="sect1-accordion">
          <span class="Accordion-title">Works</span><span class="Accordion-icon">&nbsp;</span>
        </button>
        <div aria-labelledby="sect1-accordion" class="Accordion-panel" id="sect1" role="region">
        <div v-for="(value, i) in post.detail.works" v-bind:key="`works`+i" class="item">
          <h5 v-if='value["title"] != null' class="title">{{ value["title"] }}</h5>
          <h6 v-if='value["subtitle"] != null' class="subtitle">{{ value["subtitle"] }}</h6>
          <h6 v-if='value["journal-title"] != null' class="journal-title">{{ value["journal-title"] }}</h6>
          <span v-if='value["publication-date"] != null'>
          <p v-if='value["publication-date"]["year"] != null' class="published">Published 
            <span v-if='value["publication-date"]["month"] != null'>{{ toMonthName(value["publication-date"]["month"]["value"]) }} </span>
            <span v-if='value["publication-date"]["day"] != null'>{{ value["publication-date"]["day"]["value"] }}, </span>
            <span v-if='value["publication-date"]["year"] != null'>{{ value["publication-date"]["year"]["value"] }}</span>
          </p>
          </span>
          <p v-if='value["url"] != null'><a v-bind:href='value["url"]' class="url">View Article &raquo;</a></p>
          <p v-if='value["short-description"] != null' class="description">
            <span v-html='value["short-description"]'></span>
          </p>
        </div>
        </div>
      </section>

      <section v-if='Object.keys(post.detail.fundings).length !== 0' class="fundings">
        <button aria-controls="sect2" aria-expanded="true" class="Accordion-trigger" id="sect2-accordion">
          <span class="Accordion-title">Funding</span><span class="Accordion-icon">&nbsp;</span>
        </button>
        <div aria-labelledby="sect2-accordion" class="Accordion-panel" id="sect2" role="region">
        <div v-for="(value, i) in post.detail.fundings" v-bind:key="`fundings`+i" class="item">
          <h5 v-if='value["title"] != null' class="title">{{ value["title"] }}</h5>
          <h6 v-if='value["organization"]["address"] != null' class="location">
            <span v-if='value["organization"]["name"] != null'>{{ value["organization"]["name"] }}</span>
            <!-- <span v-if='value["organization"]["address"]["city"] != null'>{{ value["organization"]["address"]["city"] }}</span>,
            <span v-if='value["organization"]["address"]["country"] != null'>{{ toCountryName(value["organization"]["address"]["country"]) }}</span> -->
          </h6>
          <span v-if='value["amount"] != null'>
            <h6 v-if='value["amount"]["value"] != null' class="amount">${{ parseFloat(value["amount"]["value"]).toFixed(0) }} {{ value["amount"]["currency-code"] }}</h6>
          </span>
          <p v-if='(value["start-date"] != null || value["end-date"] != null)' class="date">
            <span v-if='value["start-date"] != null'>
              <span v-if='(value["start-date"]["month"] != null)'>{{ toMonthName(value["start-date"]["month"]["value"]) }}</span> <span v-if='(value["start-date"]["year"] != null)'>{{ value["start-date"]["year"]["value"] }} to </span>
            </span>
            <span v-if='value["end-date"] != null'>
              <span v-if='(value["end-date"]["month"] != null)'>{{ toMonthName(value["end-date"]["month"]["value"]) }}</span> <span v-if='(value["end-date"]["year"] != null)'>{{ value["end-date"]["year"]["value"] }}</span>
            </span>
            <span v-else>Present</span>
          </p>
          <p v-if='value["short-description"] != null' v-html='value["short-description"]' class="description"></p>
        </div>
        </div>
      </section>

      <section v-if='Object.keys(post.detail.employment).length !== 0' class="employment">
        <button aria-controls="sect3" aria-expanded="true" class="Accordion-trigger" id="sect3-accordion">
          <span class="Accordion-title">Employment</span><span class="Accordion-icon">&nbsp;</span>
        </button>
        <div aria-labelledby="sect3-accordion" class="Accordion-panel" id="sect3" role="region">
        <div v-for="(value, i) in post.detail.employment" v-bind:key="`employment`+i" class="item">
          <h5 v-if='value["organization"]["name"] != null' class="org">{{ value["organization"]["name"] }}</h5>
          <h6 v-if='value["organization"]["address"] != null' class="location">
            <span v-if='value["organization"]["address"]["city"] != null'>{{ value["organization"]["address"]["city"] }}</span>,
            <span v-if='value["organization"]["address"]["country"] != null'>{{ toCountryName(value["organization"]["address"]["country"]) }}</span>
          </h6>
          <h6 v-if='value["role-title"] != null' class="dept">{{ value["role-title"] }}<span v-if='value["department-name"] != null'>, {{ value["department-name"] }}</span></h6>
          <p v-if='(value["start-date"] != null || value["end-date"] != null)' class="date">
            <span v-if='value["start-date"] != null'>
              <span v-if='(value["start-date"]["month"] != null)'>{{ toMonthName(value["start-date"]["month"]["value"]) }}</span> <span v-if='(value["start-date"]["year"] != null)'>{{ value["start-date"]["year"]["value"] }} to </span>
            </span>
            <span v-if='value["end-date"] != null'>
              <span v-if='(value["end-date"]["month"] != null)'>{{ toMonthName(value["end-date"]["month"]["value"]) }}</span> <span v-if='(value["end-date"]["year"] != null)'>{{ value["end-date"]["year"]["value"] }}</span>
            </span>
            <span v-else>Present</span>
          </p>
        </div>
        </div>
      </section>

      <section v-if="Object.keys(post.detail.education).length !== 0" class="education">
        <button aria-controls="sect4" aria-expanded="true" class="Accordion-trigger" id="sect4-accordion">
          <span class="Accordion-title">Education</span><span class="Accordion-icon">&nbsp;</span>
        </button>
        <div aria-labelledby="sect4-accordion" class="Accordion-panel" id="sect4" role="region">
        <div v-for="(value, i) in post.detail.education" v-bind:key="`education`+i" class="item">
          <h5 v-if='value["organization"]["name"] != null' class="org">{{ value["organization"]["name"] }}</h5>
          <h6 v-if='value["organization"]["address"] != null' class="location">
            <span v-if='value["organization"]["address"]["city"] != null'>{{ value["organization"]["address"]["city"] }}</span>,
            <span v-if='value["organization"]["address"]["country"] != null'>{{ toCountryName(value["organization"]["address"]["country"]) }}</span>
          </h6>
          <h6 v-if='value["department-name"] != null' class="dept">{{ value["department-name"] }}, {{ value["role-title"] }}</h6>
          <p v-if='(value["start-date"] != null || value["end-date"] != null)' class="date">
            <span v-if='value["start-date"] != null'>
              <span v-if='(value["start-date"]["month"] != null)'>{{ toMonthName(value["start-date"]["month"]["value"]) }}</span> <span v-if='(value["start-date"]["year"] != null)'>{{ value["start-date"]["year"]["value"] }} to </span>
            </span>
            <span v-if='value["end-date"] != null'>
              <span v-if='(value["end-date"]["month"] != null)'>{{ toMonthName(value["end-date"]["month"]["value"]) }}</span> <span v-if='(value["end-date"]["year"] != null)'>{{ value["end-date"]["year"]["value"] }}</span>
            </span>
            <span v-else>Present</span>
          </p>
        </div>
        </div>
      </section>

      <section v-if='Object.keys(post.detail.qualifications).length !== 0' class="qualifications">
        <button aria-controls="sect5" aria-expanded="true" class="Accordion-trigger" id="sect5-accordion">
          <span class="Accordion-title">Qualifications</span><span class="Accordion-icon">&nbsp;</span>
        </button>
        <div aria-labelledby="sect5-accordion" class="Accordion-panel" id="sect5" role="region">
        <div v-for="(value, i) in post.detail.qualifications" v-bind:key="`qualifications`+i" class="item">
          <h5 v-if='value["organization"]["name"] != null' class="org">{{ value["organization"]["name"] }}</h5>
          <h6 v-if='value["organization"]["address"] != null' class="location">
            <span v-if='value["organization"]["address"]["city"] != null'>{{ value["organization"]["address"]["city"] }}</span>,
            <span v-if='value["organization"]["address"]["country"] != null'>{{ toCountryName(value["organization"]["address"]["country"]) }}</span>
          </h6>
          <h6 v-if='value["department-name"] != null' class="dept">{{ value["department-name"] }}, {{ value["role-title"] }}</h6>
          <p v-if='(value["start-date"] != null || value["end-date"] != null)' class="date">
            <span v-if='value["start-date"] != null'>
              <span v-if='(value["start-date"]["month"] != null)'>{{ toMonthName(value["start-date"]["month"]["value"]) }}</span> <span v-if='(value["start-date"]["year"] != null)'>{{ value["start-date"]["year"]["value"] }} to </span>
            </span>
            <span v-if='value["end-date"] != null'>
              <span v-if='(value["end-date"]["month"] != null)'>{{ toMonthName(value["end-date"]["month"]["value"]) }}</span> <span v-if='(value["end-date"]["year"] != null)'>{{ value["end-date"]["year"]["value"] }}</span>
            </span>
            <span v-else>Present</span>
          </p>
        </div>   
        </div>     
      </section>

      <section v-if='Object.keys(post.detail.distinctions).length !== 0' class="distinctions">
        <button aria-controls="sect6" aria-expanded="true" class="Accordion-trigger" id="sect6-accordion">
          <span class="Accordion-title">Distinctions</span><span class="Accordion-icon">&nbsp;</span>
        </button>
        <div aria-labelledby="sect6-accordion" class="Accordion-panel" id="sect6" role="region">
        <div v-for="(value, i) in post.detail.distinctions" v-bind:key="`distinctions`+i" class="item">
          <h5 v-if='value["role-title"] != null' class="dept">{{ value["role-title"] }}<span v-if='value["department-name"] != null'>, {{ value["department-name"] }}</span></h5>
          <h6 v-if='value["organization"]["name"] != null' class="org">{{ value["organization"]["name"] }}</h6>
          <h6 v-if='value["organization"]["address"] != null' class="location">
            <span v-if='value["organization"]["address"]["city"] != null'>{{ value["organization"]["address"]["city"] }}</span>,
            <span v-if='value["organization"]["address"]["country"] != null'>{{ toCountryName(value["organization"]["address"]["country"]) }}</span>
          </h6>
          <p v-if='(value["start-date"] != null || value["end-date"] != null)' class="date">
            <span v-if='value["start-date"] != null'>
              <span v-if='(value["start-date"]["month"] != null)'>{{ toMonthName(value["start-date"]["month"]["value"]) }}</span> <span v-if='(value["start-date"]["year"] != null)'>{{ value["start-date"]["year"]["value"] }} to </span>
            </span>
            <span v-if='value["end-date"] != null'>
              <span v-if='(value["end-date"]["month"] != null)'>{{ toMonthName(value["end-date"]["month"]["value"]) }}</span> <span v-if='(value["end-date"]["year"] != null)'>{{ value["end-date"]["year"]["value"] }}</span>
            </span>
            <span v-else>Present</span>
          </p>
        </div>   
        </div>  
      </section>

      <section v-if='Object.keys(post.detail.invited_positions).length !== 0' class="invitedpositions">
        <button aria-controls="sect7" aria-expanded="true" class="Accordion-trigger" id="sect7-accordion">
          <span class="Accordion-title">Invited Positions</span><span class="Accordion-icon">&nbsp;</span>
        </button>
        <div aria-labelledby="sect7-accordion" class="Accordion-panel" id="sect7" role="region">
        <div v-for="(value, i) in post.detail.invited_positions" v-bind:key="`invitedpositions`+i" class="item">
          <h5 v-if='value["role-title"] != null' class="dept">{{ value["role-title"] }}<span v-if='value["department-name"] != null'>, {{ value["department-name"] }}</span></h5>
          <h6 v-if='value["organization"]["name"] != null' class="org">{{ value["organization"]["name"] }}</h6>
          <h6 v-if='value["organization"]["address"] != null' class="location">
            <span v-if='value["organization"]["address"]["city"] != null'>{{ value["organization"]["address"]["city"] }}</span>,
            <span v-if='value["organization"]["address"]["country"] != null'>{{ toCountryName(value["organization"]["address"]["country"]) }}</span>
          </h6>
          <p v-if='(value["start-date"] != null || value["end-date"] != null)' class="date">
            <span v-if='value["start-date"] != null'>
              <span v-if='(value["start-date"]["month"] != null)'>{{ toMonthName(value["start-date"]["month"]["value"]) }}</span> <span v-if='(value["start-date"]["year"] != null)'>{{ value["start-date"]["year"]["value"] }} to </span>
            </span>
            <span v-if='value["end-date"] != null'>
              <span v-if='(value["end-date"]["month"] != null)'>{{ toMonthName(value["end-date"]["month"]["value"]) }}</span> <span v-if='(value["end-date"]["year"] != null)'>{{ value["end-date"]["year"]["value"] }}</span>
            </span>
            <span v-else>Present</span>
          </p>
        </div>
        </div>
      </section>

      <section v-if='Object.keys(post.detail.memberships).length !== 0' class="memberships">
        <button aria-controls="sect8" aria-expanded="true" class="Accordion-trigger" id="sect8-accordion">
          <span class="Accordion-title">Memberships</span><span class="Accordion-icon">&nbsp;</span>
        </button>
        <div aria-labelledby="sect8-accordion" class="Accordion-panel" id="sect8" role="region">
        <div v-for="(value, i) in post.detail.memberships" v-bind:key="`memberships`+i" class="item">
          <h5 v-if='value["role-title"] != null' class="dept">{{ value["role-title"] }}<span v-if='value["department-name"] != null'>, {{ value["department-name"] }}</span></h5>
          <h6 v-if='value["organization"]["name"] != null' class="org">{{ value["organization"]["name"] }}</h6>
          <h6 v-if='value["organization"]["address"] != null' class="location">
            <span v-if='value["organization"]["address"]["city"] != null'>{{ value["organization"]["address"]["city"] }}</span>,
            <span v-if='value["organization"]["address"]["country"] != null'>{{ toCountryName(value["organization"]["address"]["country"]) }}</span>
          </h6>
          <p v-if='(value["start-date"] != null || value["end-date"] != null)' class="date">
            <span v-if='value["start-date"] != null'>
              <span v-if='(value["start-date"]["month"] != null)'>{{ toMonthName(value["start-date"]["month"]["value"]) }}</span> <span v-if='(value["start-date"]["year"] != null)'>{{ value["start-date"]["year"]["value"] }} to </span>
            </span>
            <span v-if='value["end-date"] != null'>
              <span v-if='(value["end-date"]["month"] != null)'>{{ toMonthName(value["end-date"]["month"]["value"]) }}</span> <span v-if='(value["end-date"]["year"] != null)'>{{ value["end-date"]["year"]["value"] }}</span>
            </span>
            <span v-else>Present</span>
          </p>
        </div>
        </div>
      </section>      
    
      
      <section v-if='Object.keys(post.detail.services).length !== 0' class="services">
        <button aria-controls="sect9" aria-expanded="true" class="Accordion-trigger" id="sect9-accordion">
          <span class="Accordion-title">Services</span><span class="Accordion-icon">&nbsp;</span>
        </button>
        <div aria-labelledby="sect9-accordion" class="Accordion-panel" id="sect9" role="region">
        <div v-for="(value, i) in post.detail.services" v-bind:key="`services`+i" class="item">
          <h5 v-if='value["role-title"] != null' class="dept">{{ value["role-title"] }}<span v-if='value["department-name"] != null'>, {{ value["department-name"] }}</span></h5>
          <h6 v-if='value["organization"]["name"] != null' class="org">{{ value["organization"]["name"] }}</h6>
          <h6 v-if='value["organization"]["address"] != null' class="location">
            <span v-if='value["organization"]["address"]["city"] != null'>{{ value["organization"]["address"]["city"] }}</span>,
            <span v-if='value["organization"]["address"]["country"] != null'>{{ toCountryName(value["organization"]["address"]["country"]) }}</span>
          </h6>
        </div>
        </div>
      </section>
    
    </div> <!-- end if (source == 'orcid') -->
  </b-container>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'biosSlug',
    layout: 'default',
    components: {
    },

    head() {
      return {
        title: 'OCAD University - ' + this.postTitle,
        meta: [{
          hid: 'description',
          name: 'description',
          content: this.postMetaDesc
        },
      ]
      }
    },
  data () {
    return {
      posts: '',
      ep: 'https://ultima7-its.ocadu.ca/bios.json',
      postTitle: '',
      postMetaDesc: '',
    }
  },
  created() {
    this.getAllPosts();
  },
  mounted() {
    this.$accessibleAccordion();
  },
  updated() {
    this.$accessibleAccordion();
  },
  methods: {
    getAllPosts() {
      const slug = this.$route.params.slug
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data.filter(post => post.username == slug)
          this.postTitle = this.posts[0].name
          this.postMetaDesc = this.posts[0].profile

          // remove duplicates
          this.posts = Object.values(this.posts.reduce((r, o) => {
            r[o.id] = r[o.id] || o;
            return r;
            },{}));

        })
        .catch(error => {
          console.log('-----error------- ' + slug);
          console.log(error);
        })
    },
    toMonthName(monthNumber) {
      const date = new Date();
      date.setMonth(monthNumber - 1);
      return date.toLocaleString('en-US', {
        month: 'short',
      });
    },
    toCountryName(countryCode) {
      const countryName = new Intl.DisplayNames(
        ['en'], {type: 'region'}
      )
      return countryName.of(countryCode)
    },
  }
}
</script>
<style lang="scss" scoped>

h4 {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
}

.links ul {
  margin: 0;
  padding: 0 0 1rem 0;
  
  li {
    list-style-type: none;
    margin: 0;
    padding: 0;
    line-height: 1.2rem;

    a {
      color: #999;
      font-size: 0.8rem;
      text-transform: uppercase;
      font-family: "gotham_bold", Arial, sans-serif;
    }
  }
}

.intro {
  display: inline-flex;

  span {
    align-self: flex-end;
  }

  img {
    margin-right: 2rem;
    margin-bottom: 1rem;
  }

  h2 {
    text-transform: uppercase;
    font-size: 1.15rem;
    color: #666;
  }
}

.profile {
  margin: 2rem auto 3rem auto;
}

.Accordion {
  margin-bottom: 8rem;
  border-bottom: 1px solid #CCC;
}

section {
  border-top: 1px solid #CCC;

  .journal-title {
    font-style: italic;
  }

  div.item {
    margin: 0 0 3rem 0;
  }

  p {
    margin: 0 0 0.25rem 0;

    &.description {
      font-size: 1rem;
    }

    &.published {
      font-family: "gotham_bold", Arial, sans-serif;
      text-transform: uppercase;
      font-size: 0.9rem;
      color: #999;
    }
  }

  .location {
    text-transform: uppercase;
    font-size: 0.9rem;
    color: #999;
    margin-top: 0;
  }

}

@media only screen and (max-width: 660px) {
  .intro {
    display: block;
  }
}

</style>
