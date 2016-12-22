<template>
  <component v-bind:is="currentView">
  </component>
</template>

<script>
import TextProp from './TextProp'
import Temp from './Temp'

export default {
  props: ['type'],
  components: {
    textProp: TextProp,
    tempProp: Temp
  },
  computed: {
    currentView () {
      if (!this.type) return
      return this.type === 'blank' ? 'tempProp' : `${this.type}Prop`
    }
  }
}
</script>
