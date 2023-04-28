import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";
import { performance } from "perf_hooks";
import { Context } from "aws-lambda";
import { roundToTwoDecimalPlaces } from "../../utils/roundToTwoDecimalPlaces";

const TableName = process.env.TABLE_NAME!;
const dynamodb = new DynamoDBClient({});

export async function handler(_: unknown, context: Context) {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    let httpRequest: number | undefined;
    let apiCall: number | undefined;
    // Middleware (mark start and end of each HTTP requests including retry)
    // source: https://aws.amazon.com/fr/blogs/developer/middleware-stack-modular-aws-sdk-js/
    // API call round trip latency
    dynamodb.middlewareStack.add(
      (next) => async (args) => {
        const start = performance.now();
        const res = await next(args);
        apiCall = roundToTwoDecimalPlaces(performance.now() - start);
        return res;
      },
      { step: "deserialize", priority: "low", tags: ["ROUND_TRIP"] }
    );
    // HTTP request latency
    dynamodb.middlewareStack.add(
      (next) => async (args) => {
        const start = performance.now();
        const res = await next(args);
        httpRequest = roundToTwoDecimalPlaces(performance.now() - start);
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
    console.log(
      JSON.stringify({
        context: {
          name: process.env.METADATA_FN_NAME!,
          runtime: process.env.METADATA_RUNTIME!,
          sdk: {
            name: process.env.METADATA_SDK!,
            source: process.env.METADATA_SDK_SOURCE!,
          },
        },
        latency: { httpRequest, apiCall },
      })
    );
    return { status: 200 };
  } catch (error) {
    console.error({ error });
    return { status: 500 };
  }
}
