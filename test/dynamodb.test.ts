import { expect, test } from "vitest";
import { AWS } from "../src";
import { TableName } from "./constants";

const ddb = new AWS.DynamoDB();

test("DynamoDB PutItem and GetItem should work", async () => {
  const Item = {
    pk: {
      S: "pk",
    },
    attribute: {
      S: "value",
    },
  };
  await ddb.putItem({
    TableName,
    Item,
  });

  const response = await ddb.getItem({
    TableName,
    Key: {
      pk: {
        S: "pk",
      },
    },
  });

  expect(response.Item).toEqual(Item);
});
