import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface McpAnalyticsIntentClustersRecomputeInput {
  project_id: string;
}
export const McpAnalyticsIntentClustersRecomputeInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/mcp_analytics/intent_clusters/recompute/",
    }),
  ) as unknown as Schema.Codec<McpAnalyticsIntentClustersRecomputeInput>;

// Output Schema
export type McpAnalyticsIntentClustersRecomputeOutput = void;
export const McpAnalyticsIntentClustersRecomputeOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<McpAnalyticsIntentClustersRecomputeOutput>;

// The operation
/**
 * Trigger an asynchronous recompute of the intent cluster snapshot. The task runs in the background; poll the GET endpoint for progress (status transitions to 'idle' or 'error').
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const mcpAnalyticsIntentClustersRecompute =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: McpAnalyticsIntentClustersRecomputeInput,
    outputSchema: McpAnalyticsIntentClustersRecomputeOutput,
  }));
