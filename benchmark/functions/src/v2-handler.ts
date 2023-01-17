import DynamoDB from "aws-sdk/clients/dynamodb.js";

const client = new DynamoDB();

const TableName = process.env.TABLE_NAME!;

//

export async function handler() {
  await client
    .putItem({
      TableName,
      Item: {
        pk: {
          S: "pk",
        },
        prop: {
          S: "Value",
        },
      },
    })
    .promise();
}
