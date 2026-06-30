import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsPersonalSpendListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    date_from: Schema.optional(Schema.String),
    date_to: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    product: Schema.String,
    refresh: Schema.optional(Schema.Boolean),
  }).pipe(T.Http({ method: "GET", path: "/api/llm_analytics/@me/spend/" }));
export type LlmAnalyticsPersonalSpendListInput =
  typeof LlmAnalyticsPersonalSpendListInput.Type;

// Output Schema
export const LlmAnalyticsPersonalSpendListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      summary: Schema.Struct({
        date_from: Schema.String,
        date_to: Schema.String,
        product: Schema.String,
        total_cost_usd: Schema.Number,
        event_count: Schema.Number,
        scoped_cost_usd: Schema.Number,
        scoped_event_count: Schema.Number,
      }),
      by_product: Schema.Struct({
        items: Schema.Array(
          Schema.Struct({
            product: Schema.NullOr(Schema.String),
            event_count: Schema.Number,
            cost_usd: Schema.Number,
          }),
        ),
        truncated: Schema.Boolean,
      }),
      by_tool: Schema.Struct({
        items: Schema.Array(
          Schema.Struct({
            tool: Schema.NullOr(Schema.String),
            generation_count: Schema.Number,
            cost_usd: Schema.Number,
            share_of_scoped: Schema.Number,
            avg_input_tokens: Schema.Number,
          }),
        ),
        truncated: Schema.Boolean,
      }),
      by_model: Schema.Struct({
        items: Schema.Array(
          Schema.Struct({
            model: Schema.NullOr(Schema.String),
            generation_count: Schema.Number,
            cost_usd: Schema.Number,
            input_tokens: Schema.Number,
            output_tokens: Schema.Number,
          }),
        ),
        truncated: Schema.Boolean,
      }),
      top_traces: Schema.Struct({
        items: Schema.Array(
          Schema.Struct({
            trace_id: Schema.NullOr(Schema.String),
            generation_count: Schema.Number,
            cost_usd: Schema.Number,
            started_at: Schema.NullOr(Schema.String),
          }),
        ),
        truncated: Schema.Boolean,
      }),
    }),
  );
export type LlmAnalyticsPersonalSpendListOutput =
  typeof LlmAnalyticsPersonalSpendListOutput.Type;

// The operation
/**
 * Return a structured personal LLM spend analysis for the requesting user. Pass `date_from` / `date_to` (absolute like `2026-04-23` or relative like `-7d`) to bound the window — defaults to the last 30 days, max 90 days. The `product=<ai_product>` query param is required and scopes the tool / model / trace breakdowns to a single product; supported values: posthog_code. `by_product` is always returned for cross-product visibility. Use `refresh=true` to bypass the 5-minute response cache.
 *
 * @param date_from - Start of the spend window. Accepts absolute dates (`2026-04-23`) or relative strings (`-7d`, `-1m`, etc.) — same parser used elsewhere in PostHog. Defaults to `-30d`. The window between `date_from` and `date_to` cannot exceed 90 days.
 * @param date_to - End of the spend window. Accepts the same formats as `date_from`. Defaults to `now` when omitted.
 * @param limit - Maximum number of rows to return per breakdown (1-200, defaults to 50). Each breakdown returns up to this many rows ordered by cost descending. Per-breakdown `truncated: true` indicates more rows exist beyond the limit.
 * @param product - Required `ai_product` key to scope the tool / model / trace breakdowns to a single product. Only the following products are currently supported: posthog_code.
 * @param refresh - If true, bypass the result cache and re-run the underlying queries against ClickHouse.
 */
export const llmAnalyticsPersonalSpendList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsPersonalSpendListInput,
    outputSchema: LlmAnalyticsPersonalSpendListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
