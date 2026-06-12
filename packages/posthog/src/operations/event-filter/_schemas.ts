import * as Schema from "effect/Schema";

export const EventFilterConfigModeEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["disabled", "dry_run", "live"]);
export const AppMetricSeriesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  values: Schema.optional(Schema.Array(Schema.Number)),
});
