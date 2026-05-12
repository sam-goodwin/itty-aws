import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const GetObjectStorageInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  objectStorageId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/object-storage/{objectStorageId}" }));
export type GetObjectStorageInput = typeof GetObjectStorageInput.Type;

// Output Schema
export const GetObjectStorageOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    object_storage: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        date_created: Schema.optional(Schema.String),
        cluster_id: Schema.optional(Schema.Number),
        region: Schema.optional(Schema.String),
        label: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        s3_hostname: Schema.optional(Schema.String),
        s3_access_key: Schema.optional(Schema.String),
        s3_secret_key: Schema.optional(SensitiveString),
      }),
    ),
  },
);
export type GetObjectStorageOutput = typeof GetObjectStorageOutput.Type;

// The operation
/**
 * Get Object Storage
 *
 * Get information about an Object Storage.
 *
 * @param objectStorageId - The [Object Storage id](#operation/list-object-storages).
 */
export const getObjectStorage = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetObjectStorageInput,
  outputSchema: GetObjectStorageOutput,
  errors: [BadRequest, NotFound] as const,
}));
