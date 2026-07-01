import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LogsSamplingRulesDestroyInput {
  id: string;
  project_id: string;
}
export const LogsSamplingRulesDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/logs/sampling_rules/{id}/",
    }),
  ) as unknown as Schema.Codec<LogsSamplingRulesDestroyInput>;

// Output Schema
export type LogsSamplingRulesDestroyOutput = void;
export const LogsSamplingRulesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<LogsSamplingRulesDestroyOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this logs exclusion rule.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsSamplingRulesDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LogsSamplingRulesDestroyInput,
    outputSchema: LogsSamplingRulesDestroyOutput,
  }),
);
