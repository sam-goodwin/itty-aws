import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const DeleteApiKeyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "DELETE", path: "/apikeys/{apikeyId}" }));
export type DeleteApiKeyInput = typeof DeleteApiKeyInput.Type;

// Output Schema
export const DeleteApiKeyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteApiKeyOutput = typeof DeleteApiKeyOutput.Type;

// The operation
/**
 * Delete API Key
 *
 * Delete an API key from the currently authenticated user's API key list.
 */
export const deleteApiKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteApiKeyInput,
  outputSchema: DeleteApiKeyOutput,
  errors: [BadRequest] as const,
}));
