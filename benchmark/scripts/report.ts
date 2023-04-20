import { ChartJSNodeCanvas, ChartCallback } from "chartjs-node-canvas";
import { ChartConfiguration } from "chart.js";
import { execSync } from "child_process";
import { promises as fsPromises } from "fs";
import path from "path";
import { CONFIG } from "../benchmarkConfig";
import { performance } from "perf_hooks";
import { IResult } from "../scripts/consolidate";
import { Chart } from "chart.js";
import ChartDataLabels, { Context } from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);

const round = (input: number): number => Math.round(input * 100) / 100;

const createChart = async (props: {
  backgroundColors: string[];
  borderColors: string[];
  datasetName: string;
  datasetType: string;
  gitBranch: string;
  labels: string[];
  leftData: number[];
  max: number;
  min: number;
  offsetData: number[];
  rightData: number[];
  title: string;
  unit: string;
  datalabels: string[];
}) => {
  const filePath = path.join(
    __dirname,
    CONFIG.logs.outputFolder,
    `${props.gitBranch}/${props.datasetType}-${props.datasetName}.png`
  );
  const options: ChartConfiguration["options"] = {
    indexAxis: "y",
    scales: {
      x: {
        // type: "logarithmic",
        stacked: true,
        max: props.max,
        min: props.min,
        title: {
          text: props.unit,
          display: true,
        },
      },
      y: {
        stacked: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: props.title,
      },
      legend: {
        display: false,
      },
    },
  };

  const data: ChartConfiguration["data"] = {
    labels: props.labels,
    datasets: [
      {
        label: "offset",
        data: props.offsetData,
        backgroundColor: "rgba(255, 255, 255, 0)",
        borderSkipped: true,
        datalabels: {
          labels: {
            title: null,
          },
        },
      },
      {
        label: "left",
        data: props.leftData,
        backgroundColor: props.backgroundColors,
        borderColor: props.borderColors,
        minBarLength: 1.5,
        borderWidth: {
          right: 1.5,
        },
        datalabels: {
          align: "center",
          anchor: "end",
          clamp: true,
          formatter: (_, context: Context) =>
            props.datalabels[context.dataIndex],
        },
      },
      {
        label: "right",
        data: props.rightData,
        backgroundColor: props.backgroundColors,
        datalabels: {
          labels: {
            title: null,
          },
        },
      },
    ],
  };

  // Create a new Chart.js instance
  const width = 800;
  const height = 600;
  const backgroundColour = "white";
  const chartCallback: ChartCallback = (ChartJS) => {
    ChartJS.defaults.responsive = true;
    ChartJS.defaults.maintainAspectRatio = false;
  };
  const chartJSNodeCanvas = new ChartJSNodeCanvas({
    width,
    height,
    backgroundColour,
    plugins: {
      modern: ["chartjs-plugin-datalabels"],
    },
    chartCallback,
  });
  const buffer = await chartJSNodeCanvas.renderToBuffer({
    type: "bar",
    data,
    options,
  });
  await fsPromises.writeFile(filePath, buffer, "base64");
};

async function main() {
  const start = performance.now();
  // Setup
  const gitBranch = execSync("git rev-parse --abbrev-ref HEAD 2>/dev/null", {
    encoding: "utf-8",
  }).trim();
  let gitTag: string | undefined;
  try {
    gitTag = execSync("git describe --tags --abbrev=0 2>/dev/null", {
      encoding: "utf-8",
    }).trim();
  } catch {
    gitTag = undefined;
  }
  const folderPath = path.join(
    __dirname,
    CONFIG.logs.outputFolder,
    `${gitBranch}`
  );
  const consolidatedFilePath = path.join(
    __dirname,
    CONFIG.logs.outputFolder,
    `${gitBranch}/consolidated.json`
  );
  console.log(
    `Generate report for branch '${gitBranch}' ${gitTag ? `(${gitTag})` : ""}`
  );

  console.log("\n- Delete previous artifacts if they exist");
  try {
    const files = await fsPromises.readdir(folderPath);
    for (const file of files) {
      if (path.extname(file) === ".png" || path.extname(file) === ".md") {
        await fsPromises.unlink(path.join(folderPath, file));
      }
    }
  } catch (err) {
    console.error(err);
  }

  console.log(`- Read raw data`);
  let {
    datasets: { coldStarts, warmStarts },
  }: IResult = JSON.parse(
    await fsPromises.readFile(consolidatedFilePath, "utf8")
  );

  console.log(`- Generate the charts for`);
  for (const coldStartsKey in coldStarts) {
    const labels: string[] = [];
    const datalabels: string[] = [];
    const backgroundColors: string[] = [];
    const borderColors: string[] = [];
    const offsetData: number[] = [];
    const leftData: number[] = [];
    const rightData: number[] = [];
    let max = 0;
    let min = Infinity;
    console.log(`  - Cold starts : ${coldStartsKey}`);
    const dataset = Object.fromEntries(
      Object.entries(coldStarts[coldStartsKey as keyof typeof coldStarts]).sort(
        (a, b) => a[1].order - b[1].order
      )
    );
    for (const key in dataset) {
      if (dataset[key].data) {
        const { label, mean, standardDeviation } = dataset[key];
        labels.push(label);
        datalabels.push(`${mean}±${standardDeviation}`);
        backgroundColors.push(
          CONFIG.functions.reduce(
            (prev, curr) =>
              curr.functionName === key ? curr.chart.backgroundColor : prev,
            ""
          )
        );
        borderColors.push(
          CONFIG.functions.reduce(
            (prev, curr) =>
              curr.functionName === key ? curr.chart.borderColor : prev,
            ""
          )
        );
        offsetData.push(mean - standardDeviation);
        leftData.push(standardDeviation);
        rightData.push(standardDeviation);
        max = Math.max(max, mean + standardDeviation);
        min = Math.min(min, mean - standardDeviation);
      }
    }
    createChart({
      backgroundColors,
      borderColors,
      datalabels,
      datasetName: coldStartsKey,
      datasetType: "coldStarts",
      gitBranch,
      labels,
      leftData,
      max: Math.ceil(max / 10) * 10,
      min: Math.floor(min / 5) * 5,
      offsetData,
      rightData,
      title: dataset.title,
      unit: coldStartsKey === "maxMemory" ? "MB" : "ms",
    });
  }

  for (const warmStartsKey in warmStarts) {
    const labels: string[] = [];
    const datalabels: string[] = [];
    const backgroundColors: string[] = [];
    const borderColors: string[] = [];
    const offsetData: number[] = [];
    const leftData: number[] = [];
    const rightData: number[] = [];
    let max = 0;
    let min = Infinity;
    console.log(`  - Warm starts : ${warmStartsKey}`);
    const dataset = Object.fromEntries(
      Object.entries(warmStarts[warmStartsKey as keyof typeof warmStarts]).sort(
        (a, b) => a[1].order - b[1].order
      )
    );
    for (const key in dataset) {
      if (dataset[key].data) {
        const { label, mean, standardDeviation } = dataset[key];
        labels.push(label);
        datalabels.push(`${mean}±${standardDeviation}`);
        backgroundColors.push(
          CONFIG.functions.reduce(
            (prev, curr) =>
              curr.functionName === key ? curr.chart.backgroundColor : prev,
            ""
          )
        );
        borderColors.push(
          CONFIG.functions.reduce(
            (prev, curr) =>
              curr.functionName === key ? curr.chart.borderColor : prev,
            ""
          )
        );
        offsetData.push(mean - standardDeviation);
        leftData.push(standardDeviation);
        rightData.push(standardDeviation);
        max = Math.max(max, mean + standardDeviation);
        min = Math.min(min, mean - standardDeviation);
      }
    }
    createChart({
      backgroundColors,
      borderColors,
      datalabels,
      datasetName: warmStartsKey,
      datasetType: "warmStarts",
      gitBranch,
      labels,
      leftData,
      max: Math.ceil(max / 5) * 5,
      min: Math.floor(min / 5) * 5,
      offsetData,
      rightData,
      title: dataset.title,
      unit: warmStartsKey === "maxMemory" ? "MB" : "ms",
    });
  }

  const duration = performance.now() - start;
  console.log(`\nDone in ${round(duration)}ms.`);
}

main();
