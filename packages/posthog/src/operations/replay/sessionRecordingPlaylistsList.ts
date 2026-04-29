import * as Schema from "effect/Schema";
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
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.Number,
        short_id: Schema.String,
        name: Schema.optional(Schema.NullOr(Schema.String)),
        derived_name: Schema.optional(Schema.NullOr(Schema.String)),
        description: Schema.optional(Schema.String),
        pinned: Schema.optional(Schema.Boolean),
        created_at: Schema.String,
        created_by: Schema.Struct({
          id: Schema.Number,
          uuid: Schema.String,
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.String,
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.NullOr(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
        deleted: Schema.optional(Schema.Boolean),
        filters: Schema.optional(Schema.Unknown),
        last_modified_at: Schema.String,
        last_modified_by: Schema.Struct({
          id: Schema.Number,
          uuid: Schema.String,
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.String,
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.NullOr(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
        recordings_counts: Schema.Record(
          Schema.String,
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        type: Schema.optional(Schema.Unknown),
        is_synthetic: Schema.Boolean,
        _create_in_folder: Schema.optional(Schema.String),
      }),
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
