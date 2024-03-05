const hasCredentials = process.env.AWS_ACCESS_KEY_ID != undefined;

process.env.AWS_ACCESS_KEY_ID ??= "test";
process.env.AWS_SECRET_ACCESS_KEY ??= "test";
process.env.AWS_REGION ??= "us-east-2";
process.env.AWS_DEFAULT_REGION ??= process.env.AWS_REGION;

export const endpoint: string | undefined = hasCredentials
  ? undefined
  : "http://localhost:4566";

export const s3Endpoint: string | undefined = hasCredentials
  ? undefined
  : "http://s3.localhost.localstack.cloud:4566";
