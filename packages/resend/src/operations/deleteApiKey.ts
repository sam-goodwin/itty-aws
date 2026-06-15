import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const DeleteApiKeyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  api_key_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/api-keys/{api_key_id}" }));
export type DeleteApiKeyInput = typeof DeleteApiKeyInput.Type;

// Output Schema
export const DeleteApiKeyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  deleted: Schema.optional(Schema.Boolean),
});
export type DeleteApiKeyOutput = typeof DeleteApiKeyOutput.Type;

// The operation
/**
 * Remove an existing API key
 *
 * @param api_key_id - The API key ID.
 */
export const deleteApiKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteApiKeyInput,
  outputSchema: DeleteApiKeyOutput,
  errors: [NotFound] as const,
}));
