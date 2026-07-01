import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, Conflict, UnprocessableEntity } from "../errors.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface WebhookEndpointsControllerUpdateInput {
  id: string;
  endpoint_url?: string;
  status?: "enabled" | "disabled";
  events?: ReadonlyArray<
    | "agent.registration.created"
    | "agent.registration.claim.attempt.created"
    | "agent.registration.claim.completed"
    | "agent.registration.credential.issued"
    | "agent.registration.organization.switched"
    | "authentication.email_verification_succeeded"
    | "authentication.magic_auth_failed"
    | "authentication.magic_auth_succeeded"
    | "authentication.mfa_succeeded"
    | "authentication.oauth_failed"
    | "authentication.oauth_succeeded"
    | "authentication.password_failed"
    | "authentication.password_succeeded"
    | "authentication.passkey_failed"
    | "authentication.passkey_succeeded"
    | "authentication.sso_failed"
    | "authentication.sso_started"
    | "authentication.sso_succeeded"
    | "authentication.sso_timed_out"
    | "authentication.radar_risk_detected"
    | "authentication.reauthentication_succeeded"
    | "api_key.created"
    | "api_key.revoked"
    | "api_key.updated"
    | "connection.activated"
    | "connection.deactivated"
    | "connection.saml_certificate_renewal_required"
    | "connection.saml_certificate_renewed"
    | "connection.deleted"
    | "dsync.activated"
    | "dsync.deleted"
    | "dsync.group.created"
    | "dsync.group.deleted"
    | "dsync.group.updated"
    | "dsync.group.user_added"
    | "dsync.group.user_removed"
    | "dsync.user.created"
    | "dsync.user.deleted"
    | "dsync.user.updated"
    | "email_verification.created"
    | "group.created"
    | "group.deleted"
    | "group.member_added"
    | "group.member_removed"
    | "group.updated"
    | "flag.created"
    | "flag.deleted"
    | "flag.updated"
    | "flag.rule_updated"
    | "invitation.accepted"
    | "invitation.created"
    | "invitation.resent"
    | "invitation.revoked"
    | "magic_auth.created"
    | "organization.created"
    | "organization.deleted"
    | "organization.updated"
    | "organization_domain.created"
    | "organization_domain.deleted"
    | "organization_domain.updated"
    | "organization_domain.verified"
    | "organization_domain.verification_failed"
    | "password_reset.created"
    | "password_reset.succeeded"
    | "user.created"
    | "user.updated"
    | "user.deleted"
    | "organization_membership.created"
    | "organization_membership.deleted"
    | "organization_membership.updated"
    | "role.created"
    | "role.deleted"
    | "role.updated"
    | "organization_role.created"
    | "organization_role.deleted"
    | "organization_role.updated"
    | "permission.created"
    | "permission.deleted"
    | "permission.updated"
    | "pipes.connected_account.connected"
    | "pipes.connected_account.connection_failed"
    | "pipes.connected_account.disconnected"
    | "pipes.connected_account.reauthorization_needed"
    | "session.created"
    | "session.revoked"
    | "waitlist_user.approved"
    | "waitlist_user.created"
    | "waitlist_user.denied"
  >;
}
export const WebhookEndpointsControllerUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    endpoint_url: Schema.optional(Schema.String),
    status: Schema.optional(Schema.Literals(["enabled", "disabled"])),
    events: Schema.optional(
      Schema.Array(
        Schema.Literals([
          "agent.registration.created",
          "agent.registration.claim.attempt.created",
          "agent.registration.claim.completed",
          "agent.registration.credential.issued",
          "agent.registration.organization.switched",
          "authentication.email_verification_succeeded",
          "authentication.magic_auth_failed",
          "authentication.magic_auth_succeeded",
          "authentication.mfa_succeeded",
          "authentication.oauth_failed",
          "authentication.oauth_succeeded",
          "authentication.password_failed",
          "authentication.password_succeeded",
          "authentication.passkey_failed",
          "authentication.passkey_succeeded",
          "authentication.sso_failed",
          "authentication.sso_started",
          "authentication.sso_succeeded",
          "authentication.sso_timed_out",
          "authentication.radar_risk_detected",
          "authentication.reauthentication_succeeded",
          "api_key.created",
          "api_key.revoked",
          "api_key.updated",
          "connection.activated",
          "connection.deactivated",
          "connection.saml_certificate_renewal_required",
          "connection.saml_certificate_renewed",
          "connection.deleted",
          "dsync.activated",
          "dsync.deleted",
          "dsync.group.created",
          "dsync.group.deleted",
          "dsync.group.updated",
          "dsync.group.user_added",
          "dsync.group.user_removed",
          "dsync.user.created",
          "dsync.user.deleted",
          "dsync.user.updated",
          "email_verification.created",
          "group.created",
          "group.deleted",
          "group.member_added",
          "group.member_removed",
          "group.updated",
          "flag.created",
          "flag.deleted",
          "flag.updated",
          "flag.rule_updated",
          "invitation.accepted",
          "invitation.created",
          "invitation.resent",
          "invitation.revoked",
          "magic_auth.created",
          "organization.created",
          "organization.deleted",
          "organization.updated",
          "organization_domain.created",
          "organization_domain.deleted",
          "organization_domain.updated",
          "organization_domain.verified",
          "organization_domain.verification_failed",
          "password_reset.created",
          "password_reset.succeeded",
          "user.created",
          "user.updated",
          "user.deleted",
          "organization_membership.created",
          "organization_membership.deleted",
          "organization_membership.updated",
          "role.created",
          "role.deleted",
          "role.updated",
          "organization_role.created",
          "organization_role.deleted",
          "organization_role.updated",
          "permission.created",
          "permission.deleted",
          "permission.updated",
          "pipes.connected_account.connected",
          "pipes.connected_account.connection_failed",
          "pipes.connected_account.disconnected",
          "pipes.connected_account.reauthorization_needed",
          "session.created",
          "session.revoked",
          "waitlist_user.approved",
          "waitlist_user.created",
          "waitlist_user.denied",
        ]),
      ),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "/webhook_endpoints/{id}" }),
  ) as unknown as Schema.Codec<WebhookEndpointsControllerUpdateInput>;

// Output Schema
export interface WebhookEndpointsControllerUpdateOutput {
  object?: string;
  id?: string;
  endpoint_url?: string;
  secret?: Redacted.Redacted<string>;
  status?: "enabled" | "disabled";
  events?: ReadonlyArray<string>;
  created_at?: string;
  updated_at?: string;
}
export const WebhookEndpointsControllerUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    endpoint_url: Schema.optional(Schema.String),
    secret: Schema.optional(SensitiveOutputString),
    status: Schema.optional(Schema.Literals(["enabled", "disabled"])),
    events: Schema.optional(Schema.Array(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WebhookEndpointsControllerUpdateOutput>;

// The operation
/**
 * Update a Webhook Endpoint
 *
 * Update the properties of an existing webhook endpoint.
 *
 * @param id - Unique identifier of the Webhook Endpoint.
 */
export const WebhookEndpointsControllerUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebhookEndpointsControllerUpdateInput,
    outputSchema: WebhookEndpointsControllerUpdateOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
