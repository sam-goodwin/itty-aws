import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DesktopRecordingsPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    team: Schema.optional(Schema.Number),
    created_by: Schema.optional(Schema.NullOr(Schema.Number)),
    sdk_upload_id: Schema.optional(Schema.String),
    recall_recording_id: Schema.optional(Schema.NullOr(Schema.String)),
    platform: Schema.optional(
      Schema.Literals(["zoom", "teams", "meet", "desktop_audio", "slack"]),
    ),
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
    transcript_text: Schema.optional(Schema.String),
    transcript_segments: Schema.optional(
      Schema.Array(
        Schema.Struct({
          timestamp: Schema.optional(Schema.NullOr(Schema.Number)),
          speaker: Schema.optional(Schema.NullOr(Schema.String)),
          text: Schema.optional(Schema.String),
          confidence: Schema.optional(Schema.NullOr(Schema.Number)),
          is_final: Schema.optional(Schema.NullOr(Schema.Boolean)),
        }),
      ),
    ),
    summary: Schema.optional(Schema.NullOr(Schema.String)),
    extracted_tasks: Schema.optional(
      Schema.Array(
        Schema.Struct({
          title: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          assignee: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    ),
    tasks_generated_at: Schema.optional(Schema.NullOr(Schema.String)),
    summary_generated_at: Schema.optional(Schema.NullOr(Schema.String)),
    started_at: Schema.optional(Schema.String),
    completed_at: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/environments/{project_id}/desktop_recordings/{id}/",
    }),
  );
export type DesktopRecordingsPartialUpdateInput =
  typeof DesktopRecordingsPartialUpdateInput.Type;

// Output Schema
export const DesktopRecordingsPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    team: Schema.optional(Schema.Number),
    created_by: Schema.optional(Schema.NullOr(Schema.Number)),
    sdk_upload_id: Schema.optional(Schema.String),
    recall_recording_id: Schema.optional(Schema.NullOr(Schema.String)),
    platform: Schema.optional(
      Schema.Literals(["zoom", "teams", "meet", "desktop_audio", "slack"]),
    ),
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
    transcript_text: Schema.optional(Schema.String),
    transcript_segments: Schema.optional(
      Schema.Array(
        Schema.Struct({
          timestamp: Schema.optional(Schema.NullOr(Schema.Number)),
          speaker: Schema.optional(Schema.NullOr(Schema.String)),
          text: Schema.optional(Schema.String),
          confidence: Schema.optional(Schema.NullOr(Schema.Number)),
          is_final: Schema.optional(Schema.NullOr(Schema.Boolean)),
        }),
      ),
    ),
    summary: Schema.optional(Schema.NullOr(Schema.String)),
    extracted_tasks: Schema.optional(
      Schema.Array(
        Schema.Struct({
          title: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          assignee: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    ),
    tasks_generated_at: Schema.optional(Schema.NullOr(Schema.String)),
    summary_generated_at: Schema.optional(Schema.NullOr(Schema.String)),
    started_at: Schema.optional(Schema.String),
    completed_at: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type DesktopRecordingsPartialUpdateOutput =
  typeof DesktopRecordingsPartialUpdateOutput.Type;

// The operation
/**
 * RESTful API for managing desktop meeting recordings.
 * Standard CRUD operations plus transcript management as a subresource.
 *
 * @param id - A UUID string identifying this desktop recording.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const desktopRecordingsPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DesktopRecordingsPartialUpdateInput,
    outputSchema: DesktopRecordingsPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
