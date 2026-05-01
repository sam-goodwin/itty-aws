import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsSummarizationCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    summarize_type: Schema.optional(Schema.Literals(["trace", "event"])),
    mode: Schema.optional(Schema.Literals(["minimal", "detailed"])),
    data: Schema.optional(Schema.Unknown),
    force_refresh: Schema.optional(Schema.Boolean),
    model: Schema.optional(Schema.NullOr(Schema.String)),
    trace_id: Schema.optional(Schema.String),
    generation_id: Schema.optional(Schema.String),
    date_from: Schema.optional(Schema.NullOr(Schema.String)),
    date_to: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/llm_analytics/summarization/",
    }),
  );
export type LlmAnalyticsSummarizationCreateInput =
  typeof LlmAnalyticsSummarizationCreateInput.Type;

// Output Schema
export const LlmAnalyticsSummarizationCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summary: Schema.Struct({
      title: Schema.String,
      flow_diagram: Schema.String,
      summary_bullets: Schema.Array(
        Schema.Struct({
          text: Schema.String,
          line_refs: Schema.String,
        }),
      ),
      interesting_notes: Schema.Array(
        Schema.Struct({
          text: Schema.String,
          line_refs: Schema.String,
        }),
      ),
    }),
    text_repr: Schema.String,
    metadata: Schema.optional(Schema.Unknown),
  });
export type LlmAnalyticsSummarizationCreateOutput =
  typeof LlmAnalyticsSummarizationCreateOutput.Type;

// The operation
/**
 * Generate an AI-powered summary of an LLM trace or event.
 * This endpoint analyzes the provided trace/event, generates a line-numbered text
 * representation, and uses an LLM to create a concise summary with line references.
 * **Two ways to use this endpoint:**
 * 1. **By ID (recommended):** Pass `trace_id` or `generation_id` with an optional `date_from`/`date_to`.
 * The backend fetches the data automatically. `summarize_type` is inferred.
 * 2. **By data:** Pass the full trace/event data blob in `data` with `summarize_type`.
 * This is how the frontend uses it.
 * **Summary Format:**
 * - Title (concise, max 10 words)
 * - Mermaid flow diagram showing the main flow
 * - 3-10 summary bullets with line references
 * - "Interesting Notes" section for failures, successes, or unusual patterns
 * - Line references in [L45] or [L45-52] format pointing to relevant sections
 * The response includes the structured summary, the text representation, and metadata.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsSummarizationCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsSummarizationCreateInput,
    outputSchema: LlmAnalyticsSummarizationCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
