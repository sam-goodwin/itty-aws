import { execSync } from "child_process";
import { promises as fsPromises } from "fs";
import path from "path";
import { CONFIG } from "../benchmarkConfig";
import { performance } from "perf_hooks";

export interface IResult {
  git: {
    branch: string;
    tag?: string;
  };
  time: { start: string; end: string };
  datasets: {
    coldStarts: {
      initDuration: Record<string, any>;
      duration: Record<string, any>;
      totalDuration: Record<string, any>;
      maxMemory: Record<string, any>;
      httpRequestLatency: Record<string, any>;
      apiCallLatency: Record<string, any>;
    };
    warmStarts: {
      duration: Record<string, any>;
      maxMemory: Record<string, any>;
      httpRequestLatency: Record<string, any>;
      apiCallLatency: Record<string, any>;
    };
  };
  log: Record<string, any>[];
}

const round = (input: number): number => Math.round(input * 100) / 100;

// Utils to extract values from log messages
const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;
const requestIdRegex = /RequestId: (\S+)/;
const durationRegex = /Duration: ([0-9.]+) ms/;
const maxMemoryRegex = /Memory Used: ([0-9]+) MB/;
const initDurationRegex = /Init Duration: ([0-9.]+) ms/;
function extract(regex: RegExp, message: string): string | undefined {
  const match = regex.exec(message);
  return match && match[1] ? match[1] : undefined;
}
const parseNumber = (value?: string) => (value ? parseFloat(value) : undefined);
const getJson = (value: string) => {
  const jsonStartIndex = value.indexOf("{");
  const jsonEndIndex = value.lastIndexOf("}") + 1;
  const jsonStr = value.slice(jsonStartIndex, jsonEndIndex);
  const json = JSON.parse(jsonStr);
  return json;
};

// Accessing nested objects by string path
// https://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-and-arrays-by-string-path
const setPath = (object: any, path: string, value: any) =>
  path
    .split(".")
    .reduce(
      (o, p, i) => (o[p] = path.split(".").length === ++i ? value : o[p] || {}),
      object
    );
const resolvePath = (object: any, path: string, defaultValue: any) =>
  path.split(".").reduce((o, p) => (o ? o[p] : defaultValue), object);

async function main() {
  const start = performance.now();
  // Setup
  const gitBranch = execSync("git rev-parse --abbrev-ref HEAD 2>/dev/null", {
    encoding: "utf-8",
  }).trim();
  let gitTag: string | undefined;
  const rawFilePath = path.join(
    __dirname,
    CONFIG.logs.outputFolder,
    `${gitBranch}/raw.json`
  );
  const filePath = path.join(
    __dirname,
    CONFIG.logs.outputFolder,
    `${gitBranch}/consolidated.json`
  );

  console.log(
    `Consolidate logs for branch '${gitBranch}' ${gitTag ? `(${gitTag})` : ""}`
  );

  console.log("\n- Delete previous artifacts if they exist");
  // Delete if exist
  // - previous results files
  try {
    // console.log(`  - Previous result file: '${filePath}'`);
    await fsPromises.unlink(filePath);
  } catch {
    // console.log(`    - not found`);
  }

  console.log(`- Read raw data`);
  const raw: IResult = JSON.parse(
    await fsPromises.readFile(rawFilePath, "utf8")
  );
  let result: IResult = {
    git: { ...raw.git },
    time: { ...raw.time },
    datasets: {
      coldStarts: {
        initDuration: {},
        duration: {},
        totalDuration: {},
        maxMemory: {},
        httpRequestLatency: {},
        apiCallLatency: {},
      },
      warmStarts: {
        duration: {},
        maxMemory: {},
        httpRequestLatency: {},
        apiCallLatency: {},
      },
    },
    log: [],
  };

  console.log(`- Parse the log`);
  let count = { functionCalls: 0, logEntries: 0 };
  let consolidatedEntry: Record<string, any> = {};
  let requestId: string | undefined;
  for (const entry of raw.log) {
    const { message } = entry;
    switch (true) {
      case message.startsWith("START"):
        count.functionCalls += 1;
        count.logEntries += 1;
        requestId = extract(requestIdRegex, message);
        // console.log(`  - Process requestId: ${requestId}`);
        consolidatedEntry = {
          requestId: requestId ?? "",
          isColdStart: false,
          function: {},
        };
        break;

      case isoDateRegex.test(message):
        // console.log(`    - extract API call data`);
        const apiData = getJson(message);
        consolidatedEntry.name = apiData.context.name;
        consolidatedEntry.runtime = apiData.context.runtime;
        consolidatedEntry.sdk = apiData.context.sdk;
        consolidatedEntry.latency = apiData.latency;
        break;

      case message.startsWith("REPORT"):
        // console.log(`    - extract function call data`);
        consolidatedEntry.function.duration = parseNumber(
          extract(durationRegex, message)
        );
        consolidatedEntry.function.maxMemory = parseNumber(
          extract(maxMemoryRegex, message)
        );
        const initDuration = parseNumber(extract(initDurationRegex, message));
        consolidatedEntry.isColdStart = !!initDuration;
        consolidatedEntry.function.initDuration = initDuration;
        result.log.push(consolidatedEntry);
        break;

      default:
        count.logEntries += 1;
        break;
    }
  }

  console.log(`- Build datasets`);
  const datasetPointers: string[] = [];
  for (const entry of result.log) {
    const label = entry.name.substring(0, entry.name.lastIndexOf("-"));
    const targetDataset = entry.isColdStart ? "coldStarts" : "warmStarts";

    if (entry.isColdStart) {
      // initDuration
      if (!result.datasets.coldStarts.initDuration[label]) {
        datasetPointers.push(`datasets.${targetDataset}.initDuration.${label}`);
        result.datasets.coldStarts.initDuration["title"] =
          "Cold start: init duration";
        result.datasets.coldStarts.initDuration[label] = {
          label: label,
          order: CONFIG.functions.reduce(
            (prev, curr) =>
              curr.functionName === label ? curr.chart.order : prev,
            0
          ),
          data: [entry.function.initDuration],
        };
      } else {
        result.datasets.coldStarts.initDuration[label].data.push(
          entry.function.initDuration
        );
      }

      // Total duration
      if (!result.datasets.coldStarts.totalDuration[label]) {
        datasetPointers.push(
          `datasets.${targetDataset}.totalDuration.${label}`
        );
        result.datasets.coldStarts.totalDuration["title"] =
          "Cold start: total duration";
        result.datasets.coldStarts.totalDuration[label] = {
          label: label,
          order: CONFIG.functions.reduce(
            (prev, curr) =>
              curr.functionName === label ? curr.chart.order : prev,
            0
          ),
          data: [entry.function.initDuration + entry.function.duration],
        };
      } else {
        result.datasets.coldStarts.totalDuration[label].data.push(
          entry.function.initDuration + entry.function.duration
        );
      }
    }

    // duration
    if (!result.datasets[targetDataset].duration[label]) {
      datasetPointers.push(`datasets.${targetDataset}.duration.${label}`);
      result.datasets[targetDataset].duration["title"] = `${
        entry.isColdStart ? "Cold" : "Warm"
      } start: duration`;
      result.datasets[targetDataset].duration[label] = {
        label: label,
        order: CONFIG.functions.reduce(
          (prev, curr) =>
            curr.functionName === label ? curr.chart.order : prev,
          0
        ),
        data: [entry.function.duration],
      };
    } else {
      result.datasets[targetDataset].duration[label].data.push(
        entry.function.duration
      );
    }

    // maxMemory
    if (!result.datasets[targetDataset].maxMemory[label]) {
      datasetPointers.push(`datasets.${targetDataset}.maxMemory.${label}`);
      result.datasets[targetDataset].maxMemory["title"] = `${
        entry.isColdStart ? "Cold" : "Warm"
      } start: max memory`;
      result.datasets[targetDataset].maxMemory[label] = {
        label: label,
        order: CONFIG.functions.reduce(
          (prev, curr) =>
            curr.functionName === label ? curr.chart.order : prev,
          0
        ),
        data: [entry.function.maxMemory],
      };
    } else {
      result.datasets[targetDataset].maxMemory[label].data.push(
        entry.function.maxMemory
      );
    }

    // httpRequest
    if (entry.latency.httpRequest) {
      if (!result.datasets[targetDataset].httpRequestLatency[label]) {
        datasetPointers.push(
          `datasets.${targetDataset}.httpRequestLatency.${label}`
        );
        result.datasets[targetDataset].httpRequestLatency["title"] = `${
          entry.isColdStart ? "Cold" : "Warm"
        } start: http request latency`;
        result.datasets[targetDataset].httpRequestLatency[label] = {
          label: label,
          order: CONFIG.functions.reduce(
            (prev, curr) =>
              curr.functionName === label ? curr.chart.order : prev,
            0
          ),
          data: [entry.latency.httpRequest],
        };
      } else {
        result.datasets[targetDataset].httpRequestLatency[label].data.push(
          entry.latency.httpRequest
        );
      }
    }

    // apiCall
    if (!result.datasets[targetDataset].apiCallLatency[label]) {
      datasetPointers.push(`datasets.${targetDataset}.apiCallLatency.${label}`);
      result.datasets[targetDataset].apiCallLatency["title"] = `${
        entry.isColdStart ? "Cold" : "Warm"
      } start: API call latency`;
      result.datasets[targetDataset].apiCallLatency[label] = {
        label: label,
        order: CONFIG.functions.reduce(
          (prev, curr) =>
            curr.functionName === label ? curr.chart.order : prev,
          0
        ),
        data: [entry.latency.apiCall],
      };
    } else {
      result.datasets[targetDataset].apiCallLatency[label].data.push(
        entry.latency.apiCall
      );
    }
  }

  console.log(`- Calculate statistics`);
  for (const datasetPointer of datasetPointers) {
    const data = resolvePath(result, `${datasetPointer}.data`, undefined);
    const sum = data.reduce((acc: number, val: number) => acc + val, 0);
    const n = data.length;
    const mean = sum / n;
    const variance =
      data.reduce((acc: number, val: number) => acc + (val - mean) ** 2, 0) / n;
    const standardDeviation = Math.sqrt(variance);
    setPath(result, `${datasetPointer}.mean`, round(mean));
    setPath(
      result,
      `${datasetPointer}.standardDeviation`,
      round(standardDeviation)
    );
  }

  console.log(
    `- Write ${count.functionCalls} functions calls consolidated from ${count.logEntries} log entries to '${filePath}'`
  );
  await fsPromises.writeFile(filePath, JSON.stringify(result, null, "  "));

  const duration = performance.now() - start;

  console.log(`\nDone in ${round(duration)}ms.`);
}

main();
