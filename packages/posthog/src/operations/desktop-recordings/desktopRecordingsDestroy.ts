import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const DesktopRecordingsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/environments/{project_id}/desktop_recordings/{id}/",
    }),
  );
export type DesktopRecordingsDestroyInput =
  typeof DesktopRecordingsDestroyInput.Type;

// Output Schema
export const DesktopRecordingsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DesktopRecordingsDestroyOutput =
  typeof DesktopRecordingsDestroyOutput.Type;

// The operation
/**
 * RESTful API for managing desktop meeting recordings.
 * Standard CRUD operations plus transcript management as a subresource.
 *
 * @param id - A UUID string identifying this desktop recording.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const desktopRecordingsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DesktopRecordingsDestroyInput,
    outputSchema: DesktopRecordingsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
