import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SessionRecordingsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    distinct_id: Schema.NullOr(Schema.String),
    viewed: Schema.Boolean,
    viewers: Schema.Array(Schema.String),
    recording_duration: Schema.Number,
    active_seconds: Schema.NullOr(Schema.Number),
    inactive_seconds: Schema.NullOr(Schema.Number),
    start_time: Schema.NullOr(Schema.String),
    end_time: Schema.NullOr(Schema.String),
    click_count: Schema.NullOr(Schema.Number),
    keypress_count: Schema.NullOr(Schema.Number),
    mouse_activity_count: Schema.NullOr(Schema.Number),
    console_log_count: Schema.NullOr(Schema.Number),
    console_warn_count: Schema.NullOr(Schema.Number),
    console_error_count: Schema.NullOr(Schema.Number),
    start_url: Schema.NullOr(Schema.String),
    person: Schema.optional(
      Schema.Struct({
        id: Schema.Number,
        name: Schema.String,
        distinct_ids: Schema.Array(Schema.String),
        properties: Schema.optional(Schema.Unknown),
        created_at: Schema.String,
        uuid: Schema.String,
        last_seen_at: Schema.NullOr(Schema.String),
      }),
    ),
    retention_period_days: Schema.NullOr(Schema.Number),
    expiry_time: Schema.NullOr(Schema.String),
    recording_ttl: Schema.NullOr(Schema.Number),
    snapshot_source: Schema.NullOr(Schema.String),
    snapshot_library: Schema.NullOr(Schema.String),
    ongoing: Schema.Boolean,
    activity_score: Schema.NullOr(Schema.Number),
    has_summary: Schema.Boolean,
    summary_outcome: Schema.NullOr(
      Schema.Struct({
        description: Schema.optional(Schema.NullOr(Schema.String)),
        success: Schema.optional(Schema.NullOr(Schema.Boolean)),
      }),
    ),
    external_references: Schema.Array(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/session_recordings/{id}/",
    }),
  );
export type SessionRecordingsUpdateInput =
  typeof SessionRecordingsUpdateInput.Type;

// Output Schema
export const SessionRecordingsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    distinct_id: Schema.NullOr(Schema.String),
    viewed: Schema.Boolean,
    viewers: Schema.Array(Schema.String),
    recording_duration: Schema.Number,
    active_seconds: Schema.NullOr(Schema.Number),
    inactive_seconds: Schema.NullOr(Schema.Number),
    start_time: Schema.NullOr(Schema.String),
    end_time: Schema.NullOr(Schema.String),
    click_count: Schema.NullOr(Schema.Number),
    keypress_count: Schema.NullOr(Schema.Number),
    mouse_activity_count: Schema.NullOr(Schema.Number),
    console_log_count: Schema.NullOr(Schema.Number),
    console_warn_count: Schema.NullOr(Schema.Number),
    console_error_count: Schema.NullOr(Schema.Number),
    start_url: Schema.NullOr(Schema.String),
    person: Schema.optional(
      Schema.Struct({
        id: Schema.Number,
        name: Schema.String,
        distinct_ids: Schema.Array(Schema.String),
        properties: Schema.optional(Schema.Unknown),
        created_at: Schema.String,
        uuid: Schema.String,
        last_seen_at: Schema.NullOr(Schema.String),
      }),
    ),
    retention_period_days: Schema.NullOr(Schema.Number),
    expiry_time: Schema.NullOr(Schema.String),
    recording_ttl: Schema.NullOr(Schema.Number),
    snapshot_source: Schema.NullOr(Schema.String),
    snapshot_library: Schema.NullOr(Schema.String),
    ongoing: Schema.Boolean,
    activity_score: Schema.NullOr(Schema.Number),
    has_summary: Schema.Boolean,
    summary_outcome: Schema.NullOr(
      Schema.Struct({
        description: Schema.optional(Schema.NullOr(Schema.String)),
        success: Schema.optional(Schema.NullOr(Schema.Boolean)),
      }),
    ),
    external_references: Schema.Array(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  });
export type SessionRecordingsUpdateOutput =
  typeof SessionRecordingsUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this session recording.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sessionRecordingsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SessionRecordingsUpdateInput,
    outputSchema: SessionRecordingsUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
