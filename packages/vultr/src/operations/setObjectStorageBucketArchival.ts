import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export const SetObjectStorageBucketArchivalInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectStorageId: Schema.String.pipe(T.PathParam()),
    bucketName: Schema.String.pipe(T.PathParam()),
    archival: Schema.Boolean,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/object-storage/{objectStorageId}/bucket/{bucketName}/archival",
    }),
  );
export type SetObjectStorageBucketArchivalInput =
  typeof SetObjectStorageBucketArchivalInput.Type;

// Output Schema
export const SetObjectStorageBucketArchivalOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SetObjectStorageBucketArchivalOutput =
  typeof SetObjectStorageBucketArchivalOutput.Type;

// The operation
/**
 * Enable Bucket Archival
 *
 * Set the archival status of a Bucket.
 *
 * @param objectStorageId - The [Object Storage id](#operation/list-object-storages).
 * @param bucketName - The name of the bucket.
 */
export const setObjectStorageBucketArchival =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SetObjectStorageBucketArchivalInput,
    outputSchema: SetObjectStorageBucketArchivalOutput,
    errors: [BadRequest, Forbidden] as const,
  }));
