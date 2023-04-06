import DynamoDB from "aws-sdk/clients/dynamodb.js";
import { randomBytes } from "crypto";

const dynamodb = new DynamoDB();
const TableName = process.env.TABLE_NAME!;

const putDoc = (name: string, size: number) =>
  dynamodb
    .putItem({
      TableName,
      Item: {
        pk: {
          S: name,
        },
        data: {
          B: randomBytes(size),
        },
      },
    })
    .promise();

export async function handler() {
  try {
    await Promise.allSettled([
      putDoc("1KB", 1024), // 1KB doc
      putDoc("10KB", 10240), // 10KB doc
    ]);
    return { status: 200 };
  } catch (error) {
    console.error({ error });
    return { status: 500, error };
  }
}
