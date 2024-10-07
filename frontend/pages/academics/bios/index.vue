<template>
<div class="mt-5 mb-5">
  <h2 class="ml-5 mb-5">OCADU Faculty Bios</h2>
  <b-container>
    <b-row class="my-5">
      <b-col sm="12" md="8">
        <label for="programguidesearch" style="">Name</label>
        <input type="text" class="form-control" id="programguidesearch" v-model="search" placeholder="Find a faculty member" />
      </b-col>
      <b-col sm="12" md="4">
      <div>
        <label for="dept_type">Department</label>
        <select id="dept_type" class="filters" v-model="deptFilter">
          <option value="all">All</option>
          <option value="Faculty of Art">Faculty of Art</option>
          <option value="Faculty of Design">Faculty of Design</option>
          <option value="Faculty of Arts & Science">Faculty of Arts & Science</option>
        </select>
      </div>
      </b-col>
    </b-row>
    <b-row class="mb-5">
      <b-col sm="12" md="2">
        <b-button @click="resetSearch" variant="quicklink" class="text-uppercase d-block">RESET</b-button>
      </b-col>
    </b-row>
    <b-row>
      <div v-for="post in filteredPosts" v-bind:key="post.id" class="bio">
        <!-- <p>{{ post.id }}</p> -->
        <nuxt-link :to="'/academics/bios/' + post.username">
          <img style="" v-if="post.portrait_url" :src="post.portrait_url" :alt="post.name">
          <img v-else src="https://www.ocadu.ca/sites/default/files/design/default.jpg" :alt="post.name">
        </nuxt-link>
        <h4 v-if='post.name != null' ><nuxt-link :to="'/academics/bios/' + post.username">{{ post.name }}</nuxt-link></h4>
        <h5 v-if='post.title != null' ><nuxt-link :to="'/academics/bios/' + post.username">{{ post.title }}</nuxt-link></h5>
        <h5 v-if='post.department != null' ><nuxt-link :to="'/academics/bios/' + post.username">{{ post.department }}</nuxt-link></h5>
        <!-- <p>{{ post.sortable_name }}</p> -->
      </div>
    </b-row>
  </b-container>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'biosIndex',
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
  data() {
    return {
      search: '',
      posts: [],
      deptFilter: 'all',
      ep: 'https://ultima7-its.ocadu.ca/bios.json',
      postTitle: '',
      postMetaDesc: '',
      postKeywords: '',
    }
  },
  mounted() {
    this.getAllPosts();
  },
  methods: {
    resetSearch: function(e) {
      e.preventDefault()
      this.search = '',
      this.deptFilter = 'all'
    },
    getAllPosts() {
      const slug = this.$route.fullPath
      axios.get(this.ep)
        .then(response => {
          this.posts = response.data
          this.postTitle = 'OCADU Faculty Bios'
          this.postMetaDesc = this.posts[0].field_ip_meta_description
          this.postKeywords = this.posts[0].field_ip_meta_keywords
          
          // sort data
          this.posts = this.posts.sort((a, b) => a.sortable_name - b.sortable_name)

          // this.posts = Object.values(this.posts.reduce((r, o) => {
          //   r[o.id] = r[o.id] || o;
          //   return r;
          //   },{}));

        })
        .catch(error => {
          // console.log('-----error------- ' + slug);
          console.log(error);
        })
    },
  },
  computed: {
    filteredPosts: function() {
      if (this.search.length == 0) {
        const deptFilter = post =>
          (this.deptFilter == 'all') ||
          (post.department === this.deptFilter)
        const reducer = (accumulator, post) => {
          if (deptFilter(post))
            accumulator.push(post)
          return accumulator
        }
      return this.posts.reduce(reducer, [])
    } else {
      // search
      return this.posts.filter(post => {
        return post.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
}
</script>
<style lang="scss" scoped>
.bio {
  flex-basis: 33.333333%;
  padding: 1rem;

  img {
    width: 100%;
    height: auto;
  }
}

a:hover {
  text-decoration: none;
}

h4 {
  font-size: 1.2rem;
    line-height: 1.4rem;
  margin-top: 0.75rem;
}

h5 {
  text-transform: uppercase;
  font-size: 0.85rem;
    line-height: 1rem;

  a {
    color: #999 !important;
  }
}

.form-control {
  border: 1px solid #000;
  border-radius: 0;
}

.filters {
  height: 2.6rem;
}

@media screen and (max-width: 800px) {
  .bio {
    flex-basis: 50%;
    padding: 1rem;

    img {
      width: 100%;
      height: auto;
    }
  }

}

</style>
