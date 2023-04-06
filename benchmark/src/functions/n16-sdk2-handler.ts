import DynamoDB from "aws-sdk/clients/dynamodb.js";
import { performance } from "perf_hooks";

interface IBenchmark {
  fn: string;
  headers?: { [key: string]: string };
  time: {
    ttfb?: number;
    duration?: number;
  };
}

interface IEvent {
  type: "rntm" | "bndl";
  size: string;
}

const round = (input: number): number => Math.round(input * 100) / 100;
const dynamodb = new DynamoDB();
const TableName = process.env.TABLE_NAME!;

export async function handler(event: IEvent) {
  try {
    const benchmark: IBenchmark = {
      fn: `n16-${event.type}-sdk2-${event.size}`,
      time: {},
    };
    const start = performance.now();
    await dynamodb
      .getItem({
        TableName,
        Key: {
          pk: {
            S: event.size,
          },
        },
      })
      .on("httpHeaders", function () {
        if (!benchmark.time.ttfb) {
          benchmark.time.ttfb = round(performance.now() - start);
        }
      })
      .on("httpDone", function () {
        const end = performance.now();
        benchmark.time.duration = round(end - start);
      })
      .promise();

    //benchmarking
    console.log({ benchmark });
    return { status: 200 };
  } catch (error) {
    console.error({ error });
    return { status: 500 };
  }
}
