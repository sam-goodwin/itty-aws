import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const ListUserApiKeysInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/users/{userId}/apikeys" }));
export type ListUserApiKeysInput = typeof ListUserApiKeysInput.Type;

// Output Schema
export const ListUserApiKeysOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  api_keys: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        api_key: Schema.optional(SensitiveString),
        name: Schema.optional(Schema.String),
        expire: Schema.optional(Schema.Boolean),
        date_expire: Schema.optional(Schema.String),
      }),
    ),
  ),
});
export type ListUserApiKeysOutput = typeof ListUserApiKeysOutput.Type;

// The operation
/**
 * List User API Keys
 *
 * Gets all API keys for the target user. API keys returned by this method are masked. Only root users or users with manage users permission can access this endpoint.
 *
 * @param userId - The [User id](#operation/list-users).
 */
export const listUserApiKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListUserApiKeysInput,
  outputSchema: ListUserApiKeysOutput,
  errors: [BadRequest] as const,
}));
