<template>
  <div>
    <highcharts class="cage-chart" :options="chartOptions"></highcharts>
  </div>
</template>

<script>
export default {
  props: {
    chartData: Object,
  },
  mounted() {
    const { labels, prices } = this.chartData;

    this.chartOptions = {
      ...this.chartOptions,
      xAxis: {
        categories: labels,
        labels: {
          // enabled: false,
          formatter: function() {
            return this.value; // clean, unformatted number for year
          },
        },
        title: {
          text: null,
        },
        gridLineDashStyle: 'longdash',
        gridLineWidth: 2,
      },
      series: [
        {
          name: '',
          data: prices,
          color: '#33CAAC',
          opacity: 0.3,
          marker: {
            enabled: false,
          },
        },
      ],
    };
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
          valueSuffix: ' units',
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
