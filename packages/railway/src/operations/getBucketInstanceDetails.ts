import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query bucketInstanceDetails($bucketId: String!, $environmentId: String!) {\n  bucketInstanceDetails(bucketId: $bucketId, environmentId: $environmentId) {\n    objectCount\n    sizeBytes\n  }\n}";

// Input Schema (GraphQL variables)
export const GetBucketInstanceDetailsInput = Schema.Struct({
  bucketId: Schema.String,
  environmentId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "bucketInstanceDetails",
    type: "query",
  }),
);
export type GetBucketInstanceDetailsInput =
  typeof GetBucketInstanceDetailsInput.Type;

// Output Schema (GraphQL selection set)
export const GetBucketInstanceDetailsOutput = Schema.NullOr(
  Schema.Struct({
    objectCount: Schema.String,
    sizeBytes: Schema.String,
  }),
).pipe(T.ResponsePath("bucketInstanceDetails"));
export type GetBucketInstanceDetailsOutput =
  typeof GetBucketInstanceDetailsOutput.Type;

/**
 * Get the S3-compatible credentials for a bucket
 */
export const getBucketInstanceDetails = API.make(() => ({
  inputSchema: GetBucketInstanceDetailsInput,
  outputSchema: GetBucketInstanceDetailsOutput,
}));
