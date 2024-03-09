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

// Node 18, itty-aws, external @aws-sdk/*
const ittyFunc = new aws_lambda_nodejs.NodejsFunction(stack, "IttyFunc", {
  functionName: "benchmark-itty",
  runtime: aws_lambda.Runtime.NODEJS_18_X,
  entry: require.resolve("@benchmark/functions/dist/itty-handler"),
  bundling: {
    externalModules: ["@aws-sdk/*"],
  },
  ...props,
});

// Node 16, external "aws-sdk"
const v2Func = new aws_lambda_nodejs.NodejsFunction(stack, "V2", {
  functionName: "benchmark-v2",
  runtime: aws_lambda.Runtime.NODEJS_16_X,
  entry: require.resolve("@benchmark/functions/dist/v2-handler"),
  bundling: {
    externalModules: ["aws-sdk"],
  },
  ...props,
});

// Node 18, aws-sdk-v3, DynamoDBClient.send API, bundled in
const v3BundledFunc = new aws_lambda_nodejs.NodejsFunction(stack, "V3Bundled", {
  functionName: "benchmark-v3-bundled",
  runtime: aws_lambda.Runtime.NODEJS_18_X,
  entry: require.resolve("@benchmark/functions/dist/v3-handler"),
  bundling: {
    externalModules: [],
  },
  ...props,
});

// Node 18, aws-sdk-v3, DynamoDBClient.send API, tree-shaken out (using one provided by us)
const v3ExcludedFunc = new aws_lambda_nodejs.NodejsFunction(
  stack,
  "V3Excluded",
  {
    functionName: "benchmark-v3-excluded",
    runtime: aws_lambda.Runtime.NODEJS_18_X,
    entry: require.resolve("@benchmark/functions/dist/v3-handler"),
    bundling: {
      externalModules: ["@aws-sdk/*"],
    },
    ...props,
  }
);

// Node 18, aws-sdk-v3, DynamoDB.putItem (mono API), tree-shaken
const v3ExcludedMonoFunc = new aws_lambda_nodejs.NodejsFunction(
  stack,
  "V3ExcludedMono",
  {
    functionName: "benchmark-v3-mono-excluded",
    runtime: aws_lambda.Runtime.NODEJS_18_X,
    entry: require.resolve("@benchmark/functions/dist/v3-mono-handler"),
    bundling: {
      externalModules: ["@aws-sdk/*"],
    },
    ...props,
  }
);

// Node 18, aws-sdk-v3, DynamoDB.putItem (mono API), bundled
const v3BundledMonoFunc = new aws_lambda_nodejs.NodejsFunction(
  stack,
  "V3BundledMono",
  {
    functionName: "benchmark-v3-mono-bundled",
    runtime: aws_lambda.Runtime.NODEJS_18_X,
    entry: require.resolve("@benchmark/functions/dist/v3-mono-handler"),
    bundling: {
      externalModules: [],
    },
    ...props,
  }
);

table.grantReadWriteData(ittyFunc);
table.grantReadWriteData(v2Func);
table.grantReadWriteData(v3BundledFunc);
table.grantReadWriteData(v3ExcludedFunc);
table.grantReadWriteData(v3ExcludedMonoFunc);
table.grantReadWriteData(v3BundledMonoFunc);
