import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const InsightsSharingPasswordsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    insight_id: Schema.Number.pipe(T.PathParam()),
    password_id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/insights/{insight_id}/sharing/passwords/{password_id}/",
    }),
  );
export type InsightsSharingPasswordsDestroyInput =
  typeof InsightsSharingPasswordsDestroyInput.Type;

// Output Schema
export const InsightsSharingPasswordsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type InsightsSharingPasswordsDestroyOutput =
  typeof InsightsSharingPasswordsDestroyOutput.Type;

// The operation
/**
 * Delete a password from the sharing configuration.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const insightsSharingPasswordsDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InsightsSharingPasswordsDestroyInput,
    outputSchema: InsightsSharingPasswordsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
