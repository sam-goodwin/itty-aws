import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SessionRecordingPlaylistsRecordingsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    session_recording_id: Schema.String.pipe(T.PathParam()),
    short_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/session_recording_playlists/{short_id}/recordings/{session_recording_id}/",
    }),
  );
export type SessionRecordingPlaylistsRecordingsDestroyInput =
  typeof SessionRecordingPlaylistsRecordingsDestroyInput.Type;

// Output Schema
export const SessionRecordingPlaylistsRecordingsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SessionRecordingPlaylistsRecordingsDestroyOutput =
  typeof SessionRecordingPlaylistsRecordingsDestroyOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sessionRecordingPlaylistsRecordingsDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SessionRecordingPlaylistsRecordingsDestroyInput,
    outputSchema: SessionRecordingPlaylistsRecordingsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
