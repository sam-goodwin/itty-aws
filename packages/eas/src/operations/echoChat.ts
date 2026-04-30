import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation echoChat {\n  echoChat\n}";

// Input Schema (GraphQL variables)
export const EchoChatInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "echoChat",
    type: "mutation",
  }),
);
export type EchoChatInput = typeof EchoChatInput.Type;

// Output Schema (GraphQL selection set)
export const EchoChatOutput = Schema.Unknown;
export type EchoChatOutput = typeof EchoChatOutput.Type;

/**
 * Mutations for Echo chats
 */
export const echoChat = API.make(() => ({
  inputSchema: EchoChatInput,
  outputSchema: EchoChatOutput,
}));
