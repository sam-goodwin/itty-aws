import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation googleServiceAccountKeyDeleteGoogleServiceAccountKey($id: ID!) {\n  googleServiceAccountKey {\n    deleteGoogleServiceAccountKey(id: $id) {\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GoogleServiceAccountKeyDeleteGoogleServiceAccountKeyInput =
  Schema.Struct({
    id: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName: "googleServiceAccountKeyDeleteGoogleServiceAccountKey",
      type: "mutation",
    }),
  );
export type GoogleServiceAccountKeyDeleteGoogleServiceAccountKeyInput =
  typeof GoogleServiceAccountKeyDeleteGoogleServiceAccountKeyInput.Type;

// Output Schema (GraphQL selection set)
export const GoogleServiceAccountKeyDeleteGoogleServiceAccountKeyOutput =
  Schema.Struct({
    id: Schema.String,
  }).pipe(
    T.ResponsePath("googleServiceAccountKey.deleteGoogleServiceAccountKey"),
  );
export type GoogleServiceAccountKeyDeleteGoogleServiceAccountKeyOutput =
  typeof GoogleServiceAccountKeyDeleteGoogleServiceAccountKeyOutput.Type;

export const googleServiceAccountKeyDeleteGoogleServiceAccountKey = API.make(
  () => ({
    inputSchema: GoogleServiceAccountKeyDeleteGoogleServiceAccountKeyInput,
    outputSchema: GoogleServiceAccountKeyDeleteGoogleServiceAccountKeyOutput,
  }),
);
