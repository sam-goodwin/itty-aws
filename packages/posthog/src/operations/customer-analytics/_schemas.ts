import * as Schema from "effect/Schema";

export const GroupUsageMetricSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    format: Schema.optional(
      Schema.suspend(() => GroupUsageMetricFormatEnumSchema),
    ),
    interval: Schema.optional(Schema.Number),
    display: Schema.optional(
      Schema.suspend(() => GroupUsageMetricDisplayEnumSchema),
    ),
    filters: Schema.optional(Schema.Unknown),
    math: Schema.optional(Schema.suspend(() => MathEnumSchema)),
    math_property: Schema.optional(Schema.NullOr(Schema.String)),
  },
);
export const GroupUsageMetricFormatEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["numeric", "currency"]);
export const GroupUsageMetricDisplayEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["number", "sparkline"]);
export const MathEnumSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "count",
  "sum",
]);
