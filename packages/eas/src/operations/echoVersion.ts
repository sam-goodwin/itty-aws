import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation echoVersion {\n  echoVersion\n}";

// Input Schema (GraphQL variables)
export const EchoVersionInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "echoVersion",
    type: "mutation",
  }),
);
export type EchoVersionInput = typeof EchoVersionInput.Type;

// Output Schema (GraphQL selection set)
export const EchoVersionOutput = Schema.Unknown;
export type EchoVersionOutput = typeof EchoVersionOutput.Type;

/**
 * Mutations for Echo versions
 */
export const echoVersion = API.make(() => ({
  inputSchema: EchoVersionInput,
  outputSchema: EchoVersionOutput,
}));
