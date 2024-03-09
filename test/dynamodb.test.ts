import { afterEach, beforeEach, expect, test } from "vitest";
import { AWS } from "../src";
import { endpoint } from "./constants";
import { describe } from "node:test";

const client = new AWS.DynamoDB({
  endpoint,
});

interface TestContext {
  tableName: string;
}

describe("DynamoDB", () => {
  beforeEach<TestContext>(async (context) => {
    const tableName = `itty-test-table-${Date.now()}`;
    await client.createTable({
      TableName: tableName,
      KeySchema: [
        {
          AttributeName: "pk",
          KeyType: "HASH",
        },
      ],
      AttributeDefinitions: [
        {
          AttributeName: "pk",
          AttributeType: "S",
        },
      ],
      BillingMode: "PAY_PER_REQUEST",
    });
    context.tableName = tableName;
  });

  afterEach<TestContext>(async (context) => {
    await client.deleteTable({
      TableName: context.tableName,
    });
  });

  test<TestContext>("putItem, getItem", async (context) => {
    const Item = {
      pk: {
        S: "pk",
      },
      attribute: {
        S: "value",
      },
    };
    await client.putItem({
      TableName: context.tableName,
      Item,
    });

    const response = await client.getItem({
      TableName: context.tableName,
      Key: {
        pk: {
          S: "pk",
        },
      },
    });

    expect(response.Item).toEqual(Item);
  });
});
