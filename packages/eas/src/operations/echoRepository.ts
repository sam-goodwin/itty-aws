import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation echoRepository {\n  echoRepository\n}";

// Input Schema (GraphQL variables)
export const EchoRepositoryInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "echoRepository",
    type: "mutation",
  }),
);
export type EchoRepositoryInput = typeof EchoRepositoryInput.Type;

// Output Schema (GraphQL selection set)
export const EchoRepositoryOutput = Schema.Unknown;
export type EchoRepositoryOutput = typeof EchoRepositoryOutput.Type;

/**
 * Mutations for Echo repository management via the GitHub App
 */
export const echoRepository = API.make(() => ({
  inputSchema: EchoRepositoryInput,
  outputSchema: EchoRepositoryOutput,
}));
