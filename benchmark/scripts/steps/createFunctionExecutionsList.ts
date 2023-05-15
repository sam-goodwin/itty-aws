import {
  ApiCallExecution,
  CloudWatchLog,
  FunctionExecutionsList,
} from "../../types";

/**
 * The script consolidates cloudWatch raw logs into function executions.
 * @returns {Promise<FunctionExecutionsList>}
 */
export async function createFunctionExecutionsList({
  cloudWatchLog,
}: {
  cloudWatchLog: CloudWatchLog;
}): Promise<FunctionExecutionsList> {
  console.log("\n ## Consolidate logs");

  const functionExecutionsList: FunctionExecutionsList = parseCloudWatchLog({
    cloudWatchLog,
  });

  return functionExecutionsList;
}

/**
 * Parses a given CloudWatch log to extract information about function executions and API calls.
 *
 * @param {object} param - An object containing the CloudWatchLog to parse.
 * @param {CloudWatchLog} param.cloudWatchLog - The CloudWatchLog to parse.
 * @return {FunctionExecutionsList} An object containing information about function executions and API calls.
 */
function parseCloudWatchLog({
  cloudWatchLog,
}: {
  cloudWatchLog: CloudWatchLog;
}): FunctionExecutionsList {
  let functionExecutionsList: FunctionExecutionsList = {};
  for (const logEvent of cloudWatchLog) {
    const { message } = logEvent;
    if (message) {
      functionExecutionsList = extractFunctionExecutionData({
        message,
        functionExecutionsList,
      });
      functionExecutionsList = extractApiCallExecutionData({
        message,
        functionExecutionsList,
      });
    }
  }
  return functionExecutionsList;
}

/**
 * Extracts the execution data of an API call from a log event message and adds it to
 * the list of function executions.
 *
 * @param {Object} params - The parameters object.
 * @param {string} params.message - The log event message to extract data from.
 * @param {FunctionExecutionsList} params.functionExecutionsList - The list of function
 * executions to add the extracted data to.
 *
 * @return {FunctionExecutionsList} The updated list of function executions.
 */
function extractApiCallExecutionData({
  message,
  functionExecutionsList,
}: {
  message: string;
  functionExecutionsList: FunctionExecutionsList;
}): FunctionExecutionsList {
  const res = functionExecutionsList;
  const apiCallLogRegex =
    /^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z)\t([a-f\d]{8}(?:-[a-f\d]{4}){3}-[a-f\d]{12})\t(INFO)/;
  const apiCallLogMatch = apiCallLogRegex.exec(message);
  if (apiCallLogMatch) {
    const requestId = apiCallLogMatch[2];
    const apiCallExecution: ApiCallExecution = extractJsonFromLogEvent({
      message,
    });
    res[requestId] = {
      ...res[requestId],
      ...apiCallExecution,
    };
  }
  return res;
}

/**
 * Parses a report event log to extract metrics and store them in a function executions list.
 *
 * @param {{ message: string; functionExecutionsList: FunctionExecutionsList; }} param -
 * An object containing the report event log message and a function executions list.
 * @param {string} param.message - The report event log message.
 * @param {FunctionExecutionsList} param.functionExecutionsList - The function executions list to store the extracted metrics.
 * @returns {FunctionExecutionsList} The updated function executions list.
 */
function extractFunctionExecutionData({
  message,
  functionExecutionsList,
}: {
  message: string;
  functionExecutionsList: FunctionExecutionsList;
}): FunctionExecutionsList {
  const res = functionExecutionsList;
  const isReportLogEvent = message.startsWith("REPORT");
  if (isReportLogEvent) {
    const requestId = extractMetricFromLogEvent({
      metricType: "requestId",
      message,
    });
    if (requestId) {
      const executionDuration = extractMetricFromLogEvent({
        metricType: "executionDuration",
        message,
      });
      if (executionDuration) {
        res[requestId]["executionDuration"] = parseNumber({
          num: executionDuration,
        });
      }

      const maxMemory = extractMetricFromLogEvent({
        metricType: "maxMemory",
        message,
      });
      if (maxMemory) {
        res[requestId]["maxMemory"] = parseNumber({
          num: maxMemory,
        });
      }

      const initDuration = extractMetricFromLogEvent({
        metricType: "initDuration",
        message,
      });
      if (initDuration) {
        res[requestId]["initDuration"] = parseNumber({
          num: initDuration,
        });
        res[requestId]["isColdStart"] = true;
      }
    }
  }
  return res;
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
