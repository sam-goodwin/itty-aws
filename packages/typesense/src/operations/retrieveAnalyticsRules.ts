import * as Schema from "effect/Schema";
import { AnalyticsRuleSchema } from "./_schemas.ts";
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
    Schema.suspend(() => AnalyticsRuleSchema),
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
