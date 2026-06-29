import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, Forbidden, Conflict } from "../../../errors.ts";

// Input Schema
export const CreateAdminPortalLinkTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.optional(Schema.String),
    it_contact_id: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
    seconds_until_expiration: Schema.optional(Schema.Number),
  }).pipe(T.Http({ method: "POST", path: "/admin_portal_link_tokens" }));
export type CreateAdminPortalLinkTokenInput =
  typeof CreateAdminPortalLinkTokenInput.Type;

// Output Schema
export const CreateAdminPortalLinkTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["admin_portal_link_token"]),
    id: Schema.String,
    admin_portal_link_id: Schema.String,
    instance_id: Schema.String,
    organization_id: Schema.NullOr(Schema.String),
    it_contact_id: Schema.NullOr(Schema.String),
    scopes: Schema.NullOr(Schema.Array(Schema.String)),
    token: Schema.String,
    revoked: Schema.Boolean,
    revocation_reason: Schema.NullOr(Schema.String),
    expired: Schema.Boolean,
    expiration: Schema.NullOr(Schema.Number),
    created_at: Schema.Number,
    updated_at: Schema.Number,
  });
export type CreateAdminPortalLinkTokenOutput =
  typeof CreateAdminPortalLinkTokenOutput.Type;

// The operation
/**
 * Create an Admin Portal Link Token
 */
export const createAdminPortalLinkToken = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateAdminPortalLinkTokenInput,
    outputSchema: CreateAdminPortalLinkTokenOutput,
    errors: [BadRequest, Forbidden, Conflict] as const,
  }),
);
