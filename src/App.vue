<template>
  <router-view></router-view>
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

<style lang="scss">
  // $font-size-base: 0.9rem;
  @import "../node_modules/bootstrap/scss/bootstrap";

  body {
    font-family: 'Barlow Semi Condensed', sans-serif;
  }

  a, a:hover, a:active {
    text-decoration: none !important;
  }

  .page {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .page-content {
    flex: 1 1 auto;
    overflow-y: auto;
  }
  .page-footer {
    font-size: 0.75rem;
    line-height: 1.25;

    a, a:hover, a:active {
      color: inherit;

      &.router-link-active {
        color: var(--primary);
      }
    }
  }
</style>
