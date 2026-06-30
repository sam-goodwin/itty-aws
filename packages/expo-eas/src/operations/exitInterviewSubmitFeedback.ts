import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation exitInterviewSubmitFeedback($input: ExitInterviewFeedbackInput!) {\n  exitInterview {\n    submitFeedback(input: $input) {\n      success\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const ExitInterviewSubmitFeedbackInput = Schema.Struct({
  input: Schema.Struct({
    accountId: Schema.String,
    conversationId: Schema.String,
    feedback: Schema.String,
    outcome: Schema.Literals([
      "CANCELLED_IMMEDIATELY",
      "CONTINUED_TO_STRIPE",
      "DISMISSED",
      "KEPT_PLAN",
    ]),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "exitInterviewSubmitFeedback",
    type: "mutation",
  }),
);
export type ExitInterviewSubmitFeedbackInput =
  typeof ExitInterviewSubmitFeedbackInput.Type;

// Output Schema (GraphQL selection set)
export const ExitInterviewSubmitFeedbackOutput = Schema.Struct({
  success: Schema.Boolean,
}).pipe(T.ResponsePath("exitInterview.submitFeedback"));
export type ExitInterviewSubmitFeedbackOutput =
  typeof ExitInterviewSubmitFeedbackOutput.Type;

export const exitInterviewSubmitFeedback = API.make(() => ({
  inputSchema: ExitInterviewSubmitFeedbackInput,
  outputSchema: ExitInterviewSubmitFeedbackOutput,
}));
