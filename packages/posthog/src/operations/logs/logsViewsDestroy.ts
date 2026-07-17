import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LogsViewsDestroyInput {
  project_id: string;
  short_id: string;
}
export const LogsViewsDestroyInput = /*@__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  short_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/projects/{project_id}/logs/views/{short_id}/",
  }),
) as unknown as Schema.Codec<LogsViewsDestroyInput>;

// Output Schema
export type LogsViewsDestroyOutput = void;
export const LogsViewsDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<LogsViewsDestroyOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsViewsDestroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: LogsViewsDestroyInput,
  outputSchema: LogsViewsDestroyOutput,
}));
