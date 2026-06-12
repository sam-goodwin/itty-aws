import * as Schema from "effect/Schema";

export const SessionRecordingPlaylistSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    short_id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    derived_name: Schema.optional(Schema.NullOr(Schema.String)),
    description: Schema.optional(Schema.String),
    pinned: Schema.optional(Schema.Boolean),
    created_at: Schema.optional(Schema.String),
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
    deleted: Schema.optional(Schema.Boolean),
    filters: Schema.optional(Schema.Unknown),
    last_modified_at: Schema.optional(Schema.String),
    last_modified_by: Schema.optional(
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
    recordings_counts: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Record(Schema.String, Schema.Unknown),
      ),
    ),
    type: Schema.optional(Schema.Unknown),
    is_synthetic: Schema.optional(Schema.Boolean),
    _create_in_folder: Schema.optional(Schema.String),
  });
export const SessionRecordingSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
    viewed: Schema.optional(Schema.Boolean),
    viewers: Schema.optional(Schema.Array(Schema.String)),
    recording_duration: Schema.optional(Schema.Number),
    active_seconds: Schema.optional(Schema.NullOr(Schema.Number)),
    inactive_seconds: Schema.optional(Schema.NullOr(Schema.Number)),
    start_time: Schema.optional(Schema.NullOr(Schema.String)),
    end_time: Schema.optional(Schema.NullOr(Schema.String)),
    click_count: Schema.optional(Schema.NullOr(Schema.Number)),
    keypress_count: Schema.optional(Schema.NullOr(Schema.Number)),
    mouse_activity_count: Schema.optional(Schema.NullOr(Schema.Number)),
    console_log_count: Schema.optional(Schema.NullOr(Schema.Number)),
    console_warn_count: Schema.optional(Schema.NullOr(Schema.Number)),
    console_error_count: Schema.optional(Schema.NullOr(Schema.Number)),
    start_url: Schema.optional(Schema.NullOr(Schema.String)),
    person: Schema.optional(Schema.suspend(() => MinimalPersonSchema)),
    retention_period_days: Schema.optional(Schema.NullOr(Schema.Number)),
    expiry_time: Schema.optional(Schema.NullOr(Schema.String)),
    recording_ttl: Schema.optional(Schema.NullOr(Schema.Number)),
    snapshot_source: Schema.optional(Schema.NullOr(Schema.String)),
    snapshot_library: Schema.optional(Schema.NullOr(Schema.String)),
    ongoing: Schema.optional(Schema.Boolean),
    activity_score: Schema.optional(Schema.NullOr(Schema.Number)),
    has_summary: Schema.optional(Schema.Boolean),
    summary_outcome: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          description: Schema.optional(Schema.NullOr(Schema.String)),
          success: Schema.optional(Schema.NullOr(Schema.Boolean)),
        }),
      ),
    ),
    external_references: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  },
);
export const MinimalPersonSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  distinct_ids: Schema.optional(Schema.Array(Schema.String)),
  properties: Schema.optional(Schema.Unknown),
  created_at: Schema.optional(Schema.String),
  uuid: Schema.optional(Schema.String),
  last_seen_at: Schema.optional(Schema.NullOr(Schema.String)),
});
