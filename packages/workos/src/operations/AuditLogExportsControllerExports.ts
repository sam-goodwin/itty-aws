import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export interface AuditLogExportsControllerExportsInput {
  organization_id?: string;
  range_start?: string;
  range_end?: string;
  actions?: ReadonlyArray<string>;
  actors?: ReadonlyArray<string>;
  actor_names?: ReadonlyArray<string>;
  actor_ids?: ReadonlyArray<string>;
  targets?: ReadonlyArray<string>;
}
export const AuditLogExportsControllerExportsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.optional(Schema.String),
    range_start: Schema.optional(Schema.String),
    range_end: Schema.optional(Schema.String),
    actions: Schema.optional(Schema.Array(Schema.String)),
    actors: Schema.optional(Schema.Array(Schema.String)),
    actor_names: Schema.optional(Schema.Array(Schema.String)),
    actor_ids: Schema.optional(Schema.Array(Schema.String)),
    targets: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({ method: "POST", path: "/audit_logs/exports" }),
  ) as unknown as Schema.Codec<AuditLogExportsControllerExportsInput>;

// Output Schema
export interface AuditLogExportsControllerExportsOutput {
  object?: string;
  id?: string;
  state?: "pending" | "ready" | "error" | "expired";
  url?: string | null;
  created_at?: string;
  updated_at?: string;
}
export const AuditLogExportsControllerExportsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    state: Schema.optional(
      Schema.Literals(["pending", "ready", "error", "expired"]),
    ),
    url: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AuditLogExportsControllerExportsOutput>;

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
