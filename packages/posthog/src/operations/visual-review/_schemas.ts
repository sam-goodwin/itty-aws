import * as Schema from "effect/Schema";

export const RepoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  team_id: Schema.optional(Schema.Number),
  repo_external_id: Schema.optional(Schema.Number),
  repo_full_name: Schema.optional(Schema.String),
  baseline_file_paths: Schema.optional(
    Schema.Record(Schema.String, Schema.String),
  ),
  enable_pr_comments: Schema.optional(Schema.Boolean),
  created_at: Schema.optional(Schema.String),
});
export const QuarantinedIdentifierEntrySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          first_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
        }),
      ),
    ),
    id: Schema.optional(Schema.String),
    identifier: Schema.optional(Schema.String),
    run_type: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    expires_at: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export const RunSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  approved_by: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        first_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
      }),
    ),
  ),
  id: Schema.optional(Schema.String),
  repo_id: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  run_type: Schema.optional(Schema.String),
  commit_sha: Schema.optional(Schema.String),
  branch: Schema.optional(Schema.String),
  pr_number: Schema.optional(Schema.NullOr(Schema.Number)),
  approved: Schema.optional(Schema.Boolean),
  approved_at: Schema.optional(Schema.NullOr(Schema.String)),
  summary: Schema.optional(Schema.suspend(() => RunSummarySchema)),
  error_message: Schema.optional(Schema.NullOr(Schema.String)),
  created_at: Schema.optional(Schema.String),
  completed_at: Schema.optional(Schema.NullOr(Schema.String)),
  is_stale: Schema.optional(Schema.Boolean),
  superseded_by_id: Schema.optional(Schema.NullOr(Schema.String)),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
});
export const RunSummarySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  total: Schema.optional(Schema.Number),
  changed: Schema.optional(Schema.Number),
  new: Schema.optional(Schema.Number),
  removed: Schema.optional(Schema.Number),
  unchanged: Schema.optional(Schema.Number),
  unresolved: Schema.optional(Schema.Number),
  tolerated_matched: Schema.optional(Schema.Number),
});
export const SnapshotManifestItemSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    identifier: Schema.optional(Schema.String),
    content_hash: Schema.optional(Schema.String),
    width: Schema.optional(Schema.NullOr(Schema.Number)),
    height: Schema.optional(Schema.NullOr(Schema.Number)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  });
export const UploadTargetSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  content_hash: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
  fields: Schema.optional(Schema.Record(Schema.String, Schema.String)),
});
export const ApproveSnapshotInputSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    identifier: Schema.optional(Schema.String),
    new_hash: Schema.optional(Schema.String),
  });
export const SnapshotHistoryEntrySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    run_id: Schema.optional(Schema.String),
    result: Schema.optional(Schema.String),
    branch: Schema.optional(Schema.String),
    commit_sha: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
  });
export const SnapshotSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  current_artifact: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        content_hash: Schema.optional(Schema.String),
        width: Schema.optional(Schema.NullOr(Schema.Number)),
        height: Schema.optional(Schema.NullOr(Schema.Number)),
        download_url: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  ),
  baseline_artifact: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        content_hash: Schema.optional(Schema.String),
        width: Schema.optional(Schema.NullOr(Schema.Number)),
        height: Schema.optional(Schema.NullOr(Schema.Number)),
        download_url: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  ),
  diff_artifact: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        content_hash: Schema.optional(Schema.String),
        width: Schema.optional(Schema.NullOr(Schema.Number)),
        height: Schema.optional(Schema.NullOr(Schema.Number)),
        download_url: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  ),
  reviewed_by: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        first_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
      }),
    ),
  ),
  id: Schema.optional(Schema.String),
  identifier: Schema.optional(Schema.String),
  result: Schema.optional(Schema.String),
  classification_reason: Schema.optional(Schema.String),
  diff_percentage: Schema.optional(Schema.NullOr(Schema.Number)),
  diff_pixel_count: Schema.optional(Schema.NullOr(Schema.Number)),
  review_state: Schema.optional(Schema.String),
  reviewed_at: Schema.optional(Schema.NullOr(Schema.String)),
  approved_hash: Schema.optional(Schema.String),
  tolerated_hash_id: Schema.optional(Schema.NullOr(Schema.String)),
  is_quarantined: Schema.optional(Schema.Boolean),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
});
export const ToleratedHashEntrySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    alternate_hash: Schema.optional(Schema.String),
    baseline_hash: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    diff_percentage: Schema.optional(Schema.NullOr(Schema.Number)),
    created_at: Schema.optional(Schema.String),
    source_run_id: Schema.optional(Schema.NullOr(Schema.String)),
  });
