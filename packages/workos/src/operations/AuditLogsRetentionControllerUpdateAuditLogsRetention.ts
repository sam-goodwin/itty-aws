import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface AuditLogsRetentionControllerUpdateAuditLogsRetentionInput {
  id: string;
  retention_period_in_days?: number;
}
export const AuditLogsRetentionControllerUpdateAuditLogsRetentionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    retention_period_in_days: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({ method: "PUT", path: "/organizations/{id}/audit_logs_retention" }),
  ) as unknown as Schema.Codec<AuditLogsRetentionControllerUpdateAuditLogsRetentionInput>;

// Output Schema
export interface AuditLogsRetentionControllerUpdateAuditLogsRetentionOutput {
  retention_period_in_days?: number | null;
}
export const AuditLogsRetentionControllerUpdateAuditLogsRetentionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    retention_period_in_days: Schema.optional(Schema.NullOr(Schema.Number)),
  }) as unknown as Schema.Codec<AuditLogsRetentionControllerUpdateAuditLogsRetentionOutput>;

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
