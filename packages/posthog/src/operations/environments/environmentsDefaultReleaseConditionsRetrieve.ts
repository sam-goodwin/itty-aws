import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const EnvironmentsDefaultReleaseConditionsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/environments/{id}/default_release_conditions/",
    }),
  );
export type EnvironmentsDefaultReleaseConditionsRetrieveInput =
  typeof EnvironmentsDefaultReleaseConditionsRetrieveInput.Type;

// Output Schema
export const EnvironmentsDefaultReleaseConditionsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type EnvironmentsDefaultReleaseConditionsRetrieveOutput =
  typeof EnvironmentsDefaultReleaseConditionsRetrieveOutput.Type;

// The operation
/**
 * Manage default release conditions for new feature flags in this team.
 *
 * @param id - A unique integer value identifying this environment (aka team).
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const environmentsDefaultReleaseConditionsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EnvironmentsDefaultReleaseConditionsRetrieveInput,
    outputSchema: EnvironmentsDefaultReleaseConditionsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
