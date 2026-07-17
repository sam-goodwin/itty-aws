import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface AuditLogExportsControllerExportInput {
  auditLogExportId: string;
}
export const AuditLogExportsControllerExportInput =
  /*@__PURE__*/ Schema.Struct({
    auditLogExportId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/audit_logs/exports/{auditLogExportId}" }),
  ) as unknown as Schema.Codec<AuditLogExportsControllerExportInput>;

// Output Schema
export interface AuditLogExportsControllerExportOutput {
  object?: string;
  id?: string;
  state?: "pending" | "ready" | "error" | "expired";
  url?: string | null;
  created_at?: string;
  updated_at?: string;
}
export const AuditLogExportsControllerExportOutput =
  /*@__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    state: Schema.optional(
      Schema.Literals(["pending", "ready", "error", "expired"]),
    ),
    url: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AuditLogExportsControllerExportOutput>;

// The operation
/**
 * Get Export
 *
 * Get an Audit Log Export. The URL will expire after 10 minutes. If the export is needed again at a later time, refetching the export will regenerate the URL.
 *
 * @param auditLogExportId - The unique ID of the Audit Log Export.
 */
export const AuditLogExportsControllerExport =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AuditLogExportsControllerExportInput,
    outputSchema: AuditLogExportsControllerExportOutput,
    errors: [NotFound] as const,
  }));
