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
        ticks: {
          crossAlign: "far",
        },
      },
    },
    plugins: {
      title: {
        display: false,
        align: "start",
        font: {
          size: 20,
        },
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
    ChartJS.defaults.color = "rgba(31, 35, 40)";
    ChartJS.defaults.font.size = 16;
    ChartJS.defaults.responsive = false;
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

function generateCharts(
  datasetType: string,
  datasets: Record<string, Record<string, any>>,
  gitBranch: string
) {
  for (const key in datasets) {
    const labels: string[] = [];
    const datalabels: string[] = [];
    const backgroundColors: string[] = [];
    const borderColors: string[] = [];
    const offsetData: number[] = [];
    const leftData: number[] = [];
    const rightData: number[] = [];
    let max = 0;
    let min = Infinity;
    console.log(`  - ${datasetType} : ${key}`);
    const dataset = Object.fromEntries(
      Object.entries(datasets[key as keyof typeof datasets]).sort(
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
      datasetName: key,
      datasetType,
      gitBranch,
      labels,
      leftData,
      max: Math.ceil(max / 10) * 10,
      min: Math.floor(min / 5) * 5,
      offsetData,
      rightData,
      unit: key === "maxMemory" ? "MB" : "ms",
    });
  }
}

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
  const reportFilePath = path.join(
    __dirname,
    CONFIG.logs.outputFolder,
    `${gitBranch}/README.md`
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
    time,
    datasets: { coldStarts, warmStarts },
  }: IResult = JSON.parse(
    await fsPromises.readFile(consolidatedFilePath, "utf8")
  );

  console.log(`- Generate the charts for`);
  generateCharts("coldStarts", coldStarts, gitBranch);
  generateCharts("warmStarts", warmStarts, gitBranch);

  console.log(`\nGenerate README.md`);
  const content = `
# Benchmark report

- Branch: ${gitBranch}${gitTag ? ` (v${gitTag})` : ""}
- Date: ${new Date(time.end).toLocaleString()}

## Cold starts

### Cold starts total duration
![coldStarts-totalDuration](./coldStarts-totalDuration.png)

### Cold starts init duration
![coldStarts-initDuration](./coldStarts-initDuration.png)

### Cold starts duration
![coldStarts-duration](./coldStarts-duration.png)

### Cold starts API call latency
![coldStarts-apiCallLatency](./coldStarts-apiCallLatency.png)

### Cold starts HTTP Request latency
![coldStarts-httpRequestLatency](./coldStarts-httpRequestLatency.png)

### Cold starts max memory
![coldStarts-maxMemory](./coldStarts-maxMemory.png)

## Warm starts

### Warm starts duration
![warmStarts-duration](./warmStarts-duration.png)

### Warm starts API call latency
![warmStarts-apiCallLatency](./warmStarts-apiCallLatency.png)


### Warm starts HTTP request latency
![warmStarts-httpRequestLatency](./warmStarts-httpRequestLatency.png)

### Warm starts max memory
![warmStarts-maxMemory](./warmStarts-maxMemory.png)

`;
  await fsPromises.writeFile(reportFilePath, content, "utf-8");
  const duration = performance.now() - start;
  console.log(`\nDone in ${round(duration)}ms.`);
}

main();
