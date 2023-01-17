import { AWS } from "../src";

process.env.AWS_REGION = "us-west-2";

const ddb = new AWS.DynamoDB();

const TableName = "MY_TABLE";

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
