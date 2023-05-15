import { performance } from "perf_hooks";
import { benchmarkConfig } from "../benchmarkConfig";
import { roundToTwoDecimalPlaces } from "../utils/format";

/**
 * The script consolidates cloudWatch raw logs into function executions.
 * This function is the entrypoint of the script. It is immediately invoked.
 * @returns {Promise<void>}
 */
(async function main(): Promise<void> {
  // Setup
  const scriptStartTime = performance.now();
  console.log(
    `Consolidate logs for branch '${benchmarkConfig.logs.gitBranch}'`
  );

  // Init

  // Consolidate

  // Cleanup
  const duration = performance.now() - scriptStartTime;
  console.log(`\nDone in ${roundToTwoDecimalPlaces(duration)} ms.`);
})();

/**
 * Extracts a specific metric value from a log event message.
 *
 * @param {MetricTypes} metricType - The type of metric to extract.
 * @param {string} message - The log event message to extract the metric from.
 * @returns {string | undefined} The extracted metric value, or undefined if not found.
 */
type MetricTypes =
  | "requestId"
  | "initDuration"
  | "executionDuration"
  | "maxMemory"
  | "date";
function extractMetricFromLogEvent({
  metricType,
  message,
}: {
  metricType: MetricTypes;
  message: string;
}): string | undefined {
  let regex: RegExp;
  switch (metricType) {
    case "requestId":
      regex = /RequestId: (\S+)/;
      break;
    case "initDuration":
      regex = /Init Duration: ([0-9.]+) ms/;
      break;
    case "executionDuration":
      regex = /Duration: ([0-9.]+) ms/;
      break;
    case "maxMemory":
      regex = /Memory Used: ([0-9]+) MB/;
      break;
    case "date":
      regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;
      break;
  }
  const match = regex.exec(message);
  return match && match[1] ? match[1] : undefined;
}

/**
 * Extracts JSON data from a CloudWatch event message.
 *
 * @param {Object} obj - The CloudWatch event object.
 * @param {string} obj.message - The message string containing JSON data.
 * @returns {Object} Returns a JSON object.
 */
function extractJsonFromCloudWatchEvent({
  message,
}: {
  message: string;
}): Record<string, any> {
  const start = message.indexOf("{");
  const end = message.lastIndexOf("}") + 1;
  const jsonStr = message.slice(start, end);
  const json = JSON.parse(jsonStr);
  return json;
}
