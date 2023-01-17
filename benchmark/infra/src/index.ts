import {
  App,
  aws_dynamodb,
  aws_lambda,
  aws_lambda_nodejs,
  Stack,
} from "aws-cdk-lib";

const app = new App();

const stack = new Stack(app, "itty-benchmark");

const table = new aws_dynamodb.Table(stack, "Table", {
  partitionKey: {
    name: "pk",
    type: aws_dynamodb.AttributeType.STRING,
  },
  billingMode: aws_dynamodb.BillingMode.PAY_PER_REQUEST,
});

const props = {
  environment: {
    TABLE_NAME: table.tableName,
  },
  memorySize: 512,
};

const ittyFunc = new aws_lambda_nodejs.NodejsFunction(stack, "IttyFunc", {
  functionName: "benchmark-itty",
  runtime: aws_lambda.Runtime.NODEJS_18_X,
  entry: require.resolve("@benchmark/functions/lib/itty-handler"),
  bundling: {
    externalModules: ["@aws-sdk/*"],
  },
  ...props,
});

const v3BundledFunc = new aws_lambda_nodejs.NodejsFunction(stack, "V3Bundled", {
  functionName: "benchmark-v3-bundled",
  runtime: aws_lambda.Runtime.NODEJS_18_X,
  entry: require.resolve("@benchmark/functions/lib/itty-handler"),
  bundling: {
    externalModules: [],
  },
  ...props,
});

const v3ExcludedFunc = new aws_lambda_nodejs.NodejsFunction(
  stack,
  "V3Excluded",
  {
    functionName: "benchmark-v3-excluded",
    runtime: aws_lambda.Runtime.NODEJS_18_X,
    entry: require.resolve("@benchmark/functions/lib/itty-handler"),
    bundling: {
      externalModules: ["@aws-sdk/*"],
    },
    ...props,
  }
);

table.grantReadWriteData(ittyFunc);
table.grantReadWriteData(v3BundledFunc);
table.grantReadWriteData(v3ExcludedFunc);
