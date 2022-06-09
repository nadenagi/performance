<template>
  <div class="c-chart__container">
    <v-chart ref="chart" :loading="loading" :option="chartOptions" />
  </div>
</template>

<script>
import moment from "moment";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
} from "echarts/components";
import VChart from "vue-echarts";
import Loader from "../../components/vue-components/UI/Loader.vue";

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
]);
export default {
  name: "PerformanceChartComponent",
  props: {
    data: {
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Loader,
    VChart,
  },
  computed: {
    chartData() {
      return this.data;
    },
    initOptions() {
      return {
        width: "auto",
        height: "300px",
      };
    },

    chartOptions() {
      return {
        title: {
          text: "Team Performance Index",
          left: "center",
        },
        tooltip: {
          trigger: "axis",
          transitionDuration: 0,
          confine: false,
          hideDelay: 0,
          padding: 0,
        },
        grid: {
          left: "30px",
          right: "12px",
          bottom: "2px",
          top: "6px",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          showGrid: false,
          data: this.xAxisData,
          axisLine: {
            show: true,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            fontSize: 11,
          },
        },
        yAxis: {
          axisLabel: { show: true },
          axisTick: { show: true },
          splitLine: { show: true },
        },
        visualMap: {
          dimension: 1,
          seriesIndex: 0,
          top: 70,
          right: 10,
          pieces: [
            {
              min: 0,
              max: 50,
              color: "#f44336",
              label: "0-50",
            },
            {
              min: 50,
              max: 80,
              color: "#ffeb3b",
              label: "50-80",
            },
            {
              min: 80,
              max: 100,
              color: "#4caf50",
              label: "80-100",
            },
          ],
          outOfRange: {
            color: "#000",
          },
        },
        series: [
          {
            data: this.yAxisData,
            type: "line",
            symbol: "circle",
            symbolSize: 2,
            cursor: "default",
            lineStyle: {
              width: 2,
            },
            label: {
              show: true,
            },
          },
        ],
      };
    },

    xAxisData() {
      return this.chartData.map((item) => this.formatDate(item.date_ms));
    },

    yAxisData() {
      return this.chartData.map((item) => +item.performance * 100);
    },
  },

  methods: {
    formatDate(dateInMs) {
      return moment(dateInMs).format("DD MMM YYYY");
    },
  },
};
</script>

<style lang="scss" scoped>
.loader-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>