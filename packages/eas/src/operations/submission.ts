import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation submission {\n  submission\n}";

// Input Schema (GraphQL variables)
export const SubmissionInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "submission",
    type: "mutation",
  }),
);
export type SubmissionInput = typeof SubmissionInput.Type;

// Output Schema (GraphQL selection set)
export const SubmissionOutput = Schema.Unknown;
export type SubmissionOutput = typeof SubmissionOutput.Type;

/**
 * Mutations that modify an EAS Submit submission
 */
export const submission = API.make(() => ({
  inputSchema: SubmissionInput,
  outputSchema: SubmissionOutput,
}));
