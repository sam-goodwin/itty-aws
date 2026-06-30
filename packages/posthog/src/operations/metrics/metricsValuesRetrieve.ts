import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const MetricsValuesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    value: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/metrics/values/",
    }),
  );
export type MetricsValuesRetrieveInput = typeof MetricsValuesRetrieveInput.Type;

// Output Schema
export const MetricsValuesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        name: Schema.String,
        metric_type: Schema.String,
      }),
    ),
  });
export type MetricsValuesRetrieveOutput =
  typeof MetricsValuesRetrieveOutput.Type;

// The operation
/**
 * Distinct metric names for the team. Backs the picker UI.
 *
 * @param limit - Max number of names to return. Defaults to 100; maximum 1000.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param value - Substring filter (case-insensitive) applied to metric names.
 */
export const metricsValuesRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MetricsValuesRetrieveInput,
    outputSchema: MetricsValuesRetrieveOutput,
  }),
);
