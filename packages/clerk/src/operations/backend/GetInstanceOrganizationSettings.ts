import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import {
  PaymentRequired,
  NotFound,
  UnprocessableEntity,
} from "../../errors.ts";

// Input Schema
export const GetInstanceOrganizationSettingsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/instance/organization_settings" }),
  );
export type GetInstanceOrganizationSettingsInput =
  typeof GetInstanceOrganizationSettingsInput.Type;

// Output Schema
export const GetInstanceOrganizationSettingsOutput =
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
export type GetInstanceOrganizationSettingsOutput =
  typeof GetInstanceOrganizationSettingsOutput.Type;

// The operation
/**
 * Get instance organization settings
 *
 * Retrieves the organization settings of the instance
 */
export const GetInstanceOrganizationSettings =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetInstanceOrganizationSettingsInput,
    outputSchema: GetInstanceOrganizationSettingsOutput,
    errors: [PaymentRequired, NotFound, UnprocessableEntity] as const,
  }));
