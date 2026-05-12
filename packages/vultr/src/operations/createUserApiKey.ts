import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const CreateUserApiKeyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userId: Schema.String.pipe(T.PathParam()),
  name: Schema.optional(Schema.String),
  expire: Schema.optional(Schema.Boolean),
  date_expire: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/users/{userId}/apikeys" }));
export type CreateUserApiKeyInput = typeof CreateUserApiKeyInput.Type;

// Output Schema
export const CreateUserApiKeyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CreateUserApiKeyOutput = typeof CreateUserApiKeyOutput.Type;

// The operation
/**
 * Create User API Key
 *
 * Adds an API key to the target user's API key list. Only root users or users with manage users permission can access this endpoint.
 *
 * @param userId - The [User id](#operation/list-users).
 */
export const createUserApiKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateUserApiKeyInput,
  outputSchema: CreateUserApiKeyOutput,
  errors: [BadRequest] as const,
}));
