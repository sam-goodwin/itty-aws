import * as Schema from "effect/Schema";

export const TaskSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  task_number: Schema.optional(Schema.NullOr(Schema.Number)),
  slug: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
  title_manually_set: Schema.optional(Schema.Boolean),
  description: Schema.optional(Schema.String),
  origin_product: Schema.optional(
    Schema.suspend(() => OriginProductEnumSchema),
  ),
  repository: Schema.optional(Schema.NullOr(Schema.String)),
  github_integration: Schema.optional(Schema.NullOr(Schema.Number)),
  signal_report: Schema.optional(Schema.NullOr(Schema.String)),
  signal_report_task_relationship: Schema.optional(
    Schema.Literals(["implementation"]),
  ),
  json_schema: Schema.optional(Schema.NullOr(Schema.Unknown)),
  internal: Schema.optional(Schema.Boolean),
  latest_run: Schema.optional(
    Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
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
  ci_prompt: Schema.optional(Schema.NullOr(Schema.String)),
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
export const TaskStagedArtifactFinalizeUploadSchema =
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
export const TaskStagedArtifactPrepareUploadSchema =
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
export const TaskStagedArtifactPrepareUploadResponseSchema =
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
