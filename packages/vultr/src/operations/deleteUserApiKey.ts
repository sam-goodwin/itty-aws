import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const DeleteUserApiKeyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userId: Schema.String.pipe(T.PathParam()),
  apikeyId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/users/{userId}/apikeys/{apikeyId}" }),
);
export type DeleteUserApiKeyInput = typeof DeleteUserApiKeyInput.Type;

// Output Schema
export const DeleteUserApiKeyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteUserApiKeyOutput = typeof DeleteUserApiKeyOutput.Type;

// The operation
/**
 * Delete User API Key
 *
 * Delete an API key from the target user's API key list. Only root users or users with manage users permission can access this endpoint.
 *
 * @param userId - The [User id](#operation/list-users).
 * @param apikeyId - The [API key id](#operation/list-user-api-keys).
 */
export const deleteUserApiKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteUserApiKeyInput,
  outputSchema: DeleteUserApiKeyOutput,
  errors: [BadRequest] as const,
}));
