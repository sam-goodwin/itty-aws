import { App, Stack, aws_dynamodb, aws_lambda } from "aws-cdk-lib";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { FunctionParameters } from "../types";
import { benchmarkConfig } from "../benchmarkConfig";
import { createRequire } from "node:module";

interface ILambdaFunction extends Omit<FunctionParameters, "chart"> {}

const app = new App();

const stack = new Stack(app, benchmarkConfig.stackName);

const tableName = `${benchmarkConfig.stackName}-table`;
const table = new aws_dynamodb.Table(stack, tableName, {
  tableName,
  partitionKey: {
    name: "pk",
    type: aws_dynamodb.AttributeType.STRING,
  },
  billingMode: aws_dynamodb.BillingMode.PAY_PER_REQUEST,
});

/**
 * Entry point of the program.
 * The main function is immediately invoked.
 * @returns {void}
 */
(function main(): void {
  // Benchmark setup function
  createNodejsFunction({
    ...benchmarkConfig.setupFunction,
  });

  // Create `CONFIG.runs` instances of the functions declared in `CONFIG.functions`
  benchmarkConfig.benchmarkFunctions.forEach((fn: FunctionParameters) => {
    for (let i = 1; i <= benchmarkConfig.runs; i++) {
      const functionName = `${fn.functionName}-${i}`;
      createNodejsFunction({
        functionName,
        entryPath: fn.entryPath,
      });
    }
  });
})();

/**
 * Creates a new Node.js serverless function with the given properties.
 * @param props - The properties of the function.
 * @param props.functionName - The name of the function.
 * @param props.entryPath - The path to the entry point of the function.
 * @param props.runtimeName - The name of the runtime. Defaults to "NODEJS_16_X".
 * @param props.useItty - Whether to use the itty-aws library. Defaults to false.
 * @param props.useBundle - Whether to bundle the external modules. Defaults to false.
 * @returns A new Node.js serverless function.
 */
function createNodejsFunction(props: ILambdaFunction): void {
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
      METADATA_SDK = "itty-aws";
      break;
    case !useItty && runtimeName === "NODEJS_18_X":
      METADATA_SDK = "AWS-SDK v3";
      break;
  }
  const require = createRequire(import.meta.url);
  const entry = require.resolve(entryPath);
  const cfnName = `${benchmarkConfig.stackName}-${functionName}`;
  const handler = new NodejsFunction(stack, cfnName, {
    functionName: cfnName,
    runtime,
    entry,
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
