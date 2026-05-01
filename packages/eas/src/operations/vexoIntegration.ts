import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query vexoIntegration {\n  vexoIntegration {\n    clientIdentifier\n  }\n}";

// Input Schema (GraphQL variables)
export const VexoIntegrationInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "vexoIntegration",
    type: "query",
  }),
);
export type VexoIntegrationInput = typeof VexoIntegrationInput.Type;

// Output Schema (GraphQL selection set)
export const VexoIntegrationOutput = Schema.Struct({
  clientIdentifier: Schema.String,
}).pipe(T.ResponsePath("vexoIntegration"));
export type VexoIntegrationOutput = typeof VexoIntegrationOutput.Type;

/**
 * Top-level query object for querying Vexo Integration information.
 */
export const vexoIntegration = API.make(() => ({
  inputSchema: VexoIntegrationInput,
  outputSchema: VexoIntegrationOutput,
}));
