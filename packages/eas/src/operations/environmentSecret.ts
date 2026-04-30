import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation environmentSecret {\n  environmentSecret\n}";

// Input Schema (GraphQL variables)
export const EnvironmentSecretInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "environmentSecret",
    type: "mutation",
  }),
);
export type EnvironmentSecretInput = typeof EnvironmentSecretInput.Type;

// Output Schema (GraphQL selection set)
export const EnvironmentSecretOutput = Schema.Unknown;
export type EnvironmentSecretOutput = typeof EnvironmentSecretOutput.Type;

/**
 * Mutations that create and delete EnvironmentSecrets
 */
export const environmentSecret = API.make(() => ({
  inputSchema: EnvironmentSecretInput,
  outputSchema: EnvironmentSecretOutput,
}));
