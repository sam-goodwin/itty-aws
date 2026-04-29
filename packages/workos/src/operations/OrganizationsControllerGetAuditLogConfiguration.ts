import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const OrganizationsControllerGetAuditLogConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{id}/audit_log_configuration",
    }),
  );
export type OrganizationsControllerGetAuditLogConfigurationInput =
  typeof OrganizationsControllerGetAuditLogConfigurationInput.Type;

// Output Schema
export const OrganizationsControllerGetAuditLogConfigurationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String,
    retention_period_in_days: Schema.Number,
    state: Schema.Literals(["active", "inactive", "disabled"]),
    log_stream: Schema.optional(
      Schema.Struct({
        id: Schema.String,
        type: Schema.Literals([
          "AzureSentinel",
          "Datadog",
          "GenericHttps",
          "GoogleCloudStorage",
          "S3",
          "Splunk",
        ]),
        state: Schema.Literals(["active", "inactive", "error", "invalid"]),
        last_synced_at: Schema.NullOr(Schema.String),
        created_at: Schema.String,
      }),
    ),
  });
export type OrganizationsControllerGetAuditLogConfigurationOutput =
  typeof OrganizationsControllerGetAuditLogConfigurationOutput.Type;

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
