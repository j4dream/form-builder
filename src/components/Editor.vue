<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="page-view" @dragover.prevent @drop="dropBlank">
          <el-row v-for="key in json.keys">
            <template v-for="(col, index) in json[key]">
              <el-col :span="col.span">
                <div :data-col="index" :data-key="key" @click="selectItem">
                  <div v-if="col.type == 'image'"><img :src="col.url" width="100%"></div>
                  <div v-if="col.type == 'text'"><p>{{col.text}}</p></div>
                  <div v-if="col.type == 'blank'" :data-key="key" :data-col="index" @dragover.prevent @drop="dropContent" class="bg-purple">请选择类型</div>
                </div>
              </el-col>
            </template>
          </el-row>
        </div>
      </el-col>
      <el-col :span="8">
        <div>
          <el-tabs class="full-w" type="border-card">
            <el-tab-pane label="结构">
              <col-types></col-types>
            </el-tab-pane>
            <el-tab-pane label="内容">
              <col-types type="contents"></col-types>
            </el-tab-pane>
            <el-tab-pane label="属性">
              <propertys :type="editing.type"></propertys>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ColTypes from './editor/ColTypes'
import Propertys from './editor/Propertys'

export default {
  components: {
    ColTypes,
    Propertys
  },
  methods: {
    dropBlank (e) {
      this.$store.commit('addRow', { data: this._getDTData(e) })
    },
    dropContent (e) {
      e.stopPropagation()
      let { key, col } = e.currentTarget.dataset
      this.$store.commit('updateCol', { key, col, data: this._getDTData(e) })
    },
    selectItem (e) {
      e.stopPropagation()
      let { col, key } = e.currentTarget.dataset
      this.$store.commit('editingCol', { key, col, type: this.json[key][col].type })
    },
    _getDTData (e) {
      var dt = e.dataTransfer
      var node = dt.getData('type')
      return JSON.parse(node)
    }
  },
  computed: mapState({
    json: state => state.json,
    editing: state => state.editing
  })
}
</script>

<style scoped>
.container {
  margin: 25px;
}
.page-view {
  min-height: 300px;
  padding: 12px;
  box-shadow: 0 0 13px #999;
}
.bg-purple {
  background: #d3dce6;
  min-height: 50px;
  text-align: center;
  border: 1px dotted #20a0ff;
}
</style>