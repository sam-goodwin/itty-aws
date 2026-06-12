import * as Schema from "effect/Schema";
import {
  DesktopRecordingStatusEnumSchema,
  DesktopRecordingTaskSchema,
  MeetingPlatformEnumSchema,
  TranscriptSegmentSchema,
} from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DesktopRecordingsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/desktop_recordings/{id}/",
    }),
  );
export type DesktopRecordingsRetrieveInput =
  typeof DesktopRecordingsRetrieveInput.Type;

// Output Schema
export const DesktopRecordingsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    team: Schema.optional(Schema.Number),
    created_by: Schema.optional(Schema.NullOr(Schema.Number)),
    sdk_upload_id: Schema.optional(Schema.String),
    recall_recording_id: Schema.optional(Schema.NullOr(Schema.String)),
    platform: Schema.optional(Schema.suspend(() => MeetingPlatformEnumSchema)),
    meeting_title: Schema.optional(Schema.NullOr(Schema.String)),
    meeting_url: Schema.optional(Schema.NullOr(Schema.String)),
    duration_seconds: Schema.optional(Schema.NullOr(Schema.Number)),
    status: Schema.optional(
      Schema.suspend(() => DesktopRecordingStatusEnumSchema),
    ),
    notes: Schema.optional(Schema.NullOr(Schema.String)),
    error_message: Schema.optional(Schema.NullOr(Schema.String)),
    video_url: Schema.optional(Schema.NullOr(Schema.String)),
    video_size_bytes: Schema.optional(Schema.NullOr(Schema.Number)),
    participants: Schema.optional(Schema.Array(Schema.String)),
    transcript_text: Schema.optional(Schema.String),
    transcript_segments: Schema.optional(
      Schema.Array(Schema.suspend(() => TranscriptSegmentSchema)),
    ),
    summary: Schema.optional(Schema.NullOr(Schema.String)),
    extracted_tasks: Schema.optional(
      Schema.Array(Schema.suspend(() => DesktopRecordingTaskSchema)),
    ),
    tasks_generated_at: Schema.optional(Schema.NullOr(Schema.String)),
    summary_generated_at: Schema.optional(Schema.NullOr(Schema.String)),
    started_at: Schema.optional(Schema.String),
    completed_at: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type DesktopRecordingsRetrieveOutput =
  typeof DesktopRecordingsRetrieveOutput.Type;

// The operation
/**
 * RESTful API for managing desktop meeting recordings.
 * Standard CRUD operations plus transcript management as a subresource.
 *
 * @param id - A UUID string identifying this desktop recording.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const desktopRecordingsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DesktopRecordingsRetrieveInput,
    outputSchema: DesktopRecordingsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
