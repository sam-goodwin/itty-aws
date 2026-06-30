import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const McpAnalyticsIntentClustersRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/mcp_analytics/intent_clusters/",
    }),
  );
export type McpAnalyticsIntentClustersRetrieveInput =
  typeof McpAnalyticsIntentClustersRetrieveInput.Type;

// Output Schema
export const McpAnalyticsIntentClustersRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      status: Schema.Literals(["idle", "computing", "error"]),
      error_message: Schema.String,
      last_computed_at: Schema.NullOr(Schema.String),
      last_computed_by_email: Schema.String,
      clusters: Schema.Array(
        Schema.Struct({
          id: Schema.Number,
          label: Schema.String,
          intent_count: Schema.Number,
          session_count: Schema.Number,
          call_count: Schema.Number,
          error_count: Schema.Number,
          error_rate_pct: Schema.Number,
          routing_entropy: Schema.Number,
          tool_distribution: Schema.Array(
            Schema.Struct({
              tool: Schema.String,
              count: Schema.Number,
              pct: Schema.Number,
              errors: Schema.Number,
              error_rate_pct: Schema.Number,
            }),
          ),
          sample_intents: Schema.Array(Schema.String),
          journey: Schema.Unknown,
        }),
      ),
      computed_with: Schema.Unknown,
    }),
  );
export type McpAnalyticsIntentClustersRetrieveOutput =
  typeof McpAnalyticsIntentClustersRetrieveOutput.Type;

// The operation
/**
 * Return the most recent intent cluster snapshot for the current project. Returns an empty IDLE snapshot when no clustering run has happened yet.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const mcpAnalyticsIntentClustersRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: McpAnalyticsIntentClustersRetrieveInput,
    outputSchema: McpAnalyticsIntentClustersRetrieveOutput,
  }));
