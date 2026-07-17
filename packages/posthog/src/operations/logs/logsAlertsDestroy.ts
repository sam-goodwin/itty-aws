import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface LogsAlertsDestroyInput {
  id: string;
  project_id: string;
}
export const LogsAlertsDestroyInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/projects/{project_id}/logs/alerts/{id}/",
  }),
) as unknown as Schema.Codec<LogsAlertsDestroyInput>;

// Output Schema
export type LogsAlertsDestroyOutput = void;
export const LogsAlertsDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<LogsAlertsDestroyOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this logs alert configuration.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsAlertsDestroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: LogsAlertsDestroyInput,
  outputSchema: LogsAlertsDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
