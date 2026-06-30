import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden } from "../../errors.ts";

// Input Schema
export interface LlmAnalyticsSummarizationBatchCheckCreateInput {
  project_id: string;
  trace_ids?: string[];
  mode?: "minimal" | "detailed";
  model?: string | null;
}
export const LlmAnalyticsSummarizationBatchCheckCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    trace_ids: Schema.optional(Schema.Array(Schema.String)),
    mode: Schema.optional(Schema.Literals(["minimal", "detailed"])),
    model: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/llm_analytics/summarization/batch_check/",
    }),
  ) as unknown as Schema.Codec<LlmAnalyticsSummarizationBatchCheckCreateInput>;

// Output Schema
export interface LlmAnalyticsSummarizationBatchCheckCreateOutput {
  summaries?: { trace_id?: string; title?: string; cached?: boolean }[];
}
export const LlmAnalyticsSummarizationBatchCheckCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summaries: Schema.optional(
      Schema.Array(
        Schema.Struct({
          trace_id: Schema.optional(Schema.String),
          title: Schema.optional(Schema.String),
          cached: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<LlmAnalyticsSummarizationBatchCheckCreateOutput>;

// The operation
/**
 * Check which traces have cached summaries available.
 * This endpoint allows batch checking of multiple trace IDs to see which ones
 * have cached summaries. Returns only the traces that have cached summaries
 * with their titles.
 * **Use Cases:**
 * - Load cached summaries on session view load
 * - Avoid unnecessary LLM calls for already-summarized traces
 * - Display summary previews without generating new summaries
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsSummarizationBatchCheckCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsSummarizationBatchCheckCreateInput,
    outputSchema: LlmAnalyticsSummarizationBatchCheckCreateOutput,
    errors: [BadRequest, Forbidden] as const,
  }));
