import * as Schema from "effect/Schema";
import { SharingConfigurationSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SessionRecordingsSharingListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    recording_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/session_recordings/{recording_id}/sharing/",
    }),
  );
export type SessionRecordingsSharingListInput =
  typeof SessionRecordingsSharingListInput.Type;

// Output Schema
export const SessionRecordingsSharingListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => SharingConfigurationSchema),
  );
export type SessionRecordingsSharingListOutput =
  typeof SessionRecordingsSharingListOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sessionRecordingsSharingList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SessionRecordingsSharingListInput,
    outputSchema: SessionRecordingsSharingListOutput,
    errors: [Forbidden, NotFound] as const,
  }));
