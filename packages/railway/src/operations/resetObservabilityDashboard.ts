import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation resetObservabilityDashboard($id: String!) {\n  observabilityDashboardReset(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const ResetObservabilityDashboardInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "resetObservabilityDashboard",
    type: "mutation",
  }),
);
export type ResetObservabilityDashboardInput =
  typeof ResetObservabilityDashboardInput.Type;

// Output Schema (GraphQL selection set)
export const ResetObservabilityDashboardOutput = Schema.Boolean.pipe(
  T.ResponsePath("observabilityDashboardReset"),
);
export type ResetObservabilityDashboardOutput =
  typeof ResetObservabilityDashboardOutput.Type;

/**
 * Reset an observability dashboard to default dashboard items
 */
export const resetObservabilityDashboard = API.make(() => ({
  inputSchema: ResetObservabilityDashboardInput,
  outputSchema: ResetObservabilityDashboardOutput,
}));
