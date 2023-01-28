import { AWS, AWSError } from "../src/index.js";
import {
  EventBusName,
  S3BucketName,
  SsmParameterName,
  SsmParameterValue,
  TableName,
} from "./constants.js";

try {
  await Promise.all([createTable(), createParameter(), createEventBus(), createS3Bucket()]);
} catch (err) {
  console.error(err);
  process.exit(1);
}

async function createTable() {
  const client = new AWS.DynamoDB();

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
  const client = new AWS.SSM();

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
  const client = new AWS.EventBridge();
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
  const client = new AWS.S3();
  try {
    await client.createBucket({
      Bucket: S3BucketName,
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
