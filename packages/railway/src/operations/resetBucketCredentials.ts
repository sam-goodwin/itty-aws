import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation bucketCredentialsReset($bucketId: String!, $environmentId: String!, $projectId: String!) {\n  bucketCredentialsReset(bucketId: $bucketId, environmentId: $environmentId, projectId: $projectId) {\n    accessKeyId\n    bucketName\n    createdAt\n    endpoint\n    region\n    secretAccessKey\n    urlStyle\n  }\n}";

// Input Schema (GraphQL variables)
export const ResetBucketCredentialsInput = Schema.Struct({
  bucketId: Schema.String,
  environmentId: Schema.String,
  projectId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "bucketCredentialsReset",
    type: "mutation",
  }),
);
export type ResetBucketCredentialsInput =
  typeof ResetBucketCredentialsInput.Type;

// Output Schema (GraphQL selection set)
export const ResetBucketCredentialsOutput = Schema.Struct({
  accessKeyId: Schema.String,
  bucketName: Schema.String,
  createdAt: Schema.String,
  endpoint: Schema.String,
  region: Schema.String,
  secretAccessKey: Schema.String,
  urlStyle: Schema.String,
}).pipe(T.ResponsePath("bucketCredentialsReset"));
export type ResetBucketCredentialsOutput =
  typeof ResetBucketCredentialsOutput.Type;

/**
 * Reset the credentials for a bucket in an environment
 */
export const resetBucketCredentials = API.make(() => ({
  inputSchema: ResetBucketCredentialsInput,
  outputSchema: ResetBucketCredentialsOutput,
}));
