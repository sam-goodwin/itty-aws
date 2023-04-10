import { App, Stack, Duration, aws_dynamodb, aws_lambda } from "aws-cdk-lib";
import { NodejsFunction, LogLevel } from "aws-cdk-lib/aws-lambda-nodejs";
import { RetentionDays } from "aws-cdk-lib/aws-logs";

const STACK = `benchmark`;
const TABLE_NAME = `${STACK}-table`;
const FUNCTION_PREFIX = `${STACK}-fn`;

const app = new App();

const stack = new Stack(app, STACK);

const table = new aws_dynamodb.Table(stack, TABLE_NAME, {
  partitionKey: {
    name: "pk",
    type: aws_dynamodb.AttributeType.STRING,
  },
  billingMode: aws_dynamodb.BillingMode.PAY_PER_REQUEST,
});

const props = {
  environment: {
    TABLE_NAME: table.tableName,
    NODE_OPTIONS: "--enable-source-maps",
  },
  memorySize: 512,
  bundling: {
    target: "ES2022",
    keepNames: true,
    logLevel: LogLevel.INFO,
    sourceMap: true,
    minify: true,
  },
  timeout: Duration.seconds(5),
  logRetention: RetentionDays.ONE_DAY,
};

let FN_NAME: string;
let fn: NodejsFunction;

// benchmark setup
FN_NAME = `${FUNCTION_PREFIX}_setup`;
fn = new NodejsFunction(stack, FN_NAME, {
  functionName: FN_NAME,
  runtime: aws_lambda.Runtime.NODEJS_16_X,
  entry: require.resolve("./functions/benchmark-setup-handler"),
  handler: "handler",
  ...props,
});
table.grantWriteData(fn);

// Node.js 16.x, runtime aws-sdk v2
FN_NAME = `${FUNCTION_PREFIX}_n16-sdk2-rntm`;
fn = new NodejsFunction(stack, FN_NAME, {
  functionName: FN_NAME,
  runtime: aws_lambda.Runtime.NODEJS_16_X,
  entry: require.resolve("./functions/n16-sdk2-handler"),
  handler: "handler",
  ...props,
  bundling: {
    ...props.bundling,
    externalModules: ["aws-sdk"],
  },
});
table.grantReadData(fn);

// Node.js 16.x, bundled aws-sdk v2
FN_NAME = `${FUNCTION_PREFIX}_n16-sdk2-bndl`;
fn = new NodejsFunction(stack, FN_NAME, {
  functionName: FN_NAME,
  runtime: aws_lambda.Runtime.NODEJS_16_X,
  entry: require.resolve("./functions/n16-sdk2-handler"),
  handler: "handler",
  ...props,
  bundling: {
    ...props.bundling,
    externalModules: [],
  },
});
table.grantReadData(fn);
