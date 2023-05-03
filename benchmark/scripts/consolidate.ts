import { promises as fsPromises } from "fs";
import path from "path";
import { benchmarkConfig } from "../benchmarkConfig";
import { performance } from "perf_hooks";
import { roundToTwoDecimalPlaces } from "../utils/format";
import { getGitBranch, getGitTag } from "../utils/files";

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
const parseNumber = (num?: string) => (num ? parseFloat(num) : 0);

/**
 * Extracts a valid JSON object from a string that contains a JSON object.
 *
 * @param {string} str - The input string that contains JSON data.
 * @returns {object} - The extracted JSON object.
 * @throws {SyntaxError} If the input string is not a valid JSON object.
 */
function extractJsonFromString(str: string): Record<string, any> {
  const start = str.indexOf("{");
  const end = str.lastIndexOf("}") + 1;
  const jsonStr = str.slice(start, end);
  const json = JSON.parse(jsonStr);
  return json;
}

/**
 * Sets the value of a property in a nested object by providing the path as a dot-separated string.
 *
 * @template T - The type of the target object.
 * @template U - The type of the value to set.
 * @param {object} props - An object containing the target object, the path to the property, and the value to set.
 * @param {T} props.target - The target object to modify.
 * @param {string} props.path - The path to the property to set, using dots as separators to indicate nested objects.
 * @param {U} props.value - The value to set.
 * @returns {T} - The modified target object.
 */
function setPropertyByPath<T extends Record<string, any>, U>(props: {
  target: T;
  path: string;
  value: U;
}) {
  return props.path
    .split(".")
    .reduce(
      (o, p, i) =>
        (o[p as keyof typeof props.target] =
          props.path.split(".").length === ++i ? props.value : o[p] || {}),
      props.target
    );
}

/**
 * Returns the value at the given path in the given object, or a default value
 * if the path is not found. The path must be specified as a dot-separated
 * string of property names.
 *
 * @template T The type of the input object.
 * @template U The type of the default value.
 *
 * @param props An object containing the input object, the path, and an optional
 * default value.
 * @param props.object The input object to traverse.
 * @param props.path The path to the desired property, as a dot-separated string.
 * @param props.defaultValue An optional default value to return if the path is
 * not found. Defaults to undefined.
 *
 * @returns The value at the specified path, or the default value if the path is
 * not found.
 */
function getPropertyByPath<T, U>(props: {
  target: T;
  path: string;
  defaultValue?: U;
}) {
  return props.path
    .split(".")
    .reduce(
      (o: any, p: string) => (o ? o[p] : props.defaultValue),
      props.target
    );
}

async function main() {
  const scriptStats = {
    functionCalls: 0,
    logEntries: 0,
    start: performance.now(),
  };

  // Setup
  const gitBranch = await getGitBranch();
  const gitTag = await getGitTag();

  const rawFilePath = path.join(
    __dirname,
    benchmarkConfig.logs.outputDirPath,
    `${gitBranch}/raw.json`
  );
  const filePath = path.join(
    __dirname,
    benchmarkConfig.logs.outputDirPath,
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
  const result: IResult = {
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

  // Parse log
  console.log(`- Parse log`);
  let consolidatedEntry: Record<string, any> = {};
  let requestId: string | undefined;
  for (const entry of raw.log) {
    const { message } = entry;
    switch (true) {
      case message.startsWith("START"):
        scriptStats.functionCalls += 1;
        scriptStats.logEntries += 1;
        requestId = extract(requestIdRegex, message);
        // Process requestId
        consolidatedEntry = {
          requestId: requestId ?? "",
          isColdStart: false,
          function: {},
        };
        break;

      case isoDateRegex.test(message):
        // extract API call data
        const apiData = extractJsonFromString(message);
        consolidatedEntry.name = apiData.context.name;
        consolidatedEntry.runtime = apiData.context.runtime;
        consolidatedEntry.sdk = apiData.context.sdk;
        consolidatedEntry.latency = apiData.latency;
        break;

      case message.startsWith("REPORT"):
        // extract function call data
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
        scriptStats.logEntries += 1;
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
          order: benchmarkConfig.benchmarkFunctions.reduce(
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
          order: benchmarkConfig.benchmarkFunctions.reduce(
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
        order: benchmarkConfig.benchmarkFunctions.reduce(
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
        order: benchmarkConfig.benchmarkFunctions.reduce(
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
          order: benchmarkConfig.benchmarkFunctions.reduce(
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
        order: benchmarkConfig.benchmarkFunctions.reduce(
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
    const data = getPropertyByPath({
      target: result,
      path: `${datasetPointer}.data`,
    });
    const sum = data.reduce((acc: number, val: number) => acc + val, 0);
    const n = data.length;
    const mean = sum / n;
    const variance =
      data.reduce((acc: number, val: number) => acc + (val - mean) ** 2, 0) / n;
    const standardDeviation = Math.sqrt(variance);
    setPropertyByPath({
      target: result,
      path: `${datasetPointer}.mean`,
      value: roundToTwoDecimalPlaces(mean),
    });
    setPropertyByPath({
      target: result,
      path: `${datasetPointer}.standardDeviation`,
      value: roundToTwoDecimalPlaces(standardDeviation),
    });
  }

  console.log(
    `- Write ${scriptStats.functionCalls} functions calls consolidated from ${scriptStats.logEntries} log entries to '${filePath}'`
  );
  await fsPromises.writeFile(filePath, JSON.stringify(result, null, "  "));

  const duration = performance.now() - scriptStats.start;

  console.log(`\nDone in ${roundToTwoDecimalPlaces(duration)}ms.`);
}

main();
