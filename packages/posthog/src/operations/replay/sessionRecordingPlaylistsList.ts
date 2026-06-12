import * as Schema from "effect/Schema";
import { SessionRecordingPlaylistSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SessionRecordingPlaylistsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    created_by: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    short_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/session_recording_playlists/",
    }),
  );
export type SessionRecordingPlaylistsListInput =
  typeof SessionRecordingPlaylistsListInput.Type;

// Output Schema
export const SessionRecordingPlaylistsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(Schema.suspend(() => SessionRecordingPlaylistSchema)),
    ),
  });
export type SessionRecordingPlaylistsListOutput =
  typeof SessionRecordingPlaylistsListOutput.Type;

// The operation
/**
 * Override list to include synthetic playlists
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sessionRecordingPlaylistsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SessionRecordingPlaylistsListInput,
    outputSchema: SessionRecordingPlaylistsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
