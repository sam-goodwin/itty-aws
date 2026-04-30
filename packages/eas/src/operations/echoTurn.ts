import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation echoTurn {\n  echoTurn\n}";

// Input Schema (GraphQL variables)
export const EchoTurnInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "echoTurn",
    type: "mutation",
  }),
);
export type EchoTurnInput = typeof EchoTurnInput.Type;

// Output Schema (GraphQL selection set)
export const EchoTurnOutput = Schema.Unknown;
export type EchoTurnOutput = typeof EchoTurnOutput.Type;

/**
 * Mutations for Echo turns
 */
export const echoTurn = API.make(() => ({
  inputSchema: EchoTurnInput,
  outputSchema: EchoTurnOutput,
}));
