import * as Schema from "effect/Schema";

export const GroupTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  group_type: Schema.optional(Schema.String),
  group_type_index: Schema.optional(Schema.Number),
  name_singular: Schema.optional(Schema.NullOr(Schema.String)),
  name_plural: Schema.optional(Schema.NullOr(Schema.String)),
  detail_dashboard: Schema.optional(Schema.NullOr(Schema.Number)),
  default_columns: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
  created_at: Schema.optional(Schema.NullOr(Schema.String)),
});
