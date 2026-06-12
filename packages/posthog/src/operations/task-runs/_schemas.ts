import * as Schema from "effect/Schema";

export const TaskRunDetailSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  task: Schema.optional(Schema.String),
  stage: Schema.optional(Schema.NullOr(Schema.String)),
  branch: Schema.optional(Schema.NullOr(Schema.String)),
  status: Schema.optional(Schema.suspend(() => TaskRunDetailStatusEnumSchema)),
  environment: Schema.optional(Schema.Literals(["local", "cloud"])),
  runtime_adapter: Schema.optional(Schema.Unknown),
  provider: Schema.optional(Schema.Unknown),
  model: Schema.optional(Schema.NullOr(Schema.String)),
  reasoning_effort: Schema.optional(Schema.Unknown),
  log_url: Schema.optional(Schema.NullOr(Schema.String)),
  error_message: Schema.optional(Schema.NullOr(Schema.String)),
  output: Schema.optional(Schema.NullOr(Schema.Unknown)),
  state: Schema.optional(Schema.Unknown),
  artifacts: Schema.optional(
    Schema.Array(Schema.suspend(() => TaskRunArtifactResponseSchema)),
  ),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
  completed_at: Schema.optional(Schema.NullOr(Schema.String)),
});
export const TaskRunDetailStatusEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "not_started",
    "queued",
    "in_progress",
    "completed",
    "failed",
    "cancelled",
  ]);
export const TaskRunArtifactResponseSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    size: Schema.optional(Schema.Number),
    content_type: Schema.optional(Schema.String),
    storage_path: Schema.optional(Schema.String),
    uploaded_at: Schema.optional(Schema.String),
  });
export const TaskRunArtifactUploadSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(
      Schema.Literals([
        "plan",
        "context",
        "reference",
        "output",
        "artifact",
        "tree_snapshot",
        "user_attachment",
      ]),
    ),
    source: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    content_encoding: Schema.optional(Schema.Literals(["utf-8", "base64"])),
    content_type: Schema.optional(Schema.String),
  });
export const TaskRunArtifactFinalizeUploadSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(
      Schema.Literals([
        "plan",
        "context",
        "reference",
        "output",
        "artifact",
        "tree_snapshot",
        "user_attachment",
      ]),
    ),
    source: Schema.optional(Schema.String),
    storage_path: Schema.optional(Schema.String),
    content_type: Schema.optional(Schema.String),
  });
export const TaskRunArtifactPrepareUploadSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(
      Schema.Literals([
        "plan",
        "context",
        "reference",
        "output",
        "artifact",
        "tree_snapshot",
        "user_attachment",
      ]),
    ),
    source: Schema.optional(Schema.String),
    size: Schema.optional(Schema.Number),
    content_type: Schema.optional(Schema.String),
  });
export const TaskRunArtifactPrepareUploadResponseSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    size: Schema.optional(Schema.Number),
    content_type: Schema.optional(Schema.String),
    storage_path: Schema.optional(Schema.String),
    expires_in: Schema.optional(Schema.Number),
    presigned_post: Schema.optional(
      Schema.Struct({
        url: Schema.optional(Schema.String),
        fields: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
  });
export const OriginProductEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "error_tracking",
    "eval_clusters",
    "user_created",
    "automation",
    "slack",
    "support_queue",
    "session_summaries",
    "signal_report",
  ]);
