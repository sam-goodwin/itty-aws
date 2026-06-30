import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation exitInterviewBeginChatTurn($input: ExitInterviewBeginChatTurnInput!) {\n  exitInterview {\n    beginChatTurn(input: $input) {\n      ok\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const ExitInterviewBeginChatTurnInput = Schema.Struct({
  input: Schema.Struct({
    accountId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "exitInterviewBeginChatTurn",
    type: "mutation",
  }),
);
export type ExitInterviewBeginChatTurnInput =
  typeof ExitInterviewBeginChatTurnInput.Type;

// Output Schema (GraphQL selection set)
export const ExitInterviewBeginChatTurnOutput = Schema.Struct({
  ok: Schema.Boolean,
}).pipe(T.ResponsePath("exitInterview.beginChatTurn"));
export type ExitInterviewBeginChatTurnOutput =
  typeof ExitInterviewBeginChatTurnOutput.Type;

export const exitInterviewBeginChatTurn = API.make(() => ({
  inputSchema: ExitInterviewBeginChatTurnInput,
  outputSchema: ExitInterviewBeginChatTurnOutput,
}));
