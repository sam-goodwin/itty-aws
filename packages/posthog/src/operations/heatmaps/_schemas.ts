import * as Schema from "effect/Schema";

export const HeatmapsResponseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    results: Schema.optional(
      Schema.Array(Schema.suspend(() => HeatmapResponseItemSchema)),
    ),
  },
);
export const HeatmapResponseItemSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    pointer_y: Schema.optional(Schema.Number),
    pointer_relative_x: Schema.optional(Schema.Number),
    pointer_target_fixed: Schema.optional(Schema.Boolean),
  });
