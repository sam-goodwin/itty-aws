import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetKeyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keyId: Schema.Number.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/keys/{keyId}" }));
export type GetKeyInput = typeof GetKeyInput.Type;

// Output Schema
export const GetKeyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.String),
  description: Schema.String,
  actions: Schema.Array(Schema.String),
  collections: Schema.Array(Schema.String),
  expires_at: Schema.optional(Schema.Number),
  id: Schema.optional(Schema.Number),
  value_prefix: Schema.optional(Schema.String),
});
export type GetKeyOutput = typeof GetKeyOutput.Type;

// The operation
/**
 * Retrieve (metadata about) a key
 *
 * Retrieve (metadata about) a key. Only the key prefix is returned when you retrieve a key. Due to security reasons, only the create endpoint returns the full API key.
 *
 * @param keyId - The ID of the key to retrieve
 */
export const getKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetKeyInput,
  outputSchema: GetKeyOutput,
  errors: [NotFound] as const,
}));
