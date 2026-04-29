import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SessionRecordingPlaylistsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    short_id: Schema.String.pipe(T.PathParam()),
    id: Schema.Number,
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/session_recording_playlists/{short_id}/",
    }),
  );
export type SessionRecordingPlaylistsUpdateInput =
  typeof SessionRecordingPlaylistsUpdateInput.Type;

// Output Schema
export const SessionRecordingPlaylistsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type SessionRecordingPlaylistsUpdateOutput =
  typeof SessionRecordingPlaylistsUpdateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sessionRecordingPlaylistsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SessionRecordingPlaylistsUpdateInput,
    outputSchema: SessionRecordingPlaylistsUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
