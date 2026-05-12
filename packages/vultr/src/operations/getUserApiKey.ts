import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const GetUserApiKeyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userId: Schema.String.pipe(T.PathParam()),
  apikeyId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/users/{userId}/apikeys/{apikeyId}" }));
export type GetUserApiKeyInput = typeof GetUserApiKeyInput.Type;

// Output Schema
export const GetUserApiKeyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type GetUserApiKeyOutput = typeof GetUserApiKeyOutput.Type;

// The operation
/**
 * Get User API Key
 *
 * Gets information about a user's API key. API keys returned by this method are masked. Only root users or users with manage users permission can access this endpoint.
 *
 * @param userId - The [User id](#operation/list-users).
 * @param apikeyId - The [API key id](#operation/list-user-api-keys).
 */
export const getUserApiKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetUserApiKeyInput,
  outputSchema: GetUserApiKeyOutput,
  errors: [BadRequest] as const,
}));
