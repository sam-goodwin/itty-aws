import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export const V1GetOrganizationEntitlementsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slug: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/organizations/{slug}/entitlements" }),
  );
export type V1GetOrganizationEntitlementsInput =
  typeof V1GetOrganizationEntitlementsInput.Type;

// Output Schema
export const V1GetOrganizationEntitlementsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entitlements: Schema.Array(
      Schema.Struct({
        feature: Schema.Struct({
          key: Schema.Literals([
            "instances.compute_update_available_sizes",
            "instances.read_replicas",
            "instances.disk_modifications",
            "instances.high_availability",
            "instances.orioledb",
            "replication.etl",
            "storage.max_file_size",
            "storage.max_file_size.configurable",
            "storage.image_transformations",
            "storage.vector_buckets",
            "storage.iceberg_catalog",
            "security.audit_logs_days",
            "security.questionnaire",
            "security.soc2_report",
            "security.private_link",
            "security.enforce_mfa",
            "log.retention_days",
            "custom_domain",
            "vanity_subdomain",
            "ipv4",
            "pitr.available_variants",
            "log_drains",
            "branching_limit",
            "branching_persistent",
            "auth.mfa_phone",
            "auth.mfa_web_authn",
            "auth.mfa_enhanced_security",
            "auth.hooks",
            "auth.platform.sso",
            "auth.custom_jwt_template",
            "auth.saml_2",
            "auth.user_sessions",
            "auth.leaked_password_protection",
            "auth.advanced_auth_settings",
            "auth.performance_settings",
            "auth.password_hibp",
            "backup.retention_days",
            "backup.restore_to_new_project",
            "function.max_count",
            "function.size_limit_mb",
            "realtime.max_concurrent_users",
            "realtime.max_events_per_second",
            "realtime.max_joins_per_second",
            "realtime.max_channels_per_client",
            "realtime.max_bytes_per_second",
            "realtime.max_presence_events_per_second",
            "realtime.max_payload_size_in_kb",
            "project_scoped_roles",
            "security.member_roles",
            "project_pausing",
            "project_cloning",
            "project_restore_after_expiry",
            "assistant.advance_model",
            "integrations.github_connections",
            "dedicated_pooler",
            "observability.dashboard_advanced_metrics",
          ]),
          type: Schema.Literals(["boolean", "numeric", "set"]),
        }),
        hasAccess: Schema.Boolean,
        type: Schema.Literals(["boolean", "numeric", "set"]),
        config: Schema.Unknown,
      }),
    ),
  });
export type V1GetOrganizationEntitlementsOutput =
  typeof V1GetOrganizationEntitlementsOutput.Type;

// The operation
/**
 * Get entitlements for an organization
 *
 * Returns the entitlements available to the organization based on their plan and any overrides.
 *
 * @param slug - Organization slug
 */
export const v1GetOrganizationEntitlements =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: V1GetOrganizationEntitlementsInput,
    outputSchema: V1GetOrganizationEntitlementsOutput,
    errors: [Forbidden] as const,
  }));
