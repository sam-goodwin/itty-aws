import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const AuditLogsRetentionControllerUpdateAuditLogsRetentionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    retention_period_in_days: Schema.Number,
  }).pipe(
    T.Http({ method: "PUT", path: "/organizations/{id}/audit_logs_retention" }),
  );
export type AuditLogsRetentionControllerUpdateAuditLogsRetentionInput =
  typeof AuditLogsRetentionControllerUpdateAuditLogsRetentionInput.Type;

// Output Schema
export const AuditLogsRetentionControllerUpdateAuditLogsRetentionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    retention_period_in_days: Schema.NullOr(Schema.Number),
  });
export type AuditLogsRetentionControllerUpdateAuditLogsRetentionOutput =
  typeof AuditLogsRetentionControllerUpdateAuditLogsRetentionOutput.Type;

// The operation
/**
 * Set Retention
 *
 * Set the event retention period for the given Organization.
 *
 * @param id - Unique identifier of the Organization.
 */
export const AuditLogsRetentionControllerUpdateAuditLogsRetention =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuditLogsRetentionControllerUpdateAuditLogsRetentionInput,
    outputSchema: AuditLogsRetentionControllerUpdateAuditLogsRetentionOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));
