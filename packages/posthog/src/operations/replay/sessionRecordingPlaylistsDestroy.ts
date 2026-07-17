import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface SessionRecordingPlaylistsDestroyInput {
  project_id: string;
  short_id: string;
}
export const SessionRecordingPlaylistsDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    short_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/session_recording_playlists/{short_id}/",
    }),
  ) as unknown as Schema.Codec<SessionRecordingPlaylistsDestroyInput>;

// Output Schema
export type SessionRecordingPlaylistsDestroyOutput = void;
export const SessionRecordingPlaylistsDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SessionRecordingPlaylistsDestroyOutput>;

// The operation
/**
 * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sessionRecordingPlaylistsDestroy =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SessionRecordingPlaylistsDestroyInput,
    outputSchema: SessionRecordingPlaylistsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
