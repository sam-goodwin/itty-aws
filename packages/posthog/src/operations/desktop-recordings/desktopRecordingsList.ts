import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DesktopRecordingsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/desktop_recordings/",
    }),
  );
export type DesktopRecordingsListInput = typeof DesktopRecordingsListInput.Type;

// Output Schema
export const DesktopRecordingsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          team: Schema.optional(Schema.Number),
          created_by: Schema.optional(Schema.NullOr(Schema.Number)),
          sdk_upload_id: Schema.optional(Schema.String),
          recall_recording_id: Schema.optional(Schema.NullOr(Schema.String)),
          platform: Schema.optional(
            Schema.Literals([
              "zoom",
              "teams",
              "meet",
              "desktop_audio",
              "slack",
            ]),
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
        }),
      ),
    ),
  });
export type DesktopRecordingsListOutput =
  typeof DesktopRecordingsListOutput.Type;

// The operation
/**
 * RESTful API for managing desktop meeting recordings.
 * Standard CRUD operations plus transcript management as a subresource.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const desktopRecordingsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DesktopRecordingsListInput,
    outputSchema: DesktopRecordingsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
