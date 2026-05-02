import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation observabilityDashboardReset($id: String!) {\n  observabilityDashboardReset(id: $id)\n}";

// Input Schema (GraphQL variables)
export const ObservabilityDashboardResetInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "observabilityDashboardReset",
    type: "mutation",
  }),
);
export type ObservabilityDashboardResetInput =
  typeof ObservabilityDashboardResetInput.Type;

// Output Schema (GraphQL selection set)
export const ObservabilityDashboardResetOutput = Schema.Boolean.pipe(
  T.ResponsePath("observabilityDashboardReset"),
);
export type ObservabilityDashboardResetOutput =
  typeof ObservabilityDashboardResetOutput.Type;

/**
 * Reset an observability dashboard to default dashboard items
 */
export const observabilityDashboardReset = API.make(() => ({
  inputSchema: ObservabilityDashboardResetInput,
  outputSchema: ObservabilityDashboardResetOutput,
}));
