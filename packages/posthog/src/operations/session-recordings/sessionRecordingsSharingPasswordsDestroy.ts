import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface SessionRecordingsSharingPasswordsDestroyInput {
  password_id: string;
  project_id: string;
  recording_id: string;
}
export const SessionRecordingsSharingPasswordsDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    password_id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    recording_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/session_recordings/{recording_id}/sharing/passwords/{password_id}/",
    }),
  ) as unknown as Schema.Codec<SessionRecordingsSharingPasswordsDestroyInput>;

// Output Schema
export type SessionRecordingsSharingPasswordsDestroyOutput = void;
export const SessionRecordingsSharingPasswordsDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SessionRecordingsSharingPasswordsDestroyOutput>;

// The operation
/**
 * Delete a password from the sharing configuration.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sessionRecordingsSharingPasswordsDestroy =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SessionRecordingsSharingPasswordsDestroyInput,
    outputSchema: SessionRecordingsSharingPasswordsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
