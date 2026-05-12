import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const CreateApiKeyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  expire: Schema.optional(Schema.Boolean),
  date_expire: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/apikeys" }));
export type CreateApiKeyInput = typeof CreateApiKeyInput.Type;

// Output Schema
export const CreateApiKeyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CreateApiKeyOutput = typeof CreateApiKeyOutput.Type;

// The operation
/**
 * Create API Key
 *
 * Adds an API key to the currently authenticated user's API key list.
 */
export const createApiKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateApiKeyInput,
  outputSchema: CreateApiKeyOutput,
  errors: [BadRequest] as const,
}));
