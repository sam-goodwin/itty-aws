import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export const SetObjectStorageBucketLifecycleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectStorageId: Schema.String.pipe(T.PathParam()),
    bucketName: Schema.String.pipe(T.PathParam()),
    archive_rules: Schema.Array(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/object-storage/{objectStorageId}/bucket/{bucketName}/lifecycle",
    }),
  );
export type SetObjectStorageBucketLifecycleInput =
  typeof SetObjectStorageBucketLifecycleInput.Type;

// Output Schema
export const SetObjectStorageBucketLifecycleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SetObjectStorageBucketLifecycleOutput =
  typeof SetObjectStorageBucketLifecycleOutput.Type;

// The operation
/**
 * Set Bucket Lifecycle Policy
 *
 * Set the lifecycle policy of a Bucket.
 *
 * @param objectStorageId - The [Object Storage id](#operation/list-object-storages).
 * @param bucketName - The name of the bucket.
 */
export const setObjectStorageBucketLifecycle =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SetObjectStorageBucketLifecycleInput,
    outputSchema: SetObjectStorageBucketLifecycleOutput,
    errors: [BadRequest, Forbidden] as const,
  }));
