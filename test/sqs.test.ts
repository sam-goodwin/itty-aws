import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { AWS } from "../src/index.js";

import { endpoint } from "./constants.js";

const client = new AWS.SQS({
  endpoint,
});

interface TestContext {
  queueURL: string;
}

describe("SQS", () => {
  beforeEach<TestContext>(async (context) => {
    const { QueueUrl } = await client.createQueue({
      QueueName: `itty-sqs-queue-${Date.now()}`,
    });
    if (QueueUrl === undefined) {
      throw new Error("QueueUrl is undefined");
    }
    context.queueURL = QueueUrl;
  });

  afterEach<TestContext>(async (context) => {
    await client.deleteQueue({
      QueueUrl: context.queueURL,
    });
  });

  test<TestContext>("sendMessage", async (context) => {
    const response = await client.sendMessage({
      QueueUrl: context.queueURL,
      MessageBody: "hello",
    });

    expect(response).toMatchObject({
      MessageId: expect.any(String),
      MD5OfMessageBody: expect.any(String),
    });
  });
});
