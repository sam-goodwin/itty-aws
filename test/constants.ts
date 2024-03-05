export const TableName = "itty-test-table";

export const SsmParameterName = "itty-parameter-name";

export const SsmParameterValue = "itty-parameter-value";

export const EventBusName = "itty-event-bus";

export const S3BucketName = "itty-s3-bucket";

export const SqsQueueName = "itty-sqs-queue";

process.env.AWS_ACCESS_KEY_ID = "test";
process.env.AWS_SECRET_ACCESS_KEY = "test";
process.env.AWS_REGION = "us-east-1";
process.env.AWS_DEFAULT_REGION = "us-east-1";

export const endpoint = "http://localhost:4566";
