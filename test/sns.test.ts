import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { AWS } from "../src/index.js";

import { endpoint } from "./constants.js";

const client = new AWS.SNS({
  endpoint,
});

interface TestContext {
  topicARN: string;
}

describe("SNS", () => {
  beforeEach<TestContext>(async (context) => {
    const { TopicArn } = await client.createTopic({
      Name: `itty-sns-topic-${Date.now()}`,
    });
    if (TopicArn === undefined) {
      throw new Error("TopicArn is undefined");
    }
    context.topicARN = TopicArn;
  });

  afterEach<TestContext>(async (context) => {
    await client.deleteTopic({
      TopicArn: context.topicARN,
    });
  });

  test.skip<TestContext>("publish", async (context) => {
    const response = await client.publish({
      TopicArn: context.topicARN,
      Message: "hello",
    });

    expect(response).toMatchObject({
      MessageId: expect.any(String),
      MD5OfMessageBody: expect.any(String),
    });
  });
});
