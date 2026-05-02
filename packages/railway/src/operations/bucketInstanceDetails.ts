import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query bucketInstanceDetails($bucketId: String!, $environmentId: String!) {\n  bucketInstanceDetails(bucketId: $bucketId, environmentId: $environmentId) {\n    objectCount\n    sizeBytes\n  }\n}";

// Input Schema (GraphQL variables)
export const BucketInstanceDetailsInput = Schema.Struct({
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
export type BucketInstanceDetailsInput = typeof BucketInstanceDetailsInput.Type;

// Output Schema (GraphQL selection set)
export const BucketInstanceDetailsOutput = Schema.NullOr(
  Schema.Struct({
    objectCount: Schema.String,
    sizeBytes: Schema.String,
  }),
).pipe(T.ResponsePath("bucketInstanceDetails"));
export type BucketInstanceDetailsOutput =
  typeof BucketInstanceDetailsOutput.Type;

/**
 * Get the S3-compatible credentials for a bucket
 */
export const bucketInstanceDetails = API.make(() => ({
  inputSchema: BucketInstanceDetailsInput,
  outputSchema: BucketInstanceDetailsOutput,
}));
