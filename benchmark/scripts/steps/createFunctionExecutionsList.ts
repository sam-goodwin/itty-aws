import { LambdaExecution, LambdaReport } from "../../types";
import { ApiCall, CloudWatchLog, LambdaExecutionLog } from "../../types";

/**
 * Creates a new lambda execution log from a CloudWatchLog object.
 *
 * @param {Object} param - an object containing a CloudWatchLog.
 * @param {CloudWatchLog} param.cloudWatchLog - a CloudWatchLog object to extract logs from.
 * @return {LambdaExecutionLog} - an object containing a new lambda execution log.
 */
export function createLambdaExecutionLog({
  cloudWatchLog,
}: {
  cloudWatchLog: CloudWatchLog;
}): LambdaExecutionLog {
  console.log("\n ## Create lambda execution log");
  let lambdaExecutionLog: LambdaExecutionLog = {};
  for (const logEvent of cloudWatchLog) {
    const { message } = logEvent;
    if (message) {
      const lambdaReportExtraction = extractLambdaReport({
        message,
        lambdaExecutionLog,
      });
      if (lambdaReportExtraction) {
        lambdaExecutionLog[lambdaReportExtraction.requestId] =
          lambdaReportExtraction.lambdaExecution;
      }

      const ApiCallExtraction = extractApiCall({
        message,
        lambdaExecutionLog,
      });
      if (ApiCallExtraction) {
        lambdaExecutionLog[ApiCallExtraction.requestId] =
          ApiCallExtraction.lambdaExecution;
      }
    }
  }
  return lambdaExecutionLog;
}

/**
 * Extracts a lambda report from the provided log and message.
 *
 * @param {Object} param - An object containing the message and lambda execution log.
 *   @param {string} param.message - The message to extract the report from.
 *   @param {LambdaExecutionLog} param.lambdaExecutionLog - The log containing the lambda execution data.
 * @return {LambdaReportExtraction | undefined} An object containing the request ID and extracted lambda report,
 *   or undefined if the request ID could not be found in the log.
 */
interface LambdaReportExtraction {
  requestId: string;
  lambdaExecution: LambdaExecution;
}
function extractLambdaReport({
  message,
  lambdaExecutionLog,
}: {
  message: string;
  lambdaExecutionLog: LambdaExecutionLog;
}): LambdaReportExtraction | undefined {
  const isReportLogEvent = message.startsWith("REPORT");
  if (isReportLogEvent) {
    const requestId = extractMetricFromLogEvent({
      metricType: "requestId",
      message,
    });
    if (requestId) {
      let lambdaExecution: LambdaExecution =
        lambdaExecutionLog[requestId] ?? {};
      const executionDuration = extractMetricFromLogEvent({
        metricType: "executionDuration",
        message,
      });
      if (executionDuration) {
        lambdaExecution["executionDuration"] = parseNumber({
          num: executionDuration,
        });
      }

      const maxMemory = extractMetricFromLogEvent({
        metricType: "maxMemory",
        message,
      });
      if (maxMemory) {
        lambdaExecution["maxMemory"] = parseNumber({
          num: maxMemory,
        });
      }

      const initDuration = extractMetricFromLogEvent({
        metricType: "initDuration",
        message,
      });
      if (initDuration) {
        lambdaExecution["initDuration"] = parseNumber({
          num: initDuration,
        });
      }
      return { requestId, lambdaExecution };
    }
  }
}

/**
 * Extracts an API call from a Lambda execution log.
 *
 * @param {object} input - An object containing a message and a Lambda execution log.
 * @param {string} input.message - The message to extract the API call from.
 * @param {LambdaExecutionLog} input.lambdaExecutionLog - The Lambda execution log.
 * @return {ApiCallExtraction | undefined} - The extracted API call or undefined if no match was found.
 */
interface ApiCallExtraction {
  requestId: string;
  lambdaExecution: LambdaExecution;
}
function extractApiCall({
  message,
  lambdaExecutionLog,
}: {
  message: string;
  lambdaExecutionLog: LambdaExecutionLog;
}): ApiCallExtraction | undefined {
  const apiCallLogRegex =
    /^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z)\t([a-f\d]{8}(?:-[a-f\d]{4}){3}-[a-f\d]{12})\t(INFO)/;
  const apiCallLogMatch = apiCallLogRegex.exec(message);
  if (apiCallLogMatch) {
    const requestId = apiCallLogMatch[2];
    const apiCall: ApiCall = extractJsonFromLogEvent({
      message,
    });
    const lambdaExecution = {
      ...lambdaExecutionLog[requestId],
      ...apiCall,
    };
    return { requestId, lambdaExecution };
  }
}

/**
 * Parses a string representation of a number and returns the parsed number.
 *
 * @param {string | undefined} num - The string representation of the number to be parsed.
 * @returns {number} The parsed number.
 */
function parseNumber({ num }: { num?: string }): number {
  return num ? parseFloat(num) : 0;
}

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
  | "maxMemory";
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
    default:
      const _never: never = metricType;
      throw new Error(`Unexpected value: ${_never}`);
  }

  const match = regex.exec(message ?? "");
  return match && match[1] ? match[1] : undefined;
}

/**
 * Extracts JSON data from a CloudWatch event message.
 *
 * @param {Object} obj - The CloudWatch event object.
 * @param {string} obj.message - The message string containing JSON data.
 * @returns {Object} Returns a JSON object.
 */
function extractJsonFromLogEvent<T>({ message }: { message: string }): T {
  const start = message.indexOf("{");
  const end = message.lastIndexOf("}") + 1;
  const jsonStr = message.slice(start, end);
  const json = jsonStr ? JSON.parse(jsonStr) : undefined;
  return json;
}
