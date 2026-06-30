import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface MetricsHasMetricsRetrieveInput {
  project_id: string;
}
export const MetricsHasMetricsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/metrics/has_metrics/",
    }),
  ) as unknown as Schema.Codec<MetricsHasMetricsRetrieveInput>;

// Output Schema
export type MetricsHasMetricsRetrieveOutput = Record<string, unknown>;
export const MetricsHasMetricsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
    Schema.String,
    Schema.Unknown,
  ) as unknown as Schema.Codec<MetricsHasMetricsRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const metricsHasMetricsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MetricsHasMetricsRetrieveInput,
    outputSchema: MetricsHasMetricsRetrieveOutput,
  }),
);
