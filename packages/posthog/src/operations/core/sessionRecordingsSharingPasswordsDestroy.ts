import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const SessionRecordingsSharingPasswordsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    password_id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    recording_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/session_recordings/{recording_id}/sharing/passwords/{password_id}/",
    }),
  );
export type SessionRecordingsSharingPasswordsDestroyInput =
  typeof SessionRecordingsSharingPasswordsDestroyInput.Type;

// Output Schema
export const SessionRecordingsSharingPasswordsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SessionRecordingsSharingPasswordsDestroyOutput =
  typeof SessionRecordingsSharingPasswordsDestroyOutput.Type;

// The operation
/**
 * Delete a password from the sharing configuration.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sessionRecordingsSharingPasswordsDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SessionRecordingsSharingPasswordsDestroyInput,
    outputSchema: SessionRecordingsSharingPasswordsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
