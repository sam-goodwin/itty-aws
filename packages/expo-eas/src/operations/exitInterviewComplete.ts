import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation exitInterviewComplete($input: ExitInterviewCompleteInput!) {\n  exitInterview {\n    complete(input: $input) {\n      success\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const ExitInterviewCompleteInput = Schema.Struct({
  input: Schema.Struct({
    accountId: Schema.String,
    conversationId: Schema.String,
    messages: Schema.Array(
      Schema.Struct({
        content: Schema.String,
        role: Schema.Literals(["ASSISTANT", "USER"]),
      }),
    ),
    outcome: Schema.Literals([
      "CANCELLED_IMMEDIATELY",
      "CONTINUED_TO_STRIPE",
      "DISMISSED",
      "KEPT_PLAN",
    ]),
    tags: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          actionableInsight: Schema.Boolean,
          category: Schema.String,
          competitorMention: Schema.optional(Schema.NullOr(Schema.String)),
          confidence: Schema.optional(Schema.NullOr(Schema.String)),
          productArea: Schema.optional(Schema.NullOr(Schema.String)),
          sentiment: Schema.String,
          summary: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    ),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "exitInterviewComplete",
    type: "mutation",
  }),
);
export type ExitInterviewCompleteInput = typeof ExitInterviewCompleteInput.Type;

// Output Schema (GraphQL selection set)
export const ExitInterviewCompleteOutput = Schema.Struct({
  success: Schema.Boolean,
}).pipe(T.ResponsePath("exitInterview.complete"));
export type ExitInterviewCompleteOutput =
  typeof ExitInterviewCompleteOutput.Type;

export const exitInterviewComplete = API.make(() => ({
  inputSchema: ExitInterviewCompleteInput,
  outputSchema: ExitInterviewCompleteOutput,
}));
