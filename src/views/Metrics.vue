<template>
  <div>
    <header class="bar bar-nav">
      <h1 class="title">Metriky</h1>
      <a class="icon icon-plus pull-right" v-on:click="showEditModal = true"></a>
    </header>

    <div class="content">
      <div v-if="metrics.length === 0" class="empty">
        <p>Založte první počítanou metriku.</p>
      </div>

      <p class="content-padded">Upravit metriku</p>
      <ul v-if="metrics.length" class="table-view">
        <li v-for="metric in metrics" class="table-view-cell">
          <a class="navigate-right" v-on:click="editMetric(metric)">
            <span class="metric-icon">{{ metric.icon }}</span>
            &ensp;
            {{ metric.name }}
          </a>
        </li>
      </ul>
    </div>

    <div class="modal" v-bind:class="{ active: showEditModal }">
      <edit-metric></edit-metric>
    </div>
  </div>
</template>

<script>
import editMetric from '../components/EditMetric.vue'

export default {
  name: 'metrics',
  methods: {
    editMetric(metric) {
      this.$store.commit('setEditedMetric', {
        id: metric.id,
        icon: metric.icon,
        name: metric.name,
      })
      this.showEditModal = true
    }
  },
  computed: {
    metrics() {
      return this.$store.state.metrics
    },
    showEditModal: {
      get() {
        return this.$store.state.showMetricEditModal
      },
      set(state) {
        this.$store.commit('setShowMetricEditModal', state)
      }
    }
  },
  components: { editMetric }
}
</script>

<style media="screen">
  .empty {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  select {
    height: 35px;
    background-color: #fff;
    padding-top: 0;
    padding-bottom: 0;
  }
  .metric-icon {
    transform: scale(1.25)
  }
</style>
