import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface EnvironmentsLogsConfigRetrieveInput {
  id: number;
  project_id: string;
}
export const EnvironmentsLogsConfigRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/environments/{id}/logs_config/",
    }),
  ) as unknown as Schema.Codec<EnvironmentsLogsConfigRetrieveInput>;

// Output Schema
export type EnvironmentsLogsConfigRetrieveOutput = void;
export const EnvironmentsLogsConfigRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<EnvironmentsLogsConfigRetrieveOutput>;

// The operation
/**
 * Manage logs product configuration for this environment.
 *
 * @param id - A unique integer value identifying this environment (aka team).
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const environmentsLogsConfigRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EnvironmentsLogsConfigRetrieveInput,
    outputSchema: EnvironmentsLogsConfigRetrieveOutput,
  }));
