import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateObjectStorageInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectStorageId: Schema.String.pipe(T.PathParam()),
    label: Schema.String,
  }).pipe(T.Http({ method: "PUT", path: "/object-storage/{objectStorageId}" }));
export type UpdateObjectStorageInput = typeof UpdateObjectStorageInput.Type;

// Output Schema
export const UpdateObjectStorageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateObjectStorageOutput = typeof UpdateObjectStorageOutput.Type;

// The operation
/**
 * Update Object Storage
 *
 * Update the label for an Object Storage.
 *
 * @param objectStorageId - The [Object Storage id](#operation/list-object-storages).
 */
export const updateObjectStorage = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateObjectStorageInput,
  outputSchema: UpdateObjectStorageOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
