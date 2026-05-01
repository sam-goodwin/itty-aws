import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation environmentVariableDeleteEnvironmentVariable($id: ID!) {\n  environmentVariable {\n    deleteEnvironmentVariable(id: $id) {\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const EnvironmentVariableDeleteEnvironmentVariableInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "environmentVariableDeleteEnvironmentVariable",
    type: "mutation",
  }),
);
export type EnvironmentVariableDeleteEnvironmentVariableInput =
  typeof EnvironmentVariableDeleteEnvironmentVariableInput.Type;

// Output Schema (GraphQL selection set)
export const EnvironmentVariableDeleteEnvironmentVariableOutput = Schema.Struct(
  {
    id: Schema.String,
  },
).pipe(T.ResponsePath("environmentVariable.deleteEnvironmentVariable"));
export type EnvironmentVariableDeleteEnvironmentVariableOutput =
  typeof EnvironmentVariableDeleteEnvironmentVariableOutput.Type;

export const environmentVariableDeleteEnvironmentVariable = API.make(() => ({
  inputSchema: EnvironmentVariableDeleteEnvironmentVariableInput,
  outputSchema: EnvironmentVariableDeleteEnvironmentVariableOutput,
}));
