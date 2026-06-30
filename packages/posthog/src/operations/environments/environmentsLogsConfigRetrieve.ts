import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const EnvironmentsLogsConfigRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/environments/{id}/logs_config/",
    }),
  );
export type EnvironmentsLogsConfigRetrieveInput =
  typeof EnvironmentsLogsConfigRetrieveInput.Type;

// Output Schema
export const EnvironmentsLogsConfigRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type EnvironmentsLogsConfigRetrieveOutput =
  typeof EnvironmentsLogsConfigRetrieveOutput.Type;

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
