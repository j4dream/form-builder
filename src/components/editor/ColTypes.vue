<template>
  <div>
    <div v-for="k in keys">
      <div @dragstart="onDragStart" class="drag-item" :data-k="k" draggable="true">{{ k }}</div>
    </div>
  </div>
</template>

<script>
import structure from './structure'
import contents from './contents'

export default {
  props: ['type'],
  data () {
    if (this.type === 'contents') {
      return {
        keys: Object.keys(contents),
        data: contents
      }
    }
    return {
      keys: Object.keys(structure),
      data: structure
    }
  },
  methods: {
    onDragStart (e) {
      var dt = e.dataTransfer
      dt.setData('type', JSON.stringify(this.data[e.target.dataset.k]))
    }
  }
}
</script>
