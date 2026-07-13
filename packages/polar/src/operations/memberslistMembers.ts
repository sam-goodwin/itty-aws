import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface MemberslistMembersInput {
  customer_id?: string | null;
  external_customer_id?: string | null;
  role?: "owner" | "billing_manager" | "member" | null;
  page?: number;
  limit?: number;
  sorting?: ReadonlyArray<"created_at" | "-created_at"> | null;
}
export const MemberslistMembersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer_id: Schema.optional(Schema.NullOr(Schema.String)),
    external_customer_id: Schema.optional(Schema.NullOr(Schema.String)),
    role: Schema.optional(
      Schema.NullOr(Schema.Literals(["owner", "billing_manager", "member"])),
    ),
    page: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
    sorting: Schema.optional(
      Schema.NullOr(
        Schema.Array(Schema.Literals(["created_at", "-created_at"])),
      ),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/members/" }),
  ) as unknown as Schema.Codec<MemberslistMembersInput>;

// Output Schema
export interface MemberslistMembersOutput {
  items: ReadonlyArray<{
    id: string;
    created_at: string;
    modified_at: string | null;
    customer_id: string;
    email: string;
    name: string | null;
    external_id: string | null;
    role: "owner" | "billing_manager" | "member";
  }>;
  pagination: { total_count: number; max_page: number };
}
export const MemberslistMembersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        created_at: Schema.String,
        modified_at: Schema.NullOr(Schema.String),
        customer_id: Schema.String,
        email: Schema.String,
        name: Schema.NullOr(Schema.String),
        external_id: Schema.NullOr(Schema.String),
        role: Schema.Literals(["owner", "billing_manager", "member"]),
      }),
    ),
    pagination: Schema.Struct({
      total_count: Schema.Number,
      max_page: Schema.Number,
    }),
  }) as unknown as Schema.Codec<MemberslistMembersOutput>;

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
}));
