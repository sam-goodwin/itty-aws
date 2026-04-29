import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const AuditLogExportsControllerExportsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String,
    range_start: Schema.String,
    range_end: Schema.String,
    actions: Schema.optional(Schema.Array(Schema.String)),
    actors: Schema.optional(Schema.Array(Schema.String)),
    actor_names: Schema.optional(Schema.Array(Schema.String)),
    actor_ids: Schema.optional(Schema.Array(Schema.String)),
    targets: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(T.Http({ method: "POST", path: "/audit_logs/exports" }));
export type AuditLogExportsControllerExportsInput =
  typeof AuditLogExportsControllerExportsInput.Type;

// Output Schema
export const AuditLogExportsControllerExportsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    state: Schema.Literals(["pending", "ready", "error"]),
    url: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type AuditLogExportsControllerExportsOutput =
  typeof AuditLogExportsControllerExportsOutput.Type;

// The operation
/**
 * Create Export
 *
 * Create an Audit Log Export. Exports are scoped to a single organization within a specified date range.
 */
export const AuditLogExportsControllerExports =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuditLogExportsControllerExportsInput,
    outputSchema: AuditLogExportsControllerExportsOutput,
    errors: [BadRequest, NotFound] as const,
  }));
