<template>
  <div>
    <div v-for="k in keys">
      <div
        @dragstart="onDragStart"
        class="drag-item" 
        :data-k="k"
        draggable="true"
      >
        <i :class="icon[k]"></i>
      </div>
    </div>
  </div>
</template>

<script>
import structure from './structure'
import contents from './contents'
import iconMap from './iconMap'

export default {
  props: ['type'],
  data () {
    if (this.type === 'contents') {
      return {
        keys: Object.keys(contents),
        data: contents,
        icon: iconMap
      }
    }
    return {
      keys: Object.keys(structure),
      data: structure,
      icon: iconMap
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

<style>
.drag-item {
  height: 50px;
  font-size: 40px;
  border: 1px solid #D3DCE6;
  background: white;
  border-radius: 3px;
  margin-bottom: 8px;
}
</style>
