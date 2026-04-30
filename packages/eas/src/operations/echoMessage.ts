import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation echoMessage {\n  echoMessage\n}";

// Input Schema (GraphQL variables)
export const EchoMessageInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "echoMessage",
    type: "mutation",
  }),
);
export type EchoMessageInput = typeof EchoMessageInput.Type;

// Output Schema (GraphQL selection set)
export const EchoMessageOutput = Schema.Unknown;
export type EchoMessageOutput = typeof EchoMessageOutput.Type;

/**
 * Mutations for Echo messages
 */
export const echoMessage = API.make(() => ({
  inputSchema: EchoMessageInput,
  outputSchema: EchoMessageOutput,
}));
