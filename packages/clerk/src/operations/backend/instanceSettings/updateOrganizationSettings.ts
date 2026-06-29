import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import {
  BadRequest,
  PaymentRequired,
  NotFound,
  UnprocessableEntity,
} from "../../../errors.ts";

// Input Schema
export const UpdateOrganizationSettingsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.NullOr(Schema.Boolean)),
    max_allowed_memberships: Schema.optional(Schema.NullOr(Schema.Number)),
    admin_delete_enabled: Schema.optional(Schema.NullOr(Schema.Boolean)),
    domains_enabled: Schema.optional(Schema.NullOr(Schema.Boolean)),
    slug_disabled: Schema.optional(Schema.NullOr(Schema.Boolean)),
    domains_enrollment_modes: Schema.optional(Schema.Array(Schema.String)),
    creator_role_id: Schema.optional(Schema.NullOr(Schema.String)),
    domains_default_role_id: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(T.Http({ method: "PATCH", path: "/instance/organization_settings" }));
export type UpdateOrganizationSettingsInput =
  typeof UpdateOrganizationSettingsInput.Type;

// Output Schema
export const UpdateOrganizationSettingsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["organization_settings"]),
    enabled: Schema.Boolean,
    max_allowed_memberships: Schema.Number,
    max_allowed_roles: Schema.Number,
    max_role_sets_allowed: Schema.optional(Schema.Number),
    max_allowed_domains: Schema.Number,
    max_allowed_permissions: Schema.optional(Schema.Number),
    creator_role: Schema.String,
    admin_delete_enabled: Schema.Boolean,
    domains_enabled: Schema.Boolean,
    slug_disabled: Schema.optional(Schema.Boolean),
    domains_enrollment_modes: Schema.Array(
      Schema.Literals([
        "manual_invitation",
        "automatic_invitation",
        "automatic_suggestion",
      ]),
    ),
    domains_default_role: Schema.String,
    initial_role_set_key: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type UpdateOrganizationSettingsOutput =
  typeof UpdateOrganizationSettingsOutput.Type;

// The operation
/**
 * Update instance organization settings
 *
 * Updates the organization settings of the instance
 */
export const updateOrganizationSettings = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateOrganizationSettingsInput,
    outputSchema: UpdateOrganizationSettingsOutput,
    errors: [
      BadRequest,
      PaymentRequired,
      NotFound,
      UnprocessableEntity,
    ] as const,
  }),
);
