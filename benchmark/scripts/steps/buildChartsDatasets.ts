import {
  BenchmarkConfig,
  ChartsDatasets,
  LambdaExecution,
  LambdaExecutionLog,
} from "../../types";
import { roundToTwoDecimalPlaces } from "../../utils/format";

/**
 * Builds chart datasets based on lambda execution logs and benchmark configuration.
 *
 * @param {Object} args - The arguments object.
 * @param {LambdaExecutionLog} args.lambdaExecutionLog - The lambda execution log.
 * @param {BenchmarkConfig} args.benchmarkConfig - The benchmark configuration.
 * @return {ChartsDatasets} The chart datasets.
 */
export function buildChartsDatasets({
  lambdaExecutionLog,
  benchmarkConfig,
}: {
  lambdaExecutionLog: LambdaExecutionLog;
  benchmarkConfig: BenchmarkConfig;
}): ChartsDatasets {
  console.log("\n ## Build datasets");

  // init chartsDatasets
  const chartsDatasets: ChartsDatasets = initChartsDatasets({
    benchmarkConfig,
  });

  // extract data series from lambdaExecutions
  for (const [_, lambdaExecution] of Object.entries(lambdaExecutionLog)) {
    const { functionName } = lambdaExecution;
    const { initDuration } = lambdaExecution as LambdaExecution;
    const functionType = !!initDuration ? "coldStarts" : "warmStarts";
    for (const indicatorName of Object.keys(
      benchmarkConfig.chartsTemplates[functionType]
    )) {
      let indicatorValue: LambdaExecution[keyof LambdaExecution];
      if (indicatorName === "totalDuration") {
        indicatorValue =
          lambdaExecution.initDuration + lambdaExecution.executionDuration;
      } else {
        indicatorValue =
          lambdaExecution[indicatorName as keyof LambdaExecution];
      }
      if (typeof indicatorValue === "number") {
        chartsDatasets[functionType][indicatorName][functionName].data.push(
          indicatorValue
        );
      }
    }
  }

  // Calculate means and standard deviations
  for (const indicatorName of Object.keys(chartsDatasets.coldStarts)) {
    for (const functionName of Object.keys(
      chartsDatasets.coldStarts[indicatorName]
    )) {
      const { mean, standardDeviation } = calculateStatistics({
        chartsDatasets,
        indicatorName,
        functionName,
      });
      chartsDatasets.coldStarts[indicatorName][functionName] = {
        ...chartsDatasets.coldStarts[indicatorName][functionName],
        mean,
        standardDeviation,
      };
    }
  }

  return chartsDatasets;
}
/**
 * Initializes and returns a new ChartsDatasets object based on the given benchmark configuration.
 *
 * @param {Object} { benchmarkConfig } - An object containing the benchmark configuration.
 * @param {BenchmarkConfig} benchmarkConfig - The object containing the benchmark configuration.
 * @return {ChartsDatasets} A new ChartsDatasets object with empty data arrays and zeroed means and standard deviations.
 */
function initChartsDatasets({
  benchmarkConfig,
}: {
  benchmarkConfig: BenchmarkConfig;
}): ChartsDatasets {
  const chartsDatasets: ChartsDatasets = {
    coldStarts: {},
    warmStarts: {},
  };
  for (const indicator of Object.keys(
    benchmarkConfig.chartsTemplates.coldStarts
  )) {
    for (const functionName in benchmarkConfig.benchmarkFunctions) {
      chartsDatasets.coldStarts[indicator] = {
        ...chartsDatasets.coldStarts[indicator],
        [functionName]: {
          data: [],
          mean: 0,
          standardDeviation: 0,
        },
      };
    }
  }
  for (const indicator of Object.keys(
    benchmarkConfig.chartsTemplates.warmStarts
  )) {
    for (const functionName in benchmarkConfig.benchmarkFunctions) {
      chartsDatasets.warmStarts[indicator] = {
        ...chartsDatasets.warmStarts[indicator],
        [functionName]: {
          data: [],
          mean: 0,
          standardDeviation: 0,
        },
      };
    }
  }
  return chartsDatasets;
}

/**
 * Calculates the mean and standard deviation of a given chart dataset's data for
 * a specific indicator and function.
 *
 * @param {Object} params - An object containing the following parameters:
 *   @param {ChartsDatasets} params.chartsDatasets - The chart datasets to calculate
 *   statistics for.
 *   @param {string} params.indicatorName - The indicator name to calculate
 *   statistics for.
 *   @param {string} params.functionName - The function name to calculate statistics
 *   for.
 * @return {Object} An object containing the mean and standard deviation.
 */
function calculateStatistics({
  chartsDatasets,
  indicatorName,
  functionName,
}: {
  chartsDatasets: ChartsDatasets;
  indicatorName: string;
  functionName: string;
}): { mean: number; standardDeviation: number } {
  const { data } = chartsDatasets.coldStarts[indicatorName][functionName];
  const sum = data.reduce((acc: number, val: number) => acc + val, 0);
  const n = data.length;
  const mean = sum / n;
  const variance =
    data.reduce((acc: number, val: number) => acc + (val - mean) ** 2, 0) / n;
  const standardDeviation = Math.sqrt(variance);
  return {
    mean: roundToTwoDecimalPlaces(mean),
    standardDeviation: roundToTwoDecimalPlaces(standardDeviation),
  };
}
