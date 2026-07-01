import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface OrganizationsControllerGetAuditLogConfigurationInput {
  id: string;
}
export const OrganizationsControllerGetAuditLogConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{id}/audit_log_configuration",
    }),
  ) as unknown as Schema.Codec<OrganizationsControllerGetAuditLogConfigurationInput>;

// Output Schema
export interface OrganizationsControllerGetAuditLogConfigurationOutput {
  organization_id?: string;
  retention_period_in_days?: number;
  state?: "active" | "inactive" | "disabled";
  log_stream?: {
    id: string;
    type:
      | "AzureSentinel"
      | "Datadog"
      | "GenericHttps"
      | "GoogleCloudStorage"
      | "S3"
      | "Snowflake"
      | "Splunk";
    state: "active" | "inactive" | "error" | "invalid";
    last_synced_at: string | null;
    created_at: string;
  };
}
export const OrganizationsControllerGetAuditLogConfigurationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.optional(Schema.String),
    retention_period_in_days: Schema.optional(Schema.Number),
    state: Schema.optional(Schema.Literals(["active", "inactive", "disabled"])),
    log_stream: Schema.optional(
      Schema.Struct({
        id: Schema.String,
        type: Schema.Literals([
          "AzureSentinel",
          "Datadog",
          "GenericHttps",
          "GoogleCloudStorage",
          "S3",
          "Snowflake",
          "Splunk",
        ]),
        state: Schema.Literals(["active", "inactive", "error", "invalid"]),
        last_synced_at: Schema.NullOr(Schema.String),
        created_at: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<OrganizationsControllerGetAuditLogConfigurationOutput>;

// The operation
/**
 * Get Audit Log Configuration
 *
 * Get the unified view of audit log trail and stream configuration for an organization.
 *
 * @param id - Unique identifier of the Organization.
 */
export const OrganizationsControllerGetAuditLogConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrganizationsControllerGetAuditLogConfigurationInput,
    outputSchema: OrganizationsControllerGetAuditLogConfigurationOutput,
    errors: [NotFound] as const,
  }));
