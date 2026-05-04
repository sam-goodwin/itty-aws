import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const MembersdeleteMemberByExternalIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    external_id: Schema.String.pipe(T.PathParam()),
    customer_id: Schema.optional(Schema.String),
    external_customer_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/members/external/{external_id}" }),
  );
export type MembersdeleteMemberByExternalIdInput =
  typeof MembersdeleteMemberByExternalIdInput.Type;

// Output Schema
export const MembersdeleteMemberByExternalIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type MembersdeleteMemberByExternalIdOutput =
  typeof MembersdeleteMemberByExternalIdOutput.Type;

// The operation
/**
 * Delete Member by External ID
 *
 * Delete a member by external ID. One of customer_id or external_customer_id must be specified.
 * **Scopes**: `members:write`
 *
 * @param external_id - The member external ID.
 * @param customer_id - The customer ID.
 * @param external_customer_id - The customer external ID.
 */
export const membersdeleteMemberByExternalId =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MembersdeleteMemberByExternalIdInput,
    outputSchema: MembersdeleteMemberByExternalIdOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));
