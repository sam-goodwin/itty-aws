import * as Schema from "effect/Schema";
import { AnalyticsRuleTypeSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const DeleteAnalyticsRuleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ruleName: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "DELETE", path: "/analytics/rules/{ruleName}" }));
export type DeleteAnalyticsRuleInput = typeof DeleteAnalyticsRuleInput.Type;

// Output Schema
export const DeleteAnalyticsRuleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    type: Schema.suspend(() => AnalyticsRuleTypeSchema),
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
export type DeleteAnalyticsRuleOutput = typeof DeleteAnalyticsRuleOutput.Type;

// The operation
/**
 * Delete an analytics rule
 *
 * Permanently deletes an analytics rule, given it's name
 *
 * @param ruleName - The name of the analytics rule to delete
 */
export const deleteAnalyticsRule = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteAnalyticsRuleInput,
  outputSchema: DeleteAnalyticsRuleOutput,
  errors: [NotFound] as const,
}));
