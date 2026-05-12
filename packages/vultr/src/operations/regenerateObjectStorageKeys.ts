import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const RegenerateObjectStorageKeysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectStorageId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/object-storage/{objectStorageId}/regenerate-keys",
    }),
  );
export type RegenerateObjectStorageKeysInput =
  typeof RegenerateObjectStorageKeysInput.Type;

// Output Schema
export const RegenerateObjectStorageKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    s3_credentials: Schema.optional(
      Schema.Struct({
        s3_hostname: Schema.optional(Schema.String),
        s3_access_key: Schema.optional(Schema.String),
        s3_secret_key: Schema.optional(SensitiveString),
      }),
    ),
  });
export type RegenerateObjectStorageKeysOutput =
  typeof RegenerateObjectStorageKeysOutput.Type;

// The operation
/**
 * Regenerate Object Storage Keys
 *
 * Regenerate the keys for an Object Storage.
 *
 * @param objectStorageId - The [Object Storage id](#operation/list-object-storages).
 */
export const regenerateObjectStorageKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RegenerateObjectStorageKeysInput,
    outputSchema: RegenerateObjectStorageKeysOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
