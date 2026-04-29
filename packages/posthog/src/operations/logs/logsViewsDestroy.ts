import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LogsViewsDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  short_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/environments/{project_id}/logs/views/{short_id}/",
  }),
);
export type LogsViewsDestroyInput = typeof LogsViewsDestroyInput.Type;

// Output Schema
export const LogsViewsDestroyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LogsViewsDestroyOutput = typeof LogsViewsDestroyOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsViewsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LogsViewsDestroyInput,
  outputSchema: LogsViewsDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
