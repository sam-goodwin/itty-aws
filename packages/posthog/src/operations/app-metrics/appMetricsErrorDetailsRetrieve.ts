import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const AppMetricsErrorDetailsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/app_metrics/{id}/error_details/",
    }),
  );
export type AppMetricsErrorDetailsRetrieveInput =
  typeof AppMetricsErrorDetailsRetrieveInput.Type;

// Output Schema
export const AppMetricsErrorDetailsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AppMetricsErrorDetailsRetrieveOutput =
  typeof AppMetricsErrorDetailsRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A unique integer value identifying this plugin config.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const appMetricsErrorDetailsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppMetricsErrorDetailsRetrieveInput,
    outputSchema: AppMetricsErrorDetailsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
