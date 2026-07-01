import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface SessionRecordingsRetrieveInput {
  id: string;
  project_id: string;
}
export const SessionRecordingsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/session_recordings/{id}/",
    }),
  ) as unknown as Schema.Codec<SessionRecordingsRetrieveInput>;

// Output Schema
export interface SessionRecordingsRetrieveOutput {
  id?: string;
  distinct_id?: string | null;
  viewed?: boolean;
  viewers?: string[];
  recording_duration?: number;
  active_seconds?: number | null;
  inactive_seconds?: number | null;
  start_time?: string | null;
  end_time?: string | null;
  click_count?: number | null;
  keypress_count?: number | null;
  mouse_activity_count?: number | null;
  console_log_count?: number | null;
  console_warn_count?: number | null;
  console_error_count?: number | null;
  start_url?: string | null;
  person?: {
    id?: number;
    name?: string;
    distinct_ids?: string[];
    properties?: unknown;
    created_at?: string;
    uuid?: string;
    last_seen_at?: string | null;
  };
  retention_period_days?: number | null;
  expiry_time?: string | null;
  recording_ttl?: number | null;
  snapshot_source?: string | null;
  snapshot_library?: string | null;
  ongoing?: boolean;
  activity_score?: number | null;
  has_summary?: boolean;
  summary_outcome?: {
    description?: string | null;
    success?: boolean | null;
  } | null;
  external_references?: Record<string, unknown>[];
  matches_filters?: boolean;
}
export const SessionRecordingsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    person: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        name: Schema.optional(Schema.String),
        distinct_ids: Schema.optional(Schema.Array(Schema.String)),
        properties: Schema.optional(Schema.Unknown),
        created_at: Schema.optional(Schema.String),
        uuid: Schema.optional(Schema.String),
        last_seen_at: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
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
    matches_filters: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<SessionRecordingsRetrieveOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this session recording.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sessionRecordingsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SessionRecordingsRetrieveInput,
    outputSchema: SessionRecordingsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
