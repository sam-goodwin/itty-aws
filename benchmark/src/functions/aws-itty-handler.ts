import { performance } from "perf_hooks";
import { AWS } from "itty-aws";
import { Context } from "aws-lambda";

const round = (input: number): number => Math.round(input * 100) / 100;
const TableName = process.env.TABLE_NAME!;
const client = new AWS.DynamoDB();

export async function handler(_: unknown, context: Context) {
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
    const apiCall = round(performance.now() - start);
    //benchmarking
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
        latency: { httpRequest: undefined, apiCall },
      })
    );
    return { status: 200 };
  } catch (error) {
    console.error({ error });
    return { status: 500 };
  }
}
