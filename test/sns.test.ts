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

  test<TestContext>("publish", async (context) => {
    const response = await client.publish({
      TopicArn: context.topicARN,
      Message: "hello",
    });

    expect(response).toMatchObject({
      MessageId: expect.any(String),
    });
  });

  // Skip because LocalStack does not support this feature (or has a bug).
  test.skip<TestContext>("publishBatch", async (context) => {
    const response = await client.publishBatch({
      TopicArn: context.topicARN,
      PublishBatchRequestEntries: [
        {
          Id: "1",
          Message: "hello",
          MessageGroupId: "group1",
          MessageDeduplicationId: "dedup1",
        },
        {
          Id: "2",
          Message: "world",
          MessageGroupId: "group1",
          MessageDeduplicationId: "dedup2",
        },
      ],
    });

    expect(response).toMatchObject({
      MessageId: expect.any(String),
    });
  });

  test<TestContext>("getTopicAttributes", async (context) => {
    const response = await client.getTopicAttributes({
      TopicArn: context.topicARN,
    });

    expect(response).toMatchObject({
      Attributes: {
        Owner: "000000000000",
        DisplayName: "",
        SubscriptionsDeleted: "0",
      },
    });
  });
});
