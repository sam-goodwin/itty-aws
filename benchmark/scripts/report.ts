import { ChartConfiguration } from "chart.js";
import { ChartCallback, ChartJSNodeCanvas } from "chartjs-node-canvas";
import { Context } from "chartjs-plugin-datalabels";
import { promises as fsPromises } from "node:fs";
import path from "node:path";
import { performance } from "node:perf_hooks";
import { benchmarkConfig } from "../benchmarkConfig";
import { IResult } from "../scripts/consolidate.old";
import { getGitBranch, getGitTag } from "../utils/files";
import { roundToTwoDecimalPlaces } from "../utils/format";

/**
 * Generates a report for the current Git branch and tag (if any).
 * Deletes previous report artifacts, reads raw data from a JSON file,
 * generates several charts based on that data, and writes a README.md file
 * with the report content.
 */
async function main(): Promise<void> {
  const start = performance.now();

  // setup
  const gitBranch = await getGitBranch();
  const gitTag = await getGitTag();

  const folderPath = path.join(
    __dirname,
    benchmarkConfig.logs.cloudWatchLogDirPath,
    `${gitBranch}`
  );
  const consolidatedFilePath = path.join(
    __dirname,
    benchmarkConfig.logs.cloudWatchLogDirPath,
    `${gitBranch}/consolidated.json`
  );
  const reportFilePath = path.join(
    __dirname,
    benchmarkConfig.logs.cloudWatchLogDirPath,
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
[🏠 Home](../../../README.md) | [⬅️ Reports index](../../README.md)


# Benchmark report

> **Branch: \`${gitBranch}${
    gitTag ? ` (v${gitTag})` : ""
  }\`<br />Date: \`${new Date(time.end).toUTCString()}\`**

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
  console.log(`\nDone in ${roundToTwoDecimalPlaces(duration)}ms.`);
}
main();

/**
 * Generates a chart and saves it as a PNG file in a specific location.
 * @async
 * @param {IChartProps} props - An object containing chart properties.
 * @param {string} props.gitBranch - The name of the Git branch.
 * @param {string} props.datasetType - The type of dataset.
 * @param {string} props.datasetName - The name of the dataset.
 * @param {number} props.max - The maximum value for the x-axis.
 * @param {number} props.min - The minimum value for the x-axis.
 * @param {string} props.unit - The unit for the x-axis.
 * @param {string[]} props.labels - An array of labels for the y-axis.
 * @param {number[]} props.offsetData - An array of numbers for the "offset" dataset.
 * @param {number[]} props.leftData - An array of numbers for the "left" dataset.
 * @param {number[]} props.rightData - An array of numbers for the "right" dataset.
 * @param {string[]} props.backgroundColors - An array of background colors for the "left" and "right" datasets.
 * @param {string[]} props.borderColors - An array of border colors for the "left" dataset.
 * @param {string[]} props.datalabels - An array of data labels for the "left" dataset.
 */
async function createChart(props: {
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
}): Promise<void> {
  const filePath = path.join(
    __dirname,
    benchmarkConfig.logs.cloudWatchLogDirPath,
    `${props.gitBranch}/${props.datasetType}-${props.datasetName}.png`
  );

  // Chart configuration
  const width = 800;
  const height = 600;
  const backgroundColour = "white";
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
  const chartCallback: ChartCallback = (ChartJS) => {
    ChartJS.defaults.color = "rgba(31, 35, 40)";
    ChartJS.defaults.font.size = 12;
    ChartJS.defaults.responsive = false;
    ChartJS.defaults.maintainAspectRatio = false;
  };

  // Render the chart and save to png file
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
}

/**
 * Generates charts for given datasets.
 *
 * @param {string} datasetType - Type of dataset
 * @param {Object.<string, Object.<string, any>>} datasets - The datasets to generate charts for
 * @param {string} gitBranch - The git branch to use for generating charts
 */
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

    // Sort the dataset
    const dataset = Object.fromEntries(
      Object.entries(datasets[key as keyof typeof datasets]).sort(
        (a, b) => a[1].order - b[1].order
      )
    );

    // For each non empty series in the dataset
    for (const key in dataset) {
      if (dataset[key].data) {
        // Get the current series mean and standard deviation for the chart
        const { label, mean, standardDeviation } = dataset[key];
        labels.push(label);
        datalabels.push(`${mean}±${standardDeviation}`);
        backgroundColors.push(
          benchmarkConfig.benchmarkFunctions.reduce(
            (prev, curr) =>
              curr.functionName === key ? curr.chart.backgroundColor : prev,
            ""
          )
        );
        borderColors.push(
          benchmarkConfig.benchmarkFunctions.reduce(
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
