import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const EnvironmentsSettingsAsOfRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/environments/{id}/settings_as_of/",
    }),
  );
export type EnvironmentsSettingsAsOfRetrieveInput =
  typeof EnvironmentsSettingsAsOfRetrieveInput.Type;

// Output Schema
export const EnvironmentsSettingsAsOfRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type EnvironmentsSettingsAsOfRetrieveOutput =
  typeof EnvironmentsSettingsAsOfRetrieveOutput.Type;

// The operation
/**
 * Return the team settings as of the provided timestamp.
 * Query params:
 * - at: ISO8601 datetime (required)
 * - scope: optional, one or multiple keys to filter the returned settings
 *
 * @param id - A unique integer value identifying this environment (aka team).
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const environmentsSettingsAsOfRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EnvironmentsSettingsAsOfRetrieveInput,
    outputSchema: EnvironmentsSettingsAsOfRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
