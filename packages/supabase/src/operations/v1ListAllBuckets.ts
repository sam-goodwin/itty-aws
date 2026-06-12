import * as Schema from "effect/Schema";
import { V1StorageBucketResponseSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export const V1ListAllBucketsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ref: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v1/projects/{ref}/storage/buckets" }));
export type V1ListAllBucketsInput = typeof V1ListAllBucketsInput.Type;

// Output Schema
export const V1ListAllBucketsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.suspend(() => V1StorageBucketResponseSchema),
);
export type V1ListAllBucketsOutput = typeof V1ListAllBucketsOutput.Type;

// The operation
/**
 * Lists all buckets
 *
 * @param ref - Project ref
 */
export const v1ListAllBuckets = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1ListAllBucketsInput,
  outputSchema: V1ListAllBucketsOutput,
  errors: [BadRequest, Forbidden] as const,
}));
