import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
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
      url: 'https://unsplash.it/725/300/?random'
    }],
    keys: ['header', 'row1', 'row2']
  }
}

const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  },
  addRow (state, { data }) {
    let id = Date.now()
    Vue.set(state.json, id, data)
    state.json.keys.push(id)
  },
  updateCol (state, { key, col, data }) {
    Object.assign(state.json[key][col], data)
  }
}

export default new Vuex.Store({
  state,
  mutations
})
