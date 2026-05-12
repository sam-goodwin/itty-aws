import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteObjectStorageInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectStorageId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/object-storage/{objectStorageId}" }),
  );
export type DeleteObjectStorageInput = typeof DeleteObjectStorageInput.Type;

// Output Schema
export const DeleteObjectStorageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteObjectStorageOutput = typeof DeleteObjectStorageOutput.Type;

// The operation
/**
 * Delete Object Storage
 *
 * Delete an Object Storage.
 *
 * @param objectStorageId - The [Object Storage id](#operation/list-object-storages).
 */
export const deleteObjectStorage = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteObjectStorageInput,
  outputSchema: DeleteObjectStorageOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
