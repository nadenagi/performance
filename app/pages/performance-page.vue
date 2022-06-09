<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      [Place filter component here]
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component />
    </div>
  </div>
</template>

<script>
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
import TextInput from "../components/vue-components/UI/TextInput.vue";
export default {
  name: "AboutPageComponent",
  data: () => ({
    filter: [null, null],
  }),
  mounted() {
    store.dispatch("team/fetching");
  },
  computed: {
    state() {
      return store.state.team;
    },
  },
  components: {
    PerformanceChartComponent,
    TextInput,
  },
};
</script>
