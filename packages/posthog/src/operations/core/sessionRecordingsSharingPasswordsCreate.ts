import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";
import { SensitiveNullableString } from "../../sensitive";

// Input Schema
export const SessionRecordingsSharingPasswordsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    recording_id: Schema.String.pipe(T.PathParam()),
    created_at: Schema.String,
    enabled: Schema.optional(Schema.Boolean),
    access_token: SensitiveNullableString,
    settings: Schema.optional(Schema.NullOr(Schema.Unknown)),
    password_required: Schema.optional(Schema.Boolean),
    share_passwords: Schema.Array(
      Schema.Struct({
        id: Schema.Number,
        created_at: Schema.String,
        note: Schema.optional(Schema.NullOr(Schema.String)),
        created_by_email: Schema.String,
        is_active: Schema.Boolean,
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/session_recordings/{recording_id}/sharing/passwords/",
    }),
  );
export type SessionRecordingsSharingPasswordsCreateInput =
  typeof SessionRecordingsSharingPasswordsCreateInput.Type;

// Output Schema
export const SessionRecordingsSharingPasswordsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created_at: Schema.String,
    enabled: Schema.optional(Schema.Boolean),
    access_token: SensitiveNullableString,
    settings: Schema.optional(Schema.NullOr(Schema.Unknown)),
    password_required: Schema.optional(Schema.Boolean),
    share_passwords: Schema.Array(
      Schema.Struct({
        id: Schema.Number,
        created_at: Schema.String,
        note: Schema.optional(Schema.NullOr(Schema.String)),
        created_by_email: Schema.String,
        is_active: Schema.Boolean,
      }),
    ),
  });
export type SessionRecordingsSharingPasswordsCreateOutput =
  typeof SessionRecordingsSharingPasswordsCreateOutput.Type;

// The operation
/**
 * Create a new password for the sharing configuration.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sessionRecordingsSharingPasswordsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SessionRecordingsSharingPasswordsCreateInput,
    outputSchema: SessionRecordingsSharingPasswordsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
