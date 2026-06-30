import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1ListAllBucketsInput {
  ref: string;
}
export const V1ListAllBucketsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ref: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v1/projects/{ref}/storage/buckets" }),
) as unknown as Schema.Codec<V1ListAllBucketsInput>;

// Output Schema
export type V1ListAllBucketsOutput = {
  id: string;
  name: string;
  owner: string;
  created_at: string;
  updated_at: string;
  public: boolean;
}[];
export const V1ListAllBucketsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    owner: Schema.String,
    created_at: Schema.String,
    updated_at: Schema.String,
    public: Schema.Boolean,
  }),
) as unknown as Schema.Codec<V1ListAllBucketsOutput>;

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
