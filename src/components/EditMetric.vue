<template>
  <div class="">
    <header class="bar bar-nav">
      <a
        class="icon icon-close pull-right"
        v-on:click="showEditModal = false"
      ></a>
      <h1 class="title" v-show="id">Upravit metriku</h1>
      <h1 class="title" v-show="!id">Nová metrika</h1>
    </header>
    <div class="content">
      <div class="content-padded">
        <form v-on:submit.prevent="submit">
          <p>Ikona</p>
          <select v-model="icon">
            <option v-for="icon in icons">{{ icon }}</option>
          </select>
          <p>Název</p>
          <input type="text" v-model.trim="name">
          <button class="btn btn-positive btn-block">Uložit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'edit-metric',
  data: function() {
    return {
      icons: ['❓', '🚬', '☕', '🏃', '🚴']
    }
  },
  computed: {
    id() {
      return this.$store.state.editedMetric.id
    },
    name: {
      get() {
        return this.$store.state.editedMetric.name
      },
      set(value) {
        this.$store.commit('setEditedMetric', {
          name: value,
        })
      }
    },
    icon: {
      get() {
        return this.$store.state.editedMetric.icon
      },
      set(value) {
        this.$store.commit('setEditedMetric', {
          icon: value,
        })
      }
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
  methods: {
    submit() {
      if (!this.name) {
        window.alert('Zadejte název metriky')
        return
      }

      this.$store.commit('saveMetric')
      this.showEditModal = false
    }
  }
}
</script>
