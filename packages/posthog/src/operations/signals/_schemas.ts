import * as Schema from "effect/Schema";

export const PauseStateResponseSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    paused_until: Schema.optional(Schema.NullOr(Schema.String)),
  });
export const SignalSourceConfigSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    source_product: Schema.optional(
      Schema.suspend(() => SourceProductEnumSchema),
    ),
    source_type: Schema.optional(
      Schema.suspend(() => SignalSourceConfigSourceTypeEnumSchema),
    ),
    enabled: Schema.optional(Schema.Boolean),
    config: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    status: Schema.optional(Schema.NullOr(Schema.String)),
  });
export const SourceProductEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "session_replay",
    "llm_analytics",
    "github",
    "linear",
    "zendesk",
    "conversations",
    "error_tracking",
  ]);
export const SignalSourceConfigSourceTypeEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "session_analysis_cluster",
    "evaluation",
    "issue",
    "ticket",
    "issue_created",
    "issue_reopened",
    "issue_spiking",
  ]);
