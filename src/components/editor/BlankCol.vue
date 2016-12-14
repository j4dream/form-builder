<template>
  <div>
    <div v-for="k in keys">
      <div @dragstart="onDragStart" class="drag-item" :data-k="k" draggable="true">{{ k }}</div>
    </div>
  </div>
</template>

<script>
import premake from './premake'

export default {
  data () {
    return {
      keys: Object.keys(premake),
      data: premake
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
