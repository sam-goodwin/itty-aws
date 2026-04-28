import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const SessionRecordingPlaylistsRecordingsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    short_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/session_recording_playlists/{short_id}/recordings/",
    }),
  );
export type SessionRecordingPlaylistsRecordingsRetrieveInput =
  typeof SessionRecordingPlaylistsRecordingsRetrieveInput.Type;

// Output Schema
export const SessionRecordingPlaylistsRecordingsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SessionRecordingPlaylistsRecordingsRetrieveOutput =
  typeof SessionRecordingPlaylistsRecordingsRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sessionRecordingPlaylistsRecordingsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SessionRecordingPlaylistsRecordingsRetrieveInput,
    outputSchema: SessionRecordingPlaylistsRecordingsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
