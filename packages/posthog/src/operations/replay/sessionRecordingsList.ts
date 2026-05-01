import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SessionRecordingsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/session_recordings/",
    }),
  );
export type SessionRecordingsListInput = typeof SessionRecordingsListInput.Type;

// Output Schema
export const SessionRecordingsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
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
        }),
      ),
    ),
  });
export type SessionRecordingsListOutput =
  typeof SessionRecordingsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sessionRecordingsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SessionRecordingsListInput,
    outputSchema: SessionRecordingsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
