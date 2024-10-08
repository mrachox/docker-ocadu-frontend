<template>
  <div class="component--hero">
    <!-- <img src="~assets/spotlight-about-location-contact-sharpcentre.jpg" alt="ph"> -->
    <!-- <img src="http://placehold.it/1200x600" alt="ph"> -->
    <!-- <img :src="variableImg" alt="ph" class="w-100"> -->
    <b-card
      v-if="variableImg"
      overlay
      :img-src="variableImg"
      :img-alt="variableText"
      text-variant="white"
      :title="variableText"
     >
      <b-card-text v-if="variableSubhead">
            {{ variableSubhead }}
      </b-card-text>

      <b-button class="stretched-link text-light" :href="variableLink" variant="more" v-if="variableLinkText">{{ variableLinkText }}</b-button>

    </b-card>

    <p class="p-2 text-right credit" v-if="variableCredit">{{ variableCredit }}</p>
  </div>
</template>

<script>
export default {
  props: ['variableText', 'variableImg', 'variableSubhead', 'variableCredit', 'variableLink', 'variableLinkText'],
}
</script>

<style lang="scss">

</style>
