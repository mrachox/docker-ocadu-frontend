<template>
  <div>
    <!-- <p style="color: white">{{ crumbs }}</p>
    <br><br> -->
    <div v-if="crumbs">
       <b-breadcrumb :items="crumbs"/>
    </div>
  </div>
</template>
<script>

export default {
  computed: {
    crumbs: function() {
      let pathArray = this.$route.path.split("/")
      pathArray.shift()
      let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        breadcrumbArray.push({
          path: path,
          to: breadcrumbArray[idx - 3] ? "/" + breadcrumbArray[idx - 3].path + "/" + breadcrumbArray[idx - 2].path + "/" + breadcrumbArray[idx - 1].path + "/" + path
          : breadcrumbArray[idx - 2] ? "/" + breadcrumbArray[idx - 2].path + "/" + breadcrumbArray[idx - 1].path + "/" + path
          : breadcrumbArray[idx - 1] ? "/" + breadcrumbArray[idx - 1].path + "/" + path
          : "/" + path,
          text: this.$route.matched.fullPath || path.replace(/-/g, ' ')
        });
        return breadcrumbArray;
      }, [])
      return breadcrumbs;
    },

  },
  // created() {
  //   this.checkBreadcrumb()
  // },
  methods: {
    // checkBreadcrumb(){
    //   var breadcrumbs = document.querySelector('.breadcrumb .breadcrumb-item.active span')
    //   console.log(breadcrumbs)
    // }
  }
};
</script>
<style lang="scss" scoped>
/* .container{
  margin: auto;
  width: 50%
} */

.breadcrumb {
    text-transform: uppercase;
    font-size: .85em;
    font-weight: bold;
    border-radius: 0;
    background-color: white;
    margin-bottom: 0;
}
</style>
