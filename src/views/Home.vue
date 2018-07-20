<template>
  <div>
    <header class="bar bar-nav">
      <h1 class="title">Počítadlo</h1>
    </header>

    <div class="content">
      <p class="content-padded">Započítat</p>
      <ul v-if="metrics.length" class="table-view">
        <li v-for="metric in metrics" class="table-view-cell">
          <a class="navigate-right" v-on:click="iterate(metric.id)">
            <span class="metric-icon">{{ metric.icon }}</span>&ensp;
            {{ metric.name }}
            <span class="badge">{{ stats[metric.id] }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {
    metrics() {
      return this.$store.state.metrics
    },
    records() {
      return this.$store.state.records
    },
    stats() {
      return this.$store.getters.stats
    }
  },
  methods: {
    iterate(metricId) {
      this.$store.commit('iterate', {
        metric: metricId,
        time: Date.now()
      })
    }
  }
}
</script>
