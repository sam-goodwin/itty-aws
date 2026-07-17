import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface SessionRecordingPlaylistsRecordingsRetrieveInput {
  project_id: string;
  short_id: string;
}
export const SessionRecordingPlaylistsRecordingsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    short_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/session_recording_playlists/{short_id}/recordings/",
    }),
  ) as unknown as Schema.Codec<SessionRecordingPlaylistsRecordingsRetrieveInput>;

// Output Schema
export type SessionRecordingPlaylistsRecordingsRetrieveOutput = void;
export const SessionRecordingPlaylistsRecordingsRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SessionRecordingPlaylistsRecordingsRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sessionRecordingPlaylistsRecordingsRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SessionRecordingPlaylistsRecordingsRetrieveInput,
    outputSchema: SessionRecordingPlaylistsRecordingsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
