<template>
    <b-container class="my-5">
      <h1 class="text-center">Service Alerts</h1>
      <emergencyAlerts />
    </b-container >
</template>

<script>
import emergencyAlerts from '@/components/EmergencyAlerts'

export default {
  name: 'alerts',
  head() {
    return {
      title: 'Alerts',

    }
  },
  components: {
    emergencyAlerts
  },
  layout: 'default-services',
}
</script>
<style lang="scss">

</style>
