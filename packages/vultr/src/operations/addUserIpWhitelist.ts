import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const AddUserIpWhitelistInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.String.pipe(T.PathParam()),
    subnet: Schema.String,
    subnet_size: Schema.Number,
  }).pipe(T.Http({ method: "POST", path: "/users/{userId}/ip-whitelist" }));
export type AddUserIpWhitelistInput = typeof AddUserIpWhitelistInput.Type;

// Output Schema
export const AddUserIpWhitelistOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AddUserIpWhitelistOutput = typeof AddUserIpWhitelistOutput.Type;

// The operation
/**
 * Add IP to User Whitelist
 *
 * Add an IP address or subnet to a User's whitelist. Only root users or users with manage users permission can access this endpoint.
 *
 * @param userId - The [User id](#operation/list-users).
 */
export const addUserIpWhitelist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AddUserIpWhitelistInput,
  outputSchema: AddUserIpWhitelistOutput,
  errors: [BadRequest] as const,
}));
