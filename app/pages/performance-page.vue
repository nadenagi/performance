<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      <DateInput v-model="filter[0]" label="Start Date" name="start_date" />
      <DateInput v-model="filter[1]" label="End Date" name="end_date" />
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component :data="filtered" :loading="state.loading" />
    </div>
  </div>
</template>

<script>
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
import TextInput from "../components/vue-components/UI/TextInput.vue";
import DateInput from "../components/vue-components/UI/DateInput.vue";
import store from "../store";
import DateFilter from "../util/date.js";
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
    filtered() {
      return new DateFilter(this.state.teamPreformance).between(
        this.filter[0],
        this.filter[1],
        "date_ms"
      );
    },
  },
  components: {
    PerformanceChartComponent,
    TextInput,
    DateInput,
  },
};
</script>

