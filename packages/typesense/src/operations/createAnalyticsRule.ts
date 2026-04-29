import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const CreateAnalyticsRuleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "POST", path: "/analytics/rules" }),
  );
export type CreateAnalyticsRuleInput = typeof CreateAnalyticsRuleInput.Type;

// Output Schema
export const CreateAnalyticsRuleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type CreateAnalyticsRuleOutput = typeof CreateAnalyticsRuleOutput.Type;

// The operation
/**
 * Create analytics rule(s)
 *
 * Create one or more analytics rules. You can send a single rule object or an array of rule objects.
 */
export const createAnalyticsRule = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateAnalyticsRuleInput,
  outputSchema: CreateAnalyticsRuleOutput,
  errors: [BadRequest] as const,
}));
