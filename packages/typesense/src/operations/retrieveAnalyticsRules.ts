import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const RetrieveAnalyticsRulesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rule_tag: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/analytics/rules" }));
export type RetrieveAnalyticsRulesInput =
  typeof RetrieveAnalyticsRulesInput.Type;

// Output Schema
export const RetrieveAnalyticsRulesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      name: Schema.String,
      type: Schema.Literals([
        "popular_queries",
        "nohits_queries",
        "counter",
        "log",
      ]),
      collection: Schema.String,
      event_type: Schema.String,
      rule_tag: Schema.optional(Schema.String),
      params: Schema.optional(
        Schema.Struct({
          destination_collection: Schema.optional(Schema.String),
          limit: Schema.optional(Schema.Number),
          capture_search_requests: Schema.optional(Schema.Boolean),
          meta_fields: Schema.optional(Schema.Array(Schema.String)),
          expand_query: Schema.optional(Schema.Boolean),
          counter_field: Schema.optional(Schema.String),
          weight: Schema.optional(Schema.Number),
        }),
      ),
    }),
  );
export type RetrieveAnalyticsRulesOutput =
  typeof RetrieveAnalyticsRulesOutput.Type;

// The operation
/**
 * Retrieve analytics rules
 *
 * Retrieve all analytics rules. Use the optional rule_tag filter to narrow down results.
 *
 * @param rule_tag - Filter rules by rule_tag
 */
export const retrieveAnalyticsRules = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RetrieveAnalyticsRulesInput,
    outputSchema: RetrieveAnalyticsRulesOutput,
  }),
);
