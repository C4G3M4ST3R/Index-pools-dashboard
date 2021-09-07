<template>
  <div>
    <highcharts class="cage-chart" :options="chartOptions"></highcharts>
  </div>
</template>

<script>
export default {
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
        xAxis: {
          labels: {
            enabled: false,
          },
          title: {
            text: null,
          },
          gridLineDashStyle: 'longdash',
          gridLineWidth: 2,
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
        series: [
          {
            name: 'John',
            data: [3, 4, 3, 5, 4, 10, 12],
            color: '#33CAAC',
            opacity: 0.3,
            marker: {
              enabled: false,
            },
          },
          {
            name: 'Jane',
            data: [1, 3, 4, 3, 3, 5, 4],
            color: '#0051FF',
            type: 'areaspline',
            opacity: 0.3,
          },
        ],
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
