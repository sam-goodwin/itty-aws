import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation environmentVariable {\n  environmentVariable\n}";

// Input Schema (GraphQL variables)
export const EnvironmentVariableInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "environmentVariable",
    type: "mutation",
  }),
);
export type EnvironmentVariableInput = typeof EnvironmentVariableInput.Type;

// Output Schema (GraphQL selection set)
export const EnvironmentVariableOutput = Schema.Unknown;
export type EnvironmentVariableOutput = typeof EnvironmentVariableOutput.Type;

/**
 * Mutations that create and delete EnvironmentVariables
 */
export const environmentVariable = API.make(() => ({
  inputSchema: EnvironmentVariableInput,
  outputSchema: EnvironmentVariableOutput,
}));
