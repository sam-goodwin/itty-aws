import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation echoMessagePart {\n  echoMessagePart\n}";

// Input Schema (GraphQL variables)
export const EchoMessagePartInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "echoMessagePart",
    type: "mutation",
  }),
);
export type EchoMessagePartInput = typeof EchoMessagePartInput.Type;

// Output Schema (GraphQL selection set)
export const EchoMessagePartOutput = Schema.Unknown;
export type EchoMessagePartOutput = typeof EchoMessagePartOutput.Type;

/**
 * Mutations for Echo message parts
 */
export const echoMessagePart = API.make(() => ({
  inputSchema: EchoMessagePartInput,
  outputSchema: EchoMessagePartOutput,
}));
