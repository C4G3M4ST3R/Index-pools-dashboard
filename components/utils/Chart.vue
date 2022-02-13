<template>
  <div>
    <highcharts class="cage-chart" :options="chartOptions"></highcharts>
  </div>
</template>

<script>
export default {
  props: {
    chartData: Object,
    token: String,
  },
  mounted() {
    this.initChart();
  },
  watch: {
    chartData: 'initChart',
  },
  methods: {
    initChart() {
      const { labels, prices } = this.chartData;

      this.chartOptions = {
        ...this.chartOptions,
        xAxis: {
          categories: labels,
          title: {
            text: null,
          },
          gridLineDashStyle: 'longdash',
          gridLineWidth: 2,
        },
        series: [
          {
            name: this.token,
            data: prices,
            color: '#ed1f24',
            opacity: 0.3,
            marker: {
              enabled: false,
            },
          },
        ],
      };
    },
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'area',
          marginBottom: 100,
        },
        title: null,
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom',
          x: 0,
          y: 0,
          title: {
            text: null,
          },
          floating: true,
          borderWidth: 0,
          showCheckbox: true,
          backgroundColor: '#FFFFFF',
        },
        yAxis: {
          labels: {
            enabled: false,
          },
          gridLineColor: 'transparent',
        },
        tooltip: {
          shared: true,
          pointFormat: '<b>${point.y:,.0f}</b>',
        },
        credits: {
          enabled: false,
        },
        plotOptions: {
          area: {},
        },
      },
    };
  },
};
</script>

<style scoped>
.cage-chart >>> .highcharts-axis.highcharts-yaxis,
.cage-chart >>> .highcharts-credits {
  display: none !important;
}

.cage-chart >>> .highcharts-container {
  text-align: center !important;
  width: 100% !important;
}
</style>
