import * as Schema from "effect/Schema";

export const CustomerJourneySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  insight: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.NullOr(Schema.String)),
  created_at: Schema.optional(Schema.String),
  created_by: Schema.optional(Schema.NullOr(Schema.Number)),
  updated_at: Schema.optional(Schema.NullOr(Schema.String)),
});
