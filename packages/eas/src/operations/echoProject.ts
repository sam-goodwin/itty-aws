import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation echoProject {\n  echoProject\n}";

// Input Schema (GraphQL variables)
export const EchoProjectInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "echoProject",
    type: "mutation",
  }),
);
export type EchoProjectInput = typeof EchoProjectInput.Type;

// Output Schema (GraphQL selection set)
export const EchoProjectOutput = Schema.Unknown;
export type EchoProjectOutput = typeof EchoProjectOutput.Type;

/**
 * Mutations for Echo projects
 */
export const echoProject = API.make(() => ({
  inputSchema: EchoProjectInput,
  outputSchema: EchoProjectOutput,
}));
