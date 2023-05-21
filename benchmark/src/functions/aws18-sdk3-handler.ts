import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";
import { performance } from "perf_hooks";
import { Context } from "aws-lambda";
import { roundToTwoDecimalPlaces } from "../../utils/format";
import { ApiCall } from "../../types";

const TableName = process.env.TABLE_NAME!;
const dynamodb = new DynamoDBClient({});

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
    // Middleware (mark start and end of each HTTP requests including retry)
    // source: https://aws.amazon.com/fr/blogs/developer/middleware-stack-modular-aws-sdk-js/
    // API call round trip latency
    dynamodb.middlewareStack.add(
      (next) => async (args) => {
        const start = performance.now();
        const res = await next(args);
        apiCallLatency = roundToTwoDecimalPlaces(performance.now() - start);
        return res;
      },
      { step: "deserialize", priority: "low", tags: ["ROUND_TRIP"] }
    );
    // HTTP request latency
    dynamodb.middlewareStack.add(
      (next) => async (args) => {
        const start = performance.now();
        const res = await next(args);
        httpRequestLatency = roundToTwoDecimalPlaces(performance.now() - start);
        return res;
      },
      { step: "deserialize", priority: "low", tags: ["ROUND_TRIP"] }
    );
    const getItemParams = new GetItemCommand({
      TableName,
      Key: {
        pk: {
          S: "10KB",
        },
      },
    });

    //benchmarking
    await dynamodb.send(getItemParams);
    const benchmarkResult: ApiCall = {
      functionName: process.env.BENCHMARK_FUNCTION_NAME!,
      httpRequestLatency,
      apiCallLatency,
    };
    console.log(JSON.stringify(benchmarkResult));
    return { status: 200 };
  } catch (error) {
    console.error({ error });
    return { status: 500 };
  }
}
