import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation emailChangeInitiate($newEmail: String!) {\n  emailChangeInitiate(newEmail: $newEmail) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const EmailChangeInitiateInput = Schema.Struct({
  newEmail: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "emailChangeInitiate",
    type: "mutation",
  }),
);
export type EmailChangeInitiateInput = typeof EmailChangeInitiateInput.Type;

// Output Schema (GraphQL selection set)
export const EmailChangeInitiateOutput = Schema.Boolean.pipe(
  T.ResponsePath("emailChangeInitiate"),
);
export type EmailChangeInitiateOutput = typeof EmailChangeInitiateOutput.Type;

/**
 * Initiate an email change request for a user
 */
export const emailChangeInitiate = API.make(() => ({
  inputSchema: EmailChangeInitiateInput,
  outputSchema: EmailChangeInitiateOutput,
}));
