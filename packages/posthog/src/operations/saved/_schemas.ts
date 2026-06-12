import * as Schema from "effect/Schema";

export const HeatmapScreenshotResponseSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    short_id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    url: Schema.optional(Schema.String),
    data_url: Schema.optional(Schema.NullOr(Schema.String)),
    target_widths: Schema.optional(Schema.Unknown),
    type: Schema.optional(
      Schema.suspend(() => HeatmapScreenshotResponseTypeEnumSchema),
    ),
    status: Schema.optional(
      Schema.Literals(["processing", "completed", "failed"]),
    ),
    has_content: Schema.optional(Schema.Boolean),
    snapshots: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    deleted: Schema.optional(Schema.Boolean),
    created_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    exception: Schema.optional(Schema.NullOr(Schema.String)),
  });
export const HeatmapScreenshotResponseTypeEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "screenshot",
    "iframe",
    "recording",
  ]);
