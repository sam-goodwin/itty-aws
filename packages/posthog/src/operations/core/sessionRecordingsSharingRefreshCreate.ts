import * as Schema from "effect/Schema";
import { SharePasswordSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";
import {
  SensitiveNullableString,
  SensitiveOutputNullableString,
} from "../../sensitive.ts";

// Input Schema
export const SessionRecordingsSharingRefreshCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    recording_id: Schema.String.pipe(T.PathParam()),
    created_at: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    access_token: Schema.optional(SensitiveNullableString),
    settings: Schema.optional(Schema.NullOr(Schema.Unknown)),
    password_required: Schema.optional(Schema.Boolean),
    share_passwords: Schema.optional(
      Schema.Array(Schema.suspend(() => SharePasswordSchema)),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/session_recordings/{recording_id}/sharing/refresh/",
    }),
  );
export type SessionRecordingsSharingRefreshCreateInput =
  typeof SessionRecordingsSharingRefreshCreateInput.Type;

// Output Schema
export const SessionRecordingsSharingRefreshCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created_at: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    access_token: Schema.optional(SensitiveOutputNullableString),
    settings: Schema.optional(Schema.NullOr(Schema.Unknown)),
    password_required: Schema.optional(Schema.Boolean),
    share_passwords: Schema.optional(
      Schema.Array(Schema.suspend(() => SharePasswordSchema)),
    ),
  });
export type SessionRecordingsSharingRefreshCreateOutput =
  typeof SessionRecordingsSharingRefreshCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sessionRecordingsSharingRefreshCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SessionRecordingsSharingRefreshCreateInput,
    outputSchema: SessionRecordingsSharingRefreshCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
