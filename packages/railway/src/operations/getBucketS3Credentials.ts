import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query bucketS3Credentials($bucketId: String!, $environmentId: String!, $projectId: String!) {\n  bucketS3Credentials(bucketId: $bucketId, environmentId: $environmentId, projectId: $projectId) {\n    accessKeyId\n    bucketName\n    createdAt\n    endpoint\n    region\n    secretAccessKey\n    urlStyle\n  }\n}";

// Input Schema (GraphQL variables)
export const GetBucketS3CredentialsInput = Schema.Struct({
  bucketId: Schema.String,
  environmentId: Schema.String,
  projectId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "bucketS3Credentials",
    type: "query",
  }),
);
export type GetBucketS3CredentialsInput =
  typeof GetBucketS3CredentialsInput.Type;

// Output Schema (GraphQL selection set)
export const GetBucketS3CredentialsOutput = Schema.Array(
  Schema.Struct({
    accessKeyId: Schema.String,
    bucketName: Schema.String,
    createdAt: Schema.String,
    endpoint: Schema.String,
    region: Schema.String,
    secretAccessKey: Schema.String,
    urlStyle: Schema.String,
  }),
).pipe(T.ResponsePath("bucketS3Credentials"));
export type GetBucketS3CredentialsOutput =
  typeof GetBucketS3CredentialsOutput.Type;

/**
 * Get the S3-compatible credentials for a bucket
 */
export const getBucketS3Credentials = API.make(() => ({
  inputSchema: GetBucketS3CredentialsInput,
  outputSchema: GetBucketS3CredentialsOutput,
}));
