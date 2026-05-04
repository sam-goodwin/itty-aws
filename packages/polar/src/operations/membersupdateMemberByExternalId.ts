import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const MembersupdateMemberByExternalIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    external_id: Schema.String.pipe(T.PathParam()),
    customer_id: Schema.optional(Schema.String),
    external_customer_id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.Unknown),
    role: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({ method: "PATCH", path: "/v1/members/external/{external_id}" }),
  );
export type MembersupdateMemberByExternalIdInput =
  typeof MembersupdateMemberByExternalIdInput.Type;

// Output Schema
export const MembersupdateMemberByExternalIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    created_at: Schema.String,
    modified_at: Schema.Unknown,
    customer_id: Schema.String,
    email: Schema.String,
    name: Schema.Unknown,
    external_id: Schema.Unknown,
    role: Schema.Literals(["owner", "billing_manager", "member"]),
  });
export type MembersupdateMemberByExternalIdOutput =
  typeof MembersupdateMemberByExternalIdOutput.Type;

// The operation
/**
 * Update Member by External ID
 *
 * Update a member by external ID. One of customer_id or external_customer_id must be specified.
 * **Scopes**: `members:write`
 *
 * @param external_id - The member external ID.
 * @param customer_id - The customer ID.
 * @param external_customer_id - The customer external ID.
 */
export const membersupdateMemberByExternalId =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MembersupdateMemberByExternalIdInput,
    outputSchema: MembersupdateMemberByExternalIdOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));
