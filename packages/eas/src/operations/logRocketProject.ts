import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation logRocketProject {\n  logRocketProject\n}";

// Input Schema (GraphQL variables)
export const LogRocketProjectInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "logRocketProject",
    type: "mutation",
  }),
);
export type LogRocketProjectInput = typeof LogRocketProjectInput.Type;

// Output Schema (GraphQL selection set)
export const LogRocketProjectOutput = Schema.Unknown;
export type LogRocketProjectOutput = typeof LogRocketProjectOutput.Type;

/**
 * Mutations for LogRocket projects
 */
export const logRocketProject = API.make(() => ({
  inputSchema: LogRocketProjectInput,
  outputSchema: LogRocketProjectOutput,
}));
