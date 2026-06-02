import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound } from "../../errors.ts";

// Input Schema
export const DeleteApiKeyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  apiKeyID: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/api_keys/{apiKeyID}" }));
export type DeleteApiKeyInput = typeof DeleteApiKeyInput.Type;

// Output Schema
export const DeleteApiKeyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  object: Schema.Literals(["api_key"]),
  deleted: Schema.Literals(["true"]),
});
export type DeleteApiKeyOutput = typeof DeleteApiKeyOutput.Type;

// The operation
/**
 * Delete an API Key
 */
export const deleteApiKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteApiKeyInput,
  outputSchema: DeleteApiKeyOutput,
  errors: [BadRequest, NotFound] as const,
}));
