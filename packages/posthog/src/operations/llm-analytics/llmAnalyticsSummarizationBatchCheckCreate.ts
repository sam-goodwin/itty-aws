import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsSummarizationBatchCheckCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    trace_ids: Schema.Array(Schema.String),
    mode: Schema.optional(Schema.Literals(["minimal", "detailed"])),
    model: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/llm_analytics/summarization/batch_check/",
    }),
  );
export type LlmAnalyticsSummarizationBatchCheckCreateInput =
  typeof LlmAnalyticsSummarizationBatchCheckCreateInput.Type;

// Output Schema
export const LlmAnalyticsSummarizationBatchCheckCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summaries: Schema.Array(
      Schema.Struct({
        trace_id: Schema.String,
        title: Schema.String,
        cached: Schema.optional(Schema.Boolean),
      }),
    ),
  });
export type LlmAnalyticsSummarizationBatchCheckCreateOutput =
  typeof LlmAnalyticsSummarizationBatchCheckCreateOutput.Type;

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
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
