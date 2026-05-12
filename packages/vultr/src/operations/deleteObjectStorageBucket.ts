import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteObjectStorageBucketInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectStorageId: Schema.String.pipe(T.PathParam()),
    bucketName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/object-storage/{objectStorageId}/bucket/{bucketName}",
    }),
  );
export type DeleteObjectStorageBucketInput =
  typeof DeleteObjectStorageBucketInput.Type;

// Output Schema
export const DeleteObjectStorageBucketOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteObjectStorageBucketOutput =
  typeof DeleteObjectStorageBucketOutput.Type;

// The operation
/**
 * Delete Bucket
 *
 * Delete a Bucket.
 *
 * @param objectStorageId - The [Object Storage id](#operation/list-object-storages).
 * @param bucketName - The name of the bucket.
 */
export const deleteObjectStorageBucket = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteObjectStorageBucketInput,
    outputSchema: DeleteObjectStorageBucketOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
