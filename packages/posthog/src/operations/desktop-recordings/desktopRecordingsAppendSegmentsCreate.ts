import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DesktopRecordingsAppendSegmentsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    segments: Schema.Array(
      Schema.Struct({
        timestamp: Schema.optional(Schema.NullOr(Schema.Number)),
        speaker: Schema.optional(Schema.NullOr(Schema.String)),
        text: Schema.String,
        confidence: Schema.optional(Schema.NullOr(Schema.Number)),
        is_final: Schema.optional(Schema.NullOr(Schema.Boolean)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/desktop_recordings/{id}/append_segments/",
    }),
  );
export type DesktopRecordingsAppendSegmentsCreateInput =
  typeof DesktopRecordingsAppendSegmentsCreateInput.Type;

// Output Schema
export const DesktopRecordingsAppendSegmentsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    team: Schema.Number,
    created_by: Schema.NullOr(Schema.Number),
    sdk_upload_id: Schema.String,
    recall_recording_id: Schema.optional(Schema.NullOr(Schema.String)),
    platform: Schema.Literals([
      "zoom",
      "teams",
      "meet",
      "desktop_audio",
      "slack",
    ]),
    meeting_title: Schema.optional(Schema.NullOr(Schema.String)),
    meeting_url: Schema.optional(Schema.NullOr(Schema.String)),
    duration_seconds: Schema.optional(Schema.NullOr(Schema.Number)),
    status: Schema.optional(
      Schema.Literals([
        "recording",
        "uploading",
        "processing",
        "ready",
        "error",
      ]),
    ),
    notes: Schema.optional(Schema.NullOr(Schema.String)),
    error_message: Schema.optional(Schema.NullOr(Schema.String)),
    video_url: Schema.optional(Schema.NullOr(Schema.String)),
    video_size_bytes: Schema.optional(Schema.NullOr(Schema.Number)),
    participants: Schema.optional(Schema.Array(Schema.String)),
    transcript_text: Schema.String,
    transcript_segments: Schema.optional(
      Schema.Array(
        Schema.Struct({
          timestamp: Schema.optional(Schema.NullOr(Schema.Number)),
          speaker: Schema.optional(Schema.NullOr(Schema.String)),
          text: Schema.String,
          confidence: Schema.optional(Schema.NullOr(Schema.Number)),
          is_final: Schema.optional(Schema.NullOr(Schema.Boolean)),
        }),
      ),
    ),
    summary: Schema.optional(Schema.NullOr(Schema.String)),
    extracted_tasks: Schema.optional(
      Schema.Array(
        Schema.Struct({
          title: Schema.String,
          description: Schema.optional(Schema.String),
          assignee: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    ),
    tasks_generated_at: Schema.optional(Schema.NullOr(Schema.String)),
    summary_generated_at: Schema.optional(Schema.NullOr(Schema.String)),
    started_at: Schema.optional(Schema.String),
    completed_at: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type DesktopRecordingsAppendSegmentsCreateOutput =
  typeof DesktopRecordingsAppendSegmentsCreateOutput.Type;

// The operation
/**
 * Append transcript segments (supports batched real-time streaming)
 *
 * @param id - A UUID string identifying this desktop recording.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const desktopRecordingsAppendSegmentsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DesktopRecordingsAppendSegmentsCreateInput,
    outputSchema: DesktopRecordingsAppendSegmentsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
