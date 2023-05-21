import DynamoDB from "aws-sdk/clients/dynamodb.js";
import { performance } from "perf_hooks";
import { Context } from "aws-lambda";
import { roundToTwoDecimalPlaces } from "../../utils/format";
import { ApiCall } from "../../types";

const TableName = process.env.TABLE_NAME!;
const dynamodb = new DynamoDB();

/**
 * Handles an AWS Lambda event.
 *
 * @param _ - The event data.
 * @param context - The AWS Lambda context object.
 * @returns An object containing the HTTP status code.
 */
export async function handler(
  _: unknown,
  context: Context
): Promise<{ status: number }> {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    let httpRequestLatency: number = 0;
    let apiCallLatency: number = 0;
    const start = performance.now();
    await dynamodb
      .getItem({
        TableName,
        Key: {
          pk: {
            S: "10KB",
          },
        },
      })
      .on("httpHeaders", function () {
        if (!httpRequestLatency) {
          httpRequestLatency = roundToTwoDecimalPlaces(
            performance.now() - start
          );
        }
      })
      .on("httpDone", function () {
        apiCallLatency = roundToTwoDecimalPlaces(performance.now() - start);
      })
      .promise();

    const benchmarkResult: ApiCall = {
      functionName: process.env.BENCHMARK_FUNCTION_NAME!,
      httpRequestLatency,
      apiCallLatency,
    };
    //benchmarking
    console.log(JSON.stringify(benchmarkResult));
    return { status: 200 };
  } catch (error) {
    console.error({ error });
    return { status: 500 };
  }
}
