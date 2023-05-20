import { performance } from "perf_hooks";
import { AWS } from "itty-aws";
import { Context } from "aws-lambda";
import { roundToTwoDecimalPlaces } from "../../utils/format";
import { ApiCall } from "../../types";

const TableName = process.env.TABLE_NAME!;
const client = new AWS.DynamoDB();

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
    const start = performance.now();
    await client.putItem({
      TableName,
      Item: {
        pk: {
          S: "pk",
        },
        prop: {
          S: "Value",
        },
      },
    });
    const apiCallLatency = roundToTwoDecimalPlaces(performance.now() - start);
    const benchmarkResult: ApiCall = {
      functionName: process.env.METADATA_FN_NAME!,
      apiCallLatency,
      httpRequestLatency: undefined,
    };
    //benchmarking
    console.log(JSON.stringify(benchmarkResult));
    return { status: 200 };
  } catch (error) {
    console.error({ error });
    return { status: 500 };
  }
}
