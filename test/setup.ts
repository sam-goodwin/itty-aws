import { beforeAll } from "vitest";
import { AWS, AWSError } from "../src/index.js";
import {
  EventBusName,
  S3BucketName,
  SqsQueueName,
  SsmParameterName,
  SsmParameterValue,
  TableName,
  endpoint,
} from "./constants.js";

beforeAll(async () => {
  await Promise.all([
    createTable(),
    // createParameter(),
    // createEventBus(),
    // createS3Bucket(),
    // createSQSQueue(),
  ]);
});

async function createTable() {
  const client = new AWS.DynamoDB({ endpoint });

  try {
    const response = await client.describeTable({
      TableName: TableName,
    });

    if (response.Table === undefined) {
      await create();
    }
  } catch (err: any) {
    console.error(err);
    if (
      err instanceof AWSError &&
      err.type?.endsWith("ResourceNotFoundException")
    ) {
      await create();
    } else {
      throw err;
    }
  }

  async function create() {
    await client.createTable({
      TableName: TableName,
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
  }
}

async function createParameter() {
  const client = new AWS.SSM({ endpoint });

  try {
    await client.putParameter({
      Name: SsmParameterName,
      Value: SsmParameterValue,
      Type: "String",
      Overwrite: true,
    });
  } catch (err) {
    if (!(err instanceof AWSError) || err.type !== "ParameterAlreadyExists") {
      throw err;
    }
  }
}

async function createEventBus() {
  const client = new AWS.EventBridge({ endpoint });
  try {
    await client.createEventBus({
      Name: EventBusName,
    });
  } catch (err) {
    if (
      !(err instanceof AWSError) ||
      err.type !== "ResourceAlreadyExistsException"
    ) {
      console.error(err);
      throw err;
    }
  }
}

async function createS3Bucket() {
  const client = new AWS.S3({ endpoint });
  try {
    await client.createBucket({
      Bucket: S3BucketName,
    });
  } catch (err) {
    if (
      !(err instanceof AWSError) ||
      (err.type !== "ResourceAlreadyExistsException" &&
        err.type !== "BucketAlreadyOwnedByYou")
    ) {
      console.error(err);
      throw err;
    }
  }
}

async function createSQSQueue() {
  const client = new AWS.SQS({ endpoint });
  try {
    await client.createQueue({
      QueueName: SqsQueueName,
    });
  } catch (err) {
    throw err;
    //   if (
    //   !(err instanceof AWSError) ||
    //   (err.type !== "ResourceAlreadyExistsException" &&
    //     err.type !== "BucketAlreadyOwnedByYou")
    // ) {
    //   console.error(err);
    //   throw err;
    // }
  }
}
