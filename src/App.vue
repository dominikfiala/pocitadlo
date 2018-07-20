<template>
  <div class="">
    <nav class="bar bar-tab">
      <router-link
        v-bind:key="tab.key"
        v-for="tab in tabs"
        v-bind:to="tab.link"
        class="tab-item"
        v-bind:class="{ active: activeTab === tab.key }"
      >
        <span v-bind:class="['icon', `icon-${tab.icon}`]"></span>
        <span class="tab-label">{{ tab.title }}</span>
      </router-link>
    </nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      tabs: [
        {
          title: 'Počítadlo',
          key: 'home',
          icon: 'home',
          link: '/'
        },
        {
          title: 'Metriky',
          key: 'metrics',
          icon: 'list',
          link: '/metrics'
        }
      ]
    }
  },
  methods: {
    activateTab(key) {
      this.$store.commit('setActiveTab', key)
    }
  },
  computed: {
    metrics() {
      return this.$store.state.metrics
    },
    activeTab() {
      return this.$store.state.activeTab
    }
  },
  watch: {
    $route(to) {
      this.activateTab(to.name)
    }
  }
}
</script>

<style>
.text-center {
  text-align: center;
}
.empty-screen {
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
