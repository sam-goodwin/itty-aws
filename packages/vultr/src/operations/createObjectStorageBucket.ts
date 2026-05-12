import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export const CreateObjectStorageBucketInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectStorageId: Schema.String.pipe(T.PathParam()),
    bucket_name: Schema.String,
    versioning: Schema.optional(Schema.Boolean),
    object_lock: Schema.optional(Schema.Boolean),
    archival: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/object-storage/{objectStorageId}/bucket",
    }),
  );
export type CreateObjectStorageBucketInput =
  typeof CreateObjectStorageBucketInput.Type;

// Output Schema
export const CreateObjectStorageBucketOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CreateObjectStorageBucketOutput =
  typeof CreateObjectStorageBucketOutput.Type;

// The operation
/**
 * Create Bucket
 *
 * Create new Bucket.
 *
 * @param objectStorageId - The [Object Storage id](#operation/list-object-storages).
 */
export const createObjectStorageBucket = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateObjectStorageBucketInput,
    outputSchema: CreateObjectStorageBucketOutput,
    errors: [BadRequest, Forbidden] as const,
  }),
);
