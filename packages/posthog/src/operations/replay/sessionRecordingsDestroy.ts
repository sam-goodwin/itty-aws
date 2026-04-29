import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SessionRecordingsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/session_recordings/{id}/",
    }),
  );
export type SessionRecordingsDestroyInput =
  typeof SessionRecordingsDestroyInput.Type;

// Output Schema
export const SessionRecordingsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SessionRecordingsDestroyOutput =
  typeof SessionRecordingsDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this session recording.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sessionRecordingsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SessionRecordingsDestroyInput,
    outputSchema: SessionRecordingsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
