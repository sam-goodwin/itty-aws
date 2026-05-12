import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const RemoveUserIpWhitelistInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.String.pipe(T.PathParam()),
    subnet: Schema.String,
    subnet_size: Schema.Number,
  }).pipe(T.Http({ method: "DELETE", path: "/users/{userId}/ip-whitelist" }));
export type RemoveUserIpWhitelistInput = typeof RemoveUserIpWhitelistInput.Type;

// Output Schema
export const RemoveUserIpWhitelistOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RemoveUserIpWhitelistOutput =
  typeof RemoveUserIpWhitelistOutput.Type;

// The operation
/**
 * Remove IP from User Whitelist
 *
 * Remove an IP address or subnet from a User's whitelist. Only root users or users with manage users permission can access this endpoint.
 *
 * @param userId - The [User id](#operation/list-users).
 */
export const removeUserIpWhitelist = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RemoveUserIpWhitelistInput,
    outputSchema: RemoveUserIpWhitelistOutput,
    errors: [BadRequest] as const,
  }),
);
