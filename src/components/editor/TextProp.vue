<template>
  <div>
    <textarea name="" id="" cols="30" rows="10"  @input="updateMessage">{{ data ? data.text : '' }}</textarea>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    data (state) {
      return state.editing
    }
  }),
  methods: {
    updateMessage (e) {
      const data = {
        text: e.target.value.trim()
      }
      const { key, col } = this.data
      this.$store.commit('updateCol', { key, col, data })
    }
  }
}
</script>
