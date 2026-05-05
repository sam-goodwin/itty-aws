import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerPortalmemberslistMembersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    page: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
  }).pipe(T.Http({ method: "GET", path: "/v1/customer-portal/members" }));
export type CustomerPortalmemberslistMembersInput =
  typeof CustomerPortalmemberslistMembersInput.Type;

// Output Schema
export const CustomerPortalmemberslistMembersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.Array(
      Schema.Struct({
        created_at: Schema.String,
        modified_at: Schema.NullOr(Schema.String),
        id: Schema.String,
        email: Schema.String,
        name: Schema.NullOr(Schema.String),
        role: Schema.Literals(["owner", "billing_manager", "member"]),
      }),
    ),
    pagination: Schema.Struct({
      total_count: Schema.Number,
      max_page: Schema.Number,
    }),
  });
export type CustomerPortalmemberslistMembersOutput =
  typeof CustomerPortalmemberslistMembersOutput.Type;

// The operation
/**
 * List Members
 *
 * List all members of the customer's team.
 * Only available to owners and billing managers of team customers.
 *
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 */
export const customerPortalmemberslistMembers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalmemberslistMembersInput,
    outputSchema: CustomerPortalmemberslistMembersOutput,
    errors: [Forbidden, UnprocessableEntity] as const,
  }));
