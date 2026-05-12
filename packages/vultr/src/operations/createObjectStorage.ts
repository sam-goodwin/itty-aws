import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export const CreateObjectStorageInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cluster_id: Schema.Number,
    label: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/object-storage" }));
export type CreateObjectStorageInput = typeof CreateObjectStorageInput.Type;

// Output Schema
export const CreateObjectStorageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CreateObjectStorageOutput = typeof CreateObjectStorageOutput.Type;

// The operation
/**
 * Create Object Storage
 *
 * Create new Object Storage. The `cluster_id` attribute is required.
 */
export const createObjectStorage = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateObjectStorageInput,
  outputSchema: CreateObjectStorageOutput,
  errors: [BadRequest, Forbidden] as const,
}));
