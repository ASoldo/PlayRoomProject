<template>
  <client-only>
    <VueApexCharts
      width="400"
      type="donut"
      :options="chartOptions"
      :series="series"
    ></VueApexCharts>
  </client-only>
</template>

<script>

export default {
  name: "Chart",

  data() {
    return {
      series: [44, 55, 13, 43, 22],
      chartOptions: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ["Team AA", "Team B", "Team C", "Team D", "Team E"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
};
</script>

<style></style>
