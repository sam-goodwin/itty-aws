import * as Schema from "effect/Schema";

export const WebExperimentsAPISchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    feature_flag_key: Schema.optional(Schema.String),
    variants: Schema.optional(Schema.Unknown),
  });
