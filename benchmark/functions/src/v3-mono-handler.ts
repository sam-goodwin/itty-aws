import { DynamoDB } from "@aws-sdk/client-dynamodb";

const client = new DynamoDB({});

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
