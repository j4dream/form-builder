<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="page-view" @dragover.prevent @drop="drop">
          <el-row v-for="item in json.keys">
            <template v-for="col in json[item]">
              <el-col :span="col.span">
                <div v-if="col.type == 'image'"><img :src="col.background" width="100%"></div>
                <div v-if="col.type == 'text'"><p>{{col.text}}</p></div>
                <div v-if="col.type == 'blank'" class="bg-purple">请选择类型</div>
              </el-col>
            </template>
          </el-row>
        </div>
      </el-col>
      <el-col :span="8">
        <div>
          <el-tabs class="full-w" type="border-card">
            <el-tab-pane label="结构">
              <blank-col></blank-col>
            </el-tab-pane>
            <el-tab-pane label="内容">内容</el-tab-pane>
            <el-tab-pane label="自定义">自定义</el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BlankCol from './editor/BlankCol'

export default {
  components: {
    BlankCol
  },
  methods: {
    drop (e) {
      console.log('drop: ', e)
      var dt = e.dataTransfer
      var node = dt.getData('type')
      var identify = Date.now().toString()
      this.json[identify] = JSON.parse(node)
      this.json.keys.push(identify)
    }
  },
  data () {
    return {
      json: {
        row1: [
          {
            span: 10,
            type: 'blank'
          },
          {
            span: 14,
            type: 'blank'
          }
        ],
        row2: [{
          span: 24,
          type: 'text',
          text: '初始化'
        }],
        header: [{
          span: 24,
          type: 'image',
          background: 'https://unsplash.it/725/300/?random'
        }],
        keys: ['header', 'row1', 'row2']
      }
    }
  }
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