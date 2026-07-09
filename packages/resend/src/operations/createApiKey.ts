import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CreateApiKeyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  permission: Schema.optional(
    Schema.Literals(["full_access", "sending_access"]),
  ),
  domain_id: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/api-keys" }));
export type CreateApiKeyInput = typeof CreateApiKeyInput.Type;

// Output Schema
export const CreateApiKeyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  token: Schema.optional(Schema.String),
});
export type CreateApiKeyOutput = typeof CreateApiKeyOutput.Type;

// The operation
/**
 * Create a new API key
 */
export const createApiKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateApiKeyInput,
  outputSchema: CreateApiKeyOutput,
  errors: [UnprocessableEntity] as const,
}));
