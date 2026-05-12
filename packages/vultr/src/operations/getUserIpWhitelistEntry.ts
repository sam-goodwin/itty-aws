import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const GetUserIpWhitelistEntryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.String.pipe(T.PathParam()),
    subnet: Schema.String,
    subnet_size: Schema.Number,
  }).pipe(
    T.Http({ method: "GET", path: "/users/{userId}/ip-whitelist/entry" }),
  );
export type GetUserIpWhitelistEntryInput =
  typeof GetUserIpWhitelistEntryInput.Type;

// Output Schema
export const GetUserIpWhitelistEntryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ip_whitelist_entry: Schema.optional(
      Schema.Struct({
        subnet: Schema.optional(Schema.String),
        subnet_size: Schema.optional(Schema.Number),
        date_added: Schema.optional(Schema.String),
        ip_type: Schema.optional(Schema.Literals(["v4", "v6"])),
      }),
    ),
  });
export type GetUserIpWhitelistEntryOutput =
  typeof GetUserIpWhitelistEntryOutput.Type;

// The operation
/**
 * Get User IP Whitelist Entry
 *
 * Get a specific IP whitelist entry for a User. Only root users or users with manage users permission can access this endpoint.
 *
 * @param userId - The [User id](#operation/list-users).
 * @param subnet - The IP address or subnet.
 * @param subnet_size - The subnet size.
 */
export const getUserIpWhitelistEntry = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetUserIpWhitelistEntryInput,
    outputSchema: GetUserIpWhitelistEntryOutput,
    errors: [BadRequest] as const,
  }),
);
