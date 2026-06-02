import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound } from "../../errors.ts";
import { SensitiveOutputString } from "../../sensitive.ts";

// Input Schema
export const GetApiKeySecretInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  apiKeyID: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/api_keys/{apiKeyID}/secret" }));
export type GetApiKeySecretInput = typeof GetApiKeySecretInput.Type;

// Output Schema
export const GetApiKeySecretOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  secret: SensitiveOutputString,
});
export type GetApiKeySecretOutput = typeof GetApiKeySecretOutput.Type;

// The operation
/**
 * Get an API Key Secret
 */
export const getApiKeySecret = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetApiKeySecretInput,
  outputSchema: GetApiKeySecretOutput,
  errors: [BadRequest, NotFound] as const,
}));
