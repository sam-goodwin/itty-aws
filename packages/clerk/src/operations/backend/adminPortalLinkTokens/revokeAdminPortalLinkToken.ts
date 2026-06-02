import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../../errors.ts";

// Input Schema
export const RevokeAdminPortalLinkTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adminPortalLinkTokenID: Schema.String.pipe(T.PathParam()),
    revocation_reason: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/admin_portal_link_tokens/{adminPortalLinkTokenID}/revoke",
    }),
  );
export type RevokeAdminPortalLinkTokenInput =
  typeof RevokeAdminPortalLinkTokenInput.Type;

// Output Schema
export const RevokeAdminPortalLinkTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["admin_portal_link_token"]),
    id: Schema.String,
    admin_portal_link_id: Schema.String,
    instance_id: Schema.String,
    organization_id: Schema.NullOr(Schema.String),
    it_contact_id: Schema.NullOr(Schema.String),
    scopes: Schema.NullOr(Schema.Array(Schema.String)),
    revoked: Schema.Boolean,
    revocation_reason: Schema.NullOr(Schema.String),
    expired: Schema.Boolean,
    expiration: Schema.NullOr(Schema.Number),
    created_at: Schema.Number,
    updated_at: Schema.Number,
  });
export type RevokeAdminPortalLinkTokenOutput =
  typeof RevokeAdminPortalLinkTokenOutput.Type;

// The operation
/**
 * Revoke an Admin Portal Link Token
 */
export const revokeAdminPortalLinkToken = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RevokeAdminPortalLinkTokenInput,
    outputSchema: RevokeAdminPortalLinkTokenOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
