import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface McpAnalyticsSessionsGenerateIntentInput {
  id: string;
  project_id: string;
  date_from?: string;
}
export const McpAnalyticsSessionsGenerateIntentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    date_from: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/mcp_analytics/sessions/{id}/generate_intent/",
    }),
  ) as unknown as Schema.Codec<McpAnalyticsSessionsGenerateIntentInput>;

// Output Schema
export interface McpAnalyticsSessionsGenerateIntentOutput {
  session_id: string;
  intent: string;
}
export const McpAnalyticsSessionsGenerateIntentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session_id: Schema.String,
    intent: Schema.String,
  }) as unknown as Schema.Codec<McpAnalyticsSessionsGenerateIntentOutput>;

// The operation
/**
 * Generate (or return the cached) LLM summary of the agent's goal for a session, derived from its recorded $mcp_intents. The first call summarises and persists the result; subsequent calls return the stored summary.
 *
 * @param date_from - Absolute ISO timestamp lower bound for the intent scan — pass the session's start so older sessions resolve. Defaults to a 7-day lookback when omitted.
 * @param id - A UUID string identifying this mcp analytics submission.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const mcpAnalyticsSessionsGenerateIntent =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: McpAnalyticsSessionsGenerateIntentInput,
    outputSchema: McpAnalyticsSessionsGenerateIntentOutput,
  }));
