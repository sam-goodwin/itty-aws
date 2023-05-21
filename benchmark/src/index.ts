import { App, Stack, aws_dynamodb, aws_lambda } from "aws-cdk-lib";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { FunctionParameters } from "../types";
import { benchmarkConfig } from "../benchmarkConfig";
import { createRequire } from "node:module";
import { randomUUID } from "node:crypto";

const DEPLOYMENT_UUID = randomUUID(); // unique identifier used to force re-deployment and cold starts triggering

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
    functionName: "setup",
    functionNumber: 1,
  });

  // Create `CONFIG.runs` instances of the functions declared in `CONFIG.functions`
  for (const functionName in benchmarkConfig.benchmarkFunctions) {
    for (let i = 1; i <= benchmarkConfig.functionInstances; i++) {
      createNodejsFunction({
        ...benchmarkConfig.benchmarkFunctions[functionName],
        functionName,
        functionNumber: i,
      });
    }
  }
})();

/**
 * Creates a new Node.js serverless function with the given properties.
 * @param props - The properties of the function.
 * @param props.functionName - The name of the function instance.
 * @param props.entryPath - The path to the entry point of the function.
 * @param props.runtimeName - The name of the runtime. Defaults to "NODEJS_16_X".
 * @param props.useItty - Whether to use the itty-aws library. Defaults to false.
 * @param props.useBundle - Whether to bundle the external modules. Defaults to false.
 * @returns A new Node.js serverless function.
 */

interface ILambdaFunction extends Omit<FunctionParameters, "chart"> {
  functionName: string;
  functionNumber: number;
}
function createNodejsFunction(props: ILambdaFunction): void {
  const {
    functionName,
    functionNumber,
    entryPath,
    runtimeName = "NODEJS_16_X",
    useItty = false,
    useBundle: bundle = false,
  } = props;

  let runtime: aws_lambda.Runtime = aws_lambda.Runtime.NODEJS_16_X;
  if (runtimeName === "NODEJS_18_X") runtime = aws_lambda.Runtime.NODEJS_18_X;

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
  const cfnName = `${benchmarkConfig.stackName}-${functionName}-${functionNumber}`;
  const handler = new NodejsFunction(stack, cfnName, {
    functionName: cfnName,
    runtime,
    entry,
    handler: "handler",
    environment: {
      TABLE_NAME: table.tableName,
      NODE_OPTIONS: "--enable-source-maps",
      BENCHMARK_FUNCTION_NAME: functionName,
      DEPLOYMENT_UUID,
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
