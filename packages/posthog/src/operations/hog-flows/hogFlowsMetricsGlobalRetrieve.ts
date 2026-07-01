import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface HogFlowsMetricsGlobalRetrieveInput {
  project_id: string;
  after?: string;
  before?: string;
}
export const HogFlowsMetricsGlobalRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    after: Schema.optional(Schema.String),
    before: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/hog_flows/metrics/global/",
    }),
  ) as unknown as Schema.Codec<HogFlowsMetricsGlobalRetrieveInput>;

// Output Schema
export type HogFlowsMetricsGlobalRetrieveOutput = {
  workflow_id: string;
  succeeded: number;
  failed: number;
}[];
export const HogFlowsMetricsGlobalRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      workflow_id: Schema.String,
      succeeded: Schema.Number,
      failed: Schema.Number,
    }),
  ) as unknown as Schema.Codec<HogFlowsMetricsGlobalRetrieveOutput>;

// The operation
/**
 *
 * @param after - Start of the window, matched on metric time. Relative ('-7d', '-24h') or ISO 8601. Defaults to -7d.
 * @param before - End of the window. Same format as 'after'. Defaults to now.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const hogFlowsMetricsGlobalRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HogFlowsMetricsGlobalRetrieveInput,
    outputSchema: HogFlowsMetricsGlobalRetrieveOutput,
  }));
