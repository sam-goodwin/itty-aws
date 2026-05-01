import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation environmentSecretDeleteEnvironmentSecret($id: String!) {\n  environmentSecret {\n    deleteEnvironmentSecret(id: $id) {\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const EnvironmentSecretDeleteEnvironmentSecretInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "environmentSecretDeleteEnvironmentSecret",
    type: "mutation",
  }),
);
export type EnvironmentSecretDeleteEnvironmentSecretInput =
  typeof EnvironmentSecretDeleteEnvironmentSecretInput.Type;

// Output Schema (GraphQL selection set)
export const EnvironmentSecretDeleteEnvironmentSecretOutput = Schema.Struct({
  id: Schema.String,
}).pipe(T.ResponsePath("environmentSecret.deleteEnvironmentSecret"));
export type EnvironmentSecretDeleteEnvironmentSecretOutput =
  typeof EnvironmentSecretDeleteEnvironmentSecretOutput.Type;

export const environmentSecretDeleteEnvironmentSecret = API.make(() => ({
  inputSchema: EnvironmentSecretDeleteEnvironmentSecretInput,
  outputSchema: EnvironmentSecretDeleteEnvironmentSecretOutput,
}));
