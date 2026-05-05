import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const MembersgetMemberByExternalIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    external_id: Schema.String.pipe(T.PathParam()),
    customer_id: Schema.optional(Schema.String),
    external_customer_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/members/external/{external_id}" }),
  );
export type MembersgetMemberByExternalIdInput =
  typeof MembersgetMemberByExternalIdInput.Type;

// Output Schema
export const MembersgetMemberByExternalIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    customer_id: Schema.String,
    email: Schema.String,
    name: Schema.NullOr(Schema.String),
    external_id: Schema.NullOr(Schema.String),
    role: Schema.Literals(["owner", "billing_manager", "member"]),
  });
export type MembersgetMemberByExternalIdOutput =
  typeof MembersgetMemberByExternalIdOutput.Type;

// The operation
/**
 * Get Member by External ID
 *
 * Get a member by external ID. One of customer_id or external_customer_id must be specified.
 * **Scopes**: `members:read` `members:write`
 *
 * @param external_id - The member external ID.
 * @param customer_id - The customer ID.
 * @param external_customer_id - The customer external ID.
 */
export const membersgetMemberByExternalId =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MembersgetMemberByExternalIdInput,
    outputSchema: MembersgetMemberByExternalIdOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));
