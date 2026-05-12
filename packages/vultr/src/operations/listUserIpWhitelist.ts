import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const ListUserIpWhitelistInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/users/{userId}/ip-whitelist" }));
export type ListUserIpWhitelistInput = typeof ListUserIpWhitelistInput.Type;

// Output Schema
export const ListUserIpWhitelistOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ip_whitelist: Schema.optional(
      Schema.Array(
        Schema.Struct({
          subnet: Schema.optional(Schema.String),
          subnet_size: Schema.optional(Schema.Number),
          date_added: Schema.optional(Schema.String),
          ip_type: Schema.optional(Schema.Literals(["v4", "v6"])),
        }),
      ),
    ),
    meta: Schema.optional(
      Schema.Struct({
        total: Schema.optional(Schema.Number),
        links: Schema.optional(
          Schema.Struct({
            next: Schema.optional(Schema.String),
            prev: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  });
export type ListUserIpWhitelistOutput = typeof ListUserIpWhitelistOutput.Type;

// The operation
/**
 * List User IP Whitelist
 *
 * Get the IP whitelist for a User. Only root users or users with manage users permission can access this endpoint.
 *
 * @param userId - The [User id](#operation/list-users).
 */
export const listUserIpWhitelist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListUserIpWhitelistInput,
  outputSchema: ListUserIpWhitelistOutput,
  errors: [BadRequest] as const,
}));
