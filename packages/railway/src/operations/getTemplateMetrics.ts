import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query templateMetrics($id: String!) {\n  templateMetrics(id: $id) {\n    activeDeployments\n    deploymentsLast90Days\n    earningsLast30Days\n    earningsLast90Days\n    eligibleForSupportBonus\n    supportHealth\n    templateHealth\n    totalDeployments\n    totalEarnings\n  }\n}";

// Input Schema (GraphQL variables)
export const GetTemplateMetricsInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "templateMetrics",
    type: "query",
  }),
);
export type GetTemplateMetricsInput = typeof GetTemplateMetricsInput.Type;

// Output Schema (GraphQL selection set)
export const GetTemplateMetricsOutput = Schema.Struct({
  activeDeployments: Schema.Number,
  deploymentsLast90Days: Schema.Number,
  earningsLast30Days: Schema.Number,
  earningsLast90Days: Schema.Number,
  eligibleForSupportBonus: Schema.Boolean,
  supportHealth: Schema.Number,
  templateHealth: Schema.Number,
  totalDeployments: Schema.Number,
  totalEarnings: Schema.Number,
}).pipe(T.ResponsePath("templateMetrics"));
export type GetTemplateMetricsOutput = typeof GetTemplateMetricsOutput.Type;

/**
 * Get the metrics for a template.
 */
export const getTemplateMetrics = API.make(() => ({
  inputSchema: GetTemplateMetricsInput,
  outputSchema: GetTemplateMetricsOutput,
}));
