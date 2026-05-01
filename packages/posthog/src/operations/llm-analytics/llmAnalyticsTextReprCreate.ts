import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsTextReprCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    event_type: Schema.Literals([
      "$ai_generation",
      "$ai_span",
      "$ai_embedding",
      "$ai_trace",
    ]),
    data: Schema.Unknown,
    options: Schema.optional(
      Schema.Struct({
        max_length: Schema.optional(Schema.Number),
        truncated: Schema.optional(Schema.Boolean),
        truncate_buffer: Schema.optional(Schema.Number),
        include_markers: Schema.optional(Schema.Boolean),
        collapsed: Schema.optional(Schema.Boolean),
        include_metadata: Schema.optional(Schema.Boolean),
        include_hierarchy: Schema.optional(Schema.Boolean),
        max_depth: Schema.optional(Schema.Number),
        tools_collapse_threshold: Schema.optional(Schema.Number),
        include_line_numbers: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/llm_analytics/text_repr/",
    }),
  );
export type LlmAnalyticsTextReprCreateInput =
  typeof LlmAnalyticsTextReprCreateInput.Type;

// Output Schema
export const LlmAnalyticsTextReprCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.String,
    metadata: Schema.Struct({
      event_type: Schema.optional(Schema.String),
      event_id: Schema.optional(Schema.String),
      trace_id: Schema.optional(Schema.String),
      rendering: Schema.String,
      char_count: Schema.Number,
      truncated: Schema.Boolean,
      error: Schema.optional(Schema.String),
    }),
  });
export type LlmAnalyticsTextReprCreateOutput =
  typeof LlmAnalyticsTextReprCreateOutput.Type;

// The operation
/**
 * Generate a human-readable text representation of an LLM trace event.
 * This endpoint converts LLM analytics events ($ai_generation, $ai_span, $ai_embedding, or $ai_trace)
 * into formatted text representations suitable for display, logging, or analysis.
 * **Supported Event Types:**
 * - `$ai_generation`: Individual LLM API calls with input/output messages
 * - `$ai_span`: Logical spans with state transitions
 * - `$ai_embedding`: Embedding generation events (text input → vector)
 * - `$ai_trace`: Full traces with hierarchical structure
 * **Options:**
 * - `max_length`: Maximum character count (default: 2000000)
 * - `truncated`: Enable middle-content truncation within events (default: true)
 * - `truncate_buffer`: Characters at start/end when truncating (default: 1000)
 * - `include_markers`: Use interactive markers vs plain text indicators (default: true)
 * - Frontend: set true for `<<<TRUNCATED|base64|...>>>` markers
 * - Backend/LLM: set false for `... (X chars truncated) ...` text
 * - `collapsed`: Show summary vs full trace tree (default: false)
 * - `include_hierarchy`: Include tree structure for traces (default: true)
 * - `max_depth`: Maximum depth for hierarchical rendering (default: unlimited)
 * - `tools_collapse_threshold`: Number of tools before auto-collapsing list (default: 5)
 * - Tool lists >5 items show `<<<TOOLS_EXPANDABLE|...>>>` marker for frontend
 * - Or `[+] AVAILABLE TOOLS: N` for backend when `include_markers: false`
 * - `include_line_numbers`: Prefix each line with line number like L001:, L010: (default: false)
 * **Use Cases:**
 * - Frontend display: `truncated: true, include_markers: true, include_line_numbers: true`
 * - Backend LLM context (summary): `truncated: true, include_markers: false, collapsed: true`
 * - Backend LLM context (full): `truncated: false`
 * The response includes the formatted text and metadata about the rendering.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsTextReprCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LlmAnalyticsTextReprCreateInput,
    outputSchema: LlmAnalyticsTextReprCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
