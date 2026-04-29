import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Conflict } from "../errors.ts";

// Input Schema
export const CreateKeyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.String),
  description: Schema.String,
  actions: Schema.Array(Schema.String),
  collections: Schema.Array(Schema.String),
  expires_at: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "POST", path: "/keys" }));
export type CreateKeyInput = typeof CreateKeyInput.Type;

// Output Schema
export const CreateKeyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.String),
  description: Schema.String,
  actions: Schema.Array(Schema.String),
  collections: Schema.Array(Schema.String),
  expires_at: Schema.optional(Schema.Number),
  id: Schema.optional(Schema.Number),
  value_prefix: Schema.optional(Schema.String),
});
export type CreateKeyOutput = typeof CreateKeyOutput.Type;

// The operation
/**
 * Create an API Key
 *
 * Create an API Key with fine-grain access control. You can restrict access on both a per-collection and per-action level. The generated key is returned only during creation. You want to store this key carefully in a secure place.
 */
export const createKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateKeyInput,
  outputSchema: CreateKeyOutput,
  errors: [BadRequest, Conflict] as const,
}));
