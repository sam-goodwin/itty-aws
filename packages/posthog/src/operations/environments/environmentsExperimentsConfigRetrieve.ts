import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const EnvironmentsExperimentsConfigRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/environments/{id}/experiments_config/",
    }),
  );
export type EnvironmentsExperimentsConfigRetrieveInput =
  typeof EnvironmentsExperimentsConfigRetrieveInput.Type;

// Output Schema
export const EnvironmentsExperimentsConfigRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type EnvironmentsExperimentsConfigRetrieveOutput =
  typeof EnvironmentsExperimentsConfigRetrieveOutput.Type;

// The operation
/**
 * Manage experiment configuration for this environment.
 *
 * @param id - A unique integer value identifying this environment (aka team).
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const environmentsExperimentsConfigRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EnvironmentsExperimentsConfigRetrieveInput,
    outputSchema: EnvironmentsExperimentsConfigRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
