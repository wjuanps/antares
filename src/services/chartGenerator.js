import Chart from "chart.js";

const chart = {
  generateChart(ref, chart) {
    var ctx = ref.getContext("2d");
    new Chart(ctx, {
      type: chart.type,
      data: {
        labels: chart.labels,
        datasets: [
          {
            label: chart.label,
            data: chart.data,
            backgroundColor: chart.backgroundColor,
            borderColor: chart.borderColor,
            borderWidth: chart.borderWidth,
          },
        ],
      },
      options: chart.options,
    });
  },

  compareChart(ref, chart = {}) {
    var ctx = ref.getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["", "Positivo", "Negativo"],
        datasets: chart.datasets,
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      },
    });
  },
};

export default chart;
