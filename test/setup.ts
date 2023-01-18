import { AWS, AWSError } from "../src/index.js";
import { SsmParameterName, SsmParameterValue, TableName } from "./constants.js";

const dynamo = new AWS.DynamoDB();

const ssm = new AWS.SSM();

try {
  await Promise.all([createTable(), createParameter()]);
} catch (err) {
  console.error(err);
  process.exit(1);
}

async function createTable() {
  try {
    const response = await dynamo.describeTable({
      TableName: TableName,
    });

    if (response.Table === undefined) {
      await create();
    }
  } catch (err: any) {
    if (err.__type.endsWith("ResourceNotFoundException")) {
      await create();
    } else {
      throw err;
    }
  }

  async function create() {
    await dynamo.createTable({
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
  try {
    await ssm.putParameter({
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
