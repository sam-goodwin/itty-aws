import DynamoDB from "aws-sdk/clients/dynamodb.js";
import { performance } from "perf_hooks";
import { Context } from "aws-lambda";

const round = (input: number): number => Math.round(input * 100) / 100;
const TableName = process.env.TABLE_NAME!;
const dynamodb = new DynamoDB();

export async function handler(_: unknown, context: Context) {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    let httpRequest: number | undefined;
    let apiCall: number | undefined;
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
        if (!httpRequest) {
          httpRequest = round(performance.now() - start);
        }
      })
      .on("httpDone", function () {
        apiCall = round(performance.now() - start);
      })
      .promise();

    //benchmarking
    console.log({
      context: {
        name: process.env.METADATA_FN_NAME!,
        runtime: process.env.METADATA_RUNTIME!,
        sdk: {
          name: process.env.METADATA_SDK!,
          source: process.env.METADATA_SDK_SOURCE!,
        },
      },
      latency: { httpRequest, apiCall },
    });
    return { status: 200 };
  } catch (error) {
    console.error({ error });
    return { status: 500 };
  }
}
