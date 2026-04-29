import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const AppMetricsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/app_metrics/{id}/",
    }),
  );
export type AppMetricsRetrieveInput = typeof AppMetricsRetrieveInput.Type;

// Output Schema
export const AppMetricsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(Schema.String, Schema.Unknown);
export type AppMetricsRetrieveOutput = typeof AppMetricsRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A unique integer value identifying this plugin config.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const appMetricsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AppMetricsRetrieveInput,
  outputSchema: AppMetricsRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
