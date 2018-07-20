import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const defaultMetric = {
  icon: '❓',
  name: '',
  id: null
}

export default new Vuex.Store({
  state: {
    metrics: [],
    activeTab: 'home',
    showMetricEditModal: false,
    editedMetric: defaultMetric,
    records: []
  },
  mutations: {
    setActiveTab(state, key) {
      state.activeTab = key
    },
    setShowMetricEditModal(state, show) {
      if (!show) {
        state.editedMetric = defaultMetric
      }
      state.showMetricEditModal = show
    },
    setEditedMetric(state, payload) {
      state.editedMetric = Object.assign({}, state.editedMetric, payload)
    },
    saveMetric(state) {
      if (state.editedMetric.id) {
        var index = state.metrics.findIndex(item => item.id === state.editedMetric.id)
        Vue.set(state.metrics, index, state.editedMetric)
      }
      else {
        state.editedMetric.id = Date.now()
        state.metrics.push(state.editedMetric)
      }
    },
    iterate(state, record) {
      state.records.push(record)
    }
  },
  getters: {
    stats(state) {
      return state.metrics.reduce((totals, metric) => {
        totals[metric.id] = state.records
          .filter(record => record.metric === metric.id)
          .length
        return totals
      }, {})
    }
  },
  plugins: [createPersistedState()]
})
