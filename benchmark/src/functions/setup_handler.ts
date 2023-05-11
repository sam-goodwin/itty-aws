import DynamoDB from "aws-sdk/clients/dynamodb.js";
import { randomBytes } from "crypto";

const dynamodb = new DynamoDB();
const TableName = process.env.TABLE_NAME!;

/**
 * Async function that puts a 10KB document and returns a status object.
 * @returns {Object} The status object with a status code and potentially an error.
 */
export async function handler(): Promise<
  { status: number; error?: undefined } | { status: number; error: unknown }
> {
  try {
    await putDoc("10KB", 10240); // 10KB doc
    return { status: 200 };
  } catch (error) {
    console.error({ error });
    return { status: 500, error };
  }
}

/**
 * Puts a document into DynamoDB with the given name and size.
 * @param {string} name - The name of the document.
 * @param {number} size - The size of the document in bytes.
 * @returns {Promise} A promise that resolves when the document is successfully put into DynamoDB.
 */
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