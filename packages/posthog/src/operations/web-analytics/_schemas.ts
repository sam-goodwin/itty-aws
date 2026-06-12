import * as Schema from "effect/Schema";

export const TopPageSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  host: Schema.optional(Schema.String),
  path: Schema.optional(Schema.String),
  visitors: Schema.optional(Schema.Number),
  change: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        percent: Schema.optional(Schema.Number),
        direction: Schema.optional(Schema.Literals(["Up", "Down"])),
        color: Schema.optional(Schema.String),
        text: Schema.optional(Schema.String),
        long_text: Schema.optional(Schema.String),
      }),
    ),
  ),
});
export const TopSourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  visitors: Schema.optional(Schema.Number),
  change: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        percent: Schema.optional(Schema.Number),
        direction: Schema.optional(Schema.Literals(["Up", "Down"])),
        color: Schema.optional(Schema.String),
        text: Schema.optional(Schema.String),
        long_text: Schema.optional(Schema.String),
      }),
    ),
  ),
});
export const GoalSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  conversions: Schema.optional(Schema.Number),
  change: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        percent: Schema.optional(Schema.Number),
        direction: Schema.optional(Schema.Literals(["Up", "Down"])),
        color: Schema.optional(Schema.String),
        text: Schema.optional(Schema.String),
        long_text: Schema.optional(Schema.String),
      }),
    ),
  ),
});
