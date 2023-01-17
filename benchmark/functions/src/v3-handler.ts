import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({});

const TableName = process.env.TABLE_NAME!;

export async function handler() {
  await client.send(
    new PutItemCommand({
      TableName,
      Item: {
        pk: {
          S: "pk",
        },
        prop: {
          S: "value",
        },
      },
    })
  );
}
