import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteObjectStorageBucketLifecyclePolicyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectStorageId: Schema.String.pipe(T.PathParam()),
    bucketName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/object-storage/{objectStorageId}/bucket/{bucketName}/lifecycle",
    }),
  );
export type DeleteObjectStorageBucketLifecyclePolicyInput =
  typeof DeleteObjectStorageBucketLifecyclePolicyInput.Type;

// Output Schema
export const DeleteObjectStorageBucketLifecyclePolicyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteObjectStorageBucketLifecyclePolicyOutput =
  typeof DeleteObjectStorageBucketLifecyclePolicyOutput.Type;

// The operation
/**
 * Delete Bucket Lifecycle Policy
 *
 * Delete the Bucket Lifecycle Policy.
 *
 * @param objectStorageId - The [Object Storage id](#operation/list-object-storages).
 * @param bucketName - The name of the bucket.
 */
export const deleteObjectStorageBucketLifecyclePolicy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteObjectStorageBucketLifecyclePolicyInput,
    outputSchema: DeleteObjectStorageBucketLifecyclePolicyOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
