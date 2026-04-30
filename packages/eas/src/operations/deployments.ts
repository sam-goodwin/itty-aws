import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation deployments {\n  deployments\n}";

// Input Schema (GraphQL variables)
export const DeploymentsInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deployments",
    type: "mutation",
  }),
);
export type DeploymentsInput = typeof DeploymentsInput.Type;

// Output Schema (GraphQL selection set)
export const DeploymentsOutput = Schema.Unknown;
export type DeploymentsOutput = typeof DeploymentsOutput.Type;

export const deployments = API.make(() => ({
  inputSchema: DeploymentsInput,
  outputSchema: DeploymentsOutput,
}));
