const labels = ["cold start", "aws16-sdk2-runtime", "aws16-sdk2-bundle"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "invisible",
      data: [10.5, 22.57, 130.86],
      backgroundColor: "rgba(0, 0, 0, 0)",
      borderSkipped: true,
    },
    {
      label: "left",
      data: [5, 10, 68],
      backgroundColor: "rgba(0, 0, 255, 0.2)",
      borderColor: "rgba(0, 0, 255, .75)",
      borderWidth: {
        right: 1.5,
      },
    },
    {
      label: "right",
      data: [5, 10, 68],
      backgroundColor: "rgba(0, 0, 255, 0.2)",
    },
  ],
};
const options = {
  indexAxis: "y",
  scales: {
    x: {
      type: "logarithmic",
      stacked: true,
      title: {
        text: "ms",
        display: true,
      },
    },
    y: {
      stacked: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};
const config = {
  type: "bar",
  data: data,
  options: options,
};
