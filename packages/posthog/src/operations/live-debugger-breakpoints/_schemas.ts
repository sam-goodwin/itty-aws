import * as Schema from "effect/Schema";

export const LiveDebuggerBreakpointSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    repository: Schema.optional(Schema.NullOr(Schema.String)),
    filename: Schema.optional(Schema.String),
    line_number: Schema.optional(Schema.Number),
    enabled: Schema.optional(Schema.Boolean),
    condition: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export const ActiveBreakpointSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    repository: Schema.optional(Schema.NullOr(Schema.String)),
    filename: Schema.optional(Schema.String),
    line_number: Schema.optional(Schema.Number),
    enabled: Schema.optional(Schema.Boolean),
    condition: Schema.optional(Schema.NullOr(Schema.String)),
  },
);
export const BreakpointHitSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  lineNumber: Schema.optional(Schema.Number),
  functionName: Schema.optional(Schema.String),
  timestamp: Schema.optional(Schema.String),
  variables: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  stackTrace: Schema.optional(Schema.Array(Schema.Unknown)),
  breakpoint_id: Schema.optional(Schema.String),
  filename: Schema.optional(Schema.String),
});
