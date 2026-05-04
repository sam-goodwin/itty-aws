import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const MemberslistMembersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer_id: Schema.optional(Schema.String),
    external_customer_id: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
    page: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
    sorting: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/v1/members/" }));
export type MemberslistMembersInput = typeof MemberslistMembersInput.Type;

// Output Schema
export const MemberslistMembersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        created_at: Schema.String,
        modified_at: Schema.Unknown,
        customer_id: Schema.String,
        email: Schema.String,
        name: Schema.Unknown,
        external_id: Schema.Unknown,
        role: Schema.Literals(["owner", "billing_manager", "member"]),
      }),
    ),
    pagination: Schema.Struct({
      total_count: Schema.Number,
      max_page: Schema.Number,
    }),
  });
export type MemberslistMembersOutput = typeof MemberslistMembersOutput.Type;

// The operation
/**
 * List Members
 *
 * List members with optional customer ID filter.
 * **Scopes**: `members:read` `members:write`
 *
 * @param customer_id - Filter by customer ID.
 * @param external_customer_id - Filter by customer external ID.
 * @param role - Filter by member role.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 */
export const memberslistMembers = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MemberslistMembersInput,
  outputSchema: MemberslistMembersOutput,
  errors: [UnprocessableEntity] as const,
}));
