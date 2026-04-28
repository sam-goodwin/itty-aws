import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const SessionRecordingPlaylistsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    short_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/session_recording_playlists/{short_id}/",
    }),
  );
export type SessionRecordingPlaylistsDestroyInput =
  typeof SessionRecordingPlaylistsDestroyInput.Type;

// Output Schema
export const SessionRecordingPlaylistsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SessionRecordingPlaylistsDestroyOutput =
  typeof SessionRecordingPlaylistsDestroyOutput.Type;

// The operation
/**
 * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sessionRecordingPlaylistsDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SessionRecordingPlaylistsDestroyInput,
    outputSchema: SessionRecordingPlaylistsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
