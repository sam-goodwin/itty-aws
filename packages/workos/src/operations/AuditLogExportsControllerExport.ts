import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const AuditLogExportsControllerExportInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    auditLogExportId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/audit_logs/exports/{auditLogExportId}" }),
  );
export type AuditLogExportsControllerExportInput =
  typeof AuditLogExportsControllerExportInput.Type;

// Output Schema
export const AuditLogExportsControllerExportOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    state: Schema.Literals(["pending", "ready", "error"]),
    url: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type AuditLogExportsControllerExportOutput =
  typeof AuditLogExportsControllerExportOutput.Type;

// The operation
/**
 * Get Export
 *
 * Get an Audit Log Export. The URL will expire after 10 minutes. If the export is needed again at a later time, refetching the export will regenerate the URL.
 *
 * @param auditLogExportId - The unique ID of the Audit Log Export.
 */
export const AuditLogExportsControllerExport =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuditLogExportsControllerExportInput,
    outputSchema: AuditLogExportsControllerExportOutput,
    errors: [NotFound] as const,
  }));
