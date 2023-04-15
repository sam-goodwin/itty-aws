import { App, Stack, aws_dynamodb, aws_lambda } from "aws-cdk-lib";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { CONFIG, IFunction } from "../benchmarkConfig";

const STACK_NAME = `benchmark`;

const app = new App();

const stack = new Stack(app, STACK_NAME);

const table = new aws_dynamodb.Table(stack, STACK_NAME, {
  partitionKey: {
    name: "pk",
    type: aws_dynamodb.AttributeType.STRING,
  },
  billingMode: aws_dynamodb.BillingMode.PAY_PER_REQUEST,
});

function createNodejsFunction(props: IFunction) {
  const {
    functionName,
    entryPath,
    runtimeName = "NODEJS_16_X",
    useItty = false,
    useBundle: bundle = false,
  } = props;

  let runtime: aws_lambda.Runtime = aws_lambda.Runtime.NODEJS_16_X;
  if (runtimeName === "NODEJS_18_X") runtime = aws_lambda.Runtime.NODEJS_16_X;

  let externalModules: string[] = ["aws-sdk"];
  switch (true) {
    case bundle:
      externalModules = [];
      break;
    case !bundle && runtimeName === "NODEJS_18_X":
      externalModules = ["@aws-sdk/*"];
      break;
  }

  let METADATA_SDK: string = "AWS-SDK v2";
  switch (true) {
    case useItty:
      METADATA_SDK = "Itty-AWS";
      break;
    case !useItty && runtimeName === "NODEJS_18_X":
      METADATA_SDK = "AWS-SDK v3";
      break;
  }

  const handler = new NodejsFunction(stack, functionName, {
    functionName,
    runtime,
    entry: require.resolve(entryPath),
    handler: "handler",
    environment: {
      TABLE_NAME: table.tableName,
      NODE_OPTIONS: "--enable-source-maps",
      METADATA_FN_NAME: functionName,
      METADATA_RUNTIME: runtimeName,
      METADATA_SDK,
      METADATA_SDK_SOURCE: bundle ? "bundle" : "runtime",
    },
    awsSdkConnectionReuse: true,
    memorySize: 512,
    bundling: {
      target: "ES2022",
      externalModules,
    },
  });
  table.grantReadWriteData(handler);
}

// Dynamodb setup function
createNodejsFunction({
  functionName: "ddb-setup",
  entryPath: "./functions/ddb-setup_handler",
});

// Create `CONFIG.runs` instances of the functions declared in `CONFIG.functions`
CONFIG.functions.forEach((fn: IFunction) => {
  for (let i = 1; i <= CONFIG.runs; i++) {
    const functionName = `${fn.functionName}-${i}`;
    createNodejsFunction({
      functionName,
      entryPath: fn.entryPath,
    });
  }
});
