import * as Schema from "effect/Schema";

export const EarlyAccessFeatureSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    feature_flag: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        team_id: Schema.optional(Schema.Number),
        name: Schema.optional(Schema.String),
        key: Schema.optional(Schema.String),
        filters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
        deleted: Schema.optional(Schema.Boolean),
        active: Schema.optional(Schema.Boolean),
        ensure_experience_continuity: Schema.optional(
          Schema.NullOr(Schema.Boolean),
        ),
        has_encrypted_payloads: Schema.optional(Schema.NullOr(Schema.Boolean)),
        version: Schema.optional(Schema.NullOr(Schema.Number)),
        evaluation_runtime: Schema.optional(Schema.Unknown),
        bucketing_identifier: Schema.optional(Schema.Unknown),
        evaluation_contexts: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    stage: Schema.optional(
      Schema.Literals([
        "draft",
        "concept",
        "alpha",
        "beta",
        "general-availability",
        "archived",
      ]),
    ),
    documentation_url: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    created_at: Schema.optional(Schema.String),
  });
