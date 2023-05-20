import {
  BenchmarkConfig,
  ChartsDatasets,
  LambdaExecution,
  LambdaExecutionLog,
} from "../../types";

/**
 * The script consolidates cloudWatch raw logs into function executions.
 * @returns {Promise<LambdaExecutionLog>}
 */
export function buildChartsDatasets({
  lambdaExecutionLog,
  benchmarkConfig,
}: {
  lambdaExecutionLog: LambdaExecutionLog;
  benchmarkConfig: BenchmarkConfig;
}): ChartsDatasets {
  console.log("\n ## Build datasets");
  const chartTemplates = benchmarkConfig.charts.coldStarts;
  let chartsDatasets: ChartsDatasets = {
    coldStarts: {},
    warmStarts: {},
  };
  for (const [_, lambdaExecution] of Object.entries(lambdaExecutionLog)) {
    const { functionName: functionInstanceName, initDuration } =
      lambdaExecution as LambdaExecution;
    const functionName = functionInstanceName.split("-").slice(0, -1).join("-");
    const functionParameters = benchmarkConfig.benchmarkFunctions[functionName];
    const isColdStart = !!initDuration;
    if (isColdStart) {
      for (const chartName in chartTemplates) {
        const { title } = chartTemplates[chartName];
        const currentChartDatasets =
          chartsDatasets["coldStarts"][chartName]?.datasets ?? {};
        currentChartDatasets[functionName] = {
          order: 0,
          data: [],
          mean: 0,
          standardDeviation: 0,
        };
        chartsDatasets["coldStarts"][chartName] = {
          title,
          datasets: currentChartDatasets,
        };
      }
    }
  }
  return chartsDatasets;
}
