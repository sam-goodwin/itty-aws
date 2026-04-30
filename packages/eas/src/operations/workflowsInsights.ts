import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation workflowsInsights {\n  workflowsInsights\n}";

// Input Schema (GraphQL variables)
export const WorkflowsInsightsInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "workflowsInsights",
    type: "mutation",
  }),
);
export type WorkflowsInsightsInput = typeof WorkflowsInsightsInput.Type;

// Output Schema (GraphQL selection set)
export const WorkflowsInsightsOutput = Schema.Unknown;
export type WorkflowsInsightsOutput = typeof WorkflowsInsightsOutput.Type;

export const workflowsInsights = API.make(() => ({
  inputSchema: WorkflowsInsightsInput,
  outputSchema: WorkflowsInsightsOutput,
}));
