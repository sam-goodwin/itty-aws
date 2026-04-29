import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const AuditLogsRetentionControllerAuditLogsRetentionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/organizations/{id}/audit_logs_retention" }),
  );
export type AuditLogsRetentionControllerAuditLogsRetentionInput =
  typeof AuditLogsRetentionControllerAuditLogsRetentionInput.Type;

// Output Schema
export const AuditLogsRetentionControllerAuditLogsRetentionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    retention_period_in_days: Schema.NullOr(Schema.Number),
  });
export type AuditLogsRetentionControllerAuditLogsRetentionOutput =
  typeof AuditLogsRetentionControllerAuditLogsRetentionOutput.Type;

// The operation
/**
 * Get Retention
 *
 * Get the configured event retention period for the given Organization.
 *
 * @param id - Unique identifier of the Organization.
 */
export const AuditLogsRetentionControllerAuditLogsRetention =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuditLogsRetentionControllerAuditLogsRetentionInput,
    outputSchema: AuditLogsRetentionControllerAuditLogsRetentionOutput,
    errors: [NotFound] as const,
  }));
