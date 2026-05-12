import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const GetApiKeyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/apikeys/{apikeyId}" }));
export type GetApiKeyInput = typeof GetApiKeyInput.Type;

// Output Schema
export const GetApiKeyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  api_key: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      api_key: Schema.optional(SensitiveString),
      name: Schema.optional(Schema.String),
      expire: Schema.optional(Schema.Boolean),
      date_expire: Schema.optional(Schema.String),
    }),
  ),
});
export type GetApiKeyOutput = typeof GetApiKeyOutput.Type;

// The operation
/**
 * Get API Key
 *
 * Gets information about an API key for the currently authenticated user. API keys returned by this method are masked.
 */
export const getApiKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetApiKeyInput,
  outputSchema: GetApiKeyOutput,
  errors: [BadRequest] as const,
}));
