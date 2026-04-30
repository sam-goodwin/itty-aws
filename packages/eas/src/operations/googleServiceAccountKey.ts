import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation googleServiceAccountKey {\n  googleServiceAccountKey\n}";

// Input Schema (GraphQL variables)
export const GoogleServiceAccountKeyInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "googleServiceAccountKey",
    type: "mutation",
  }),
);
export type GoogleServiceAccountKeyInput =
  typeof GoogleServiceAccountKeyInput.Type;

// Output Schema (GraphQL selection set)
export const GoogleServiceAccountKeyOutput = Schema.Unknown;
export type GoogleServiceAccountKeyOutput =
  typeof GoogleServiceAccountKeyOutput.Type;

/**
 * Mutations that modify a Google Service Account Key
 */
export const googleServiceAccountKey = API.make(() => ({
  inputSchema: GoogleServiceAccountKeyInput,
  outputSchema: GoogleServiceAccountKeyOutput,
}));
