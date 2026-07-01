import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface McpAnalyticsIntentClustersRetrieveInput {
  project_id: string;
}
export const McpAnalyticsIntentClustersRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/mcp_analytics/intent_clusters/",
    }),
  ) as unknown as Schema.Codec<McpAnalyticsIntentClustersRetrieveInput>;

// Output Schema
export type McpAnalyticsIntentClustersRetrieveOutput = {
  status: "idle" | "computing" | "error";
  error_message: string;
  last_computed_at: string | null;
  last_computed_by_email: string;
  clusters: {
    id: number;
    label: string;
    intent_count: number;
    session_count: number;
    call_count: number;
    error_count: number;
    error_rate_pct: number;
    routing_entropy: number;
    tool_distribution: {
      tool: string;
      count: number;
      pct: number;
      errors: number;
      error_rate_pct: number;
    }[];
    sample_intents: string[];
    journey: {
      paths: {
        steps: (string | null)[];
        outcome: "completed" | "error";
        count: number;
      }[];
      total_sessions: number;
      leak: {
        steps: (string | null)[];
        outcome: "completed" | "error";
        count: number;
      } | null;
    } | null;
  }[];
  computed_with: {
    distance_threshold: number;
    embedding_model: string;
    n_intents: number;
    n_clusters: number;
  } | null;
}[];
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
          journey: Schema.NullOr(
            Schema.Struct({
              paths: Schema.Array(
                Schema.Struct({
                  steps: Schema.Array(Schema.NullOr(Schema.String)),
                  outcome: Schema.Literals(["completed", "error"]),
                  count: Schema.Number,
                }),
              ),
              total_sessions: Schema.Number,
              leak: Schema.NullOr(
                Schema.Struct({
                  steps: Schema.Array(Schema.NullOr(Schema.String)),
                  outcome: Schema.Literals(["completed", "error"]),
                  count: Schema.Number,
                }),
              ),
            }),
          ),
        }),
      ),
      computed_with: Schema.NullOr(
        Schema.Struct({
          distance_threshold: Schema.Number,
          embedding_model: Schema.String,
          n_intents: Schema.Number,
          n_clusters: Schema.Number,
        }),
      ),
    }),
  ) as unknown as Schema.Codec<McpAnalyticsIntentClustersRetrieveOutput>;

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
