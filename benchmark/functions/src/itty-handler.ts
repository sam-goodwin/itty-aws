import { AWS } from "itty-aws";

const client = new AWS.DynamoDB();

const TableName = process.env.TABLE_NAME!;

export async function handler() {
  await client.putItem({
    TableName,
    Item: {
      pk: {
        S: "pk",
      },
      prop: {
        S: "value",
      },
    },
  });
}
