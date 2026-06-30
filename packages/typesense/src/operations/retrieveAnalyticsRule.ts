import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface RetrieveAnalyticsRuleInput {
  ruleName: string;
}
export const RetrieveAnalyticsRuleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ruleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/analytics/rules/{ruleName}" }),
  ) as unknown as Schema.Codec<RetrieveAnalyticsRuleInput>;

// Output Schema
export interface RetrieveAnalyticsRuleOutput {
  name: string;
  type: "popular_queries" | "nohits_queries" | "counter" | "log";
  collection: string;
  event_type: string;
  rule_tag?: string;
  params?: {
    destination_collection?: string;
    limit?: number;
    capture_search_requests?: boolean;
    meta_fields?: string[];
    expand_query?: boolean;
    counter_field?: string;
    weight?: number;
  };
}
export const RetrieveAnalyticsRuleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<RetrieveAnalyticsRuleOutput>;

// The operation
/**
 * Retrieves an analytics rule
 *
 * Retrieve the details of an analytics rule, given it's name
 *
 * @param ruleName - The name of the analytics rule to retrieve
 */
export const retrieveAnalyticsRule = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RetrieveAnalyticsRuleInput,
    outputSchema: RetrieveAnalyticsRuleOutput,
    errors: [NotFound] as const,
  }),
);
