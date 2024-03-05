process.env.AWS_ACCESS_KEY_ID ??= "test";
process.env.AWS_SECRET_ACCESS_KEY ??= "test";
process.env.AWS_REGION ??= "us-east-2";
process.env.AWS_DEFAULT_REGION ??= process.env.AWS_REGION;

export const endpoint = "http://localhost:4566";

export const s3Endpoint = "http://s3.localhost.localstack.cloud:4566";
