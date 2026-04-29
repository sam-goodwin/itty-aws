import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const UpsertAnalyticsRuleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ruleName: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
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
  }).pipe(T.Http({ method: "PUT", path: "/analytics/rules/{ruleName}" }));
export type UpsertAnalyticsRuleInput = typeof UpsertAnalyticsRuleInput.Type;

// Output Schema
export const UpsertAnalyticsRuleOutput =
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
  });
export type UpsertAnalyticsRuleOutput = typeof UpsertAnalyticsRuleOutput.Type;

// The operation
/**
 * Upserts an analytics rule
 *
 * Upserts an analytics rule with the given name.
 *
 * @param ruleName - The name of the analytics rule to upsert
 */
export const upsertAnalyticsRule = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpsertAnalyticsRuleInput,
  outputSchema: UpsertAnalyticsRuleOutput,
  errors: [BadRequest] as const,
}));
