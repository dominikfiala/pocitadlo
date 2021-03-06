<template>
  <div class="page">
    <app-titlebar>
      <span slot="middle">{{ metric.emoji }}&ensp;{{ metric.name }}</span>
      <router-link slot="right" v-bind:to="`/metrics-edit/${metric.id}`">Upravit</router-link>
      <router-link slot="left" to="/metrics">Jednotky</router-link>
    </app-titlebar>

    <empty-page v-if="records.length === 0">
      <p>Tato jednotka ještě nebyla započítána.</p>
      <a href="#" v-on:click.prevent="$store.commit('iterate', id)" class="p-4">Započítat jednotku</a>
    </empty-page>

    <div v-if="records.length" class="page-content bg-white">
      <table class="table">
        <tr>
          <td>Celkem záznamů</td>
          <td class="text-right">{{ stats.total }}</td>
        </tr>
        <tr>
          <td>Průměr</td>
          <td class="text-right">{{ stats.avarage }} {{ metric.period|period }}</td>
        </tr>
        <tr>
          <td>Počítaných dní</td>
          <td class="text-right">{{ stats.days }}</td>
        </tr>
        <tr>
          <td>Poslední záznam</td>
          <td class="text-right">{{ stats.last.time|datetime }}</td>
        </tr>
        <tr>
          <td>První záznam</td>
          <td class="text-right">{{ stats.first.time|datetime }}</td>
        </tr>
        <tr>
          <td colspan="2" class="text-right">
            <a v-on:click.prevent="reset" href="#" class="text-danger">Vynulovat jednotku</a>
          </td>
        </tr>
      </table>
    </div>

    <app-navigation></app-navigation>
  </div>
</template>

<script>
import moment from 'moment'

import AppNavigation from '../components/AppNavigation.vue'
import AppTitlebar from '../components/AppTitlebar.vue'
import EmptyPage from '../components/EmptyPage.vue'

export default {
  name: 'MetricPage',
  methods: {
    reset() {
      if (window.confirm('Opravdu vynulovat tuto jednotku?')) {
        this.$store.commit('resetMetric', this.id)
      }
    }
  },
  computed: {
    id() {
      return parseInt(this.$route.params.id)
    },
    metric() {
      return this.$store.state.metrics.find(item => item.id === this.id)
    },
    records() {
      return this.$store.state.records.filter(item => item.metric === this.id)
    },
    stats() {
      var total = this.records.length

      var first = this.records[total - 1]
      var firstMoment = new moment(first.time)

      var last = this.records[0]

      var diff = moment.duration(firstMoment.diff())

      var days = diff.get('days') === 0 ? 1 : diff.get('days')

      var avarageRatio = days
      if (this.metric.period === 'day') avarageRatio = 1
      else if (this.metric.period === 'week') avarageRatio = 7
      else if (this.metric.period === 'month') avarageRatio = 30
      else if (this.metric.period === 'quarter') avarageRatio = 91
      else if (this.metric.period === 'year') avarageRatio = 365
      var avarage = Math.round(total / avarageRatio * 10) / 10

      return {
        total: total,
        first: first,
        last: last,
        days: days,
        avarage: avarage,
      }
    }
  },
  created() {
    // redirect in case the metric doesnt exist any more
    if (!this.metric) {
      this.$router.push('/')
    }
  },
  components: {
    AppNavigation,
    AppTitlebar,
    EmptyPage,
  }
}
</script>

<style media="screen">

</style>
