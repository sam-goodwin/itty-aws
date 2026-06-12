import * as Schema from "effect/Schema";

export const HealthIssueSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  severity: Schema.optional(Schema.Literals(["critical", "warning", "info"])),
  status: Schema.optional(Schema.Literals(["active", "resolved"])),
  dismissed: Schema.optional(Schema.Boolean),
  payload: Schema.optional(Schema.Unknown),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
  resolved_at: Schema.optional(Schema.NullOr(Schema.String)),
});
