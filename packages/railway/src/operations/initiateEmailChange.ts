import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation initiateEmailChange($newEmail: String!) {\n  emailChangeInitiate(newEmail: $newEmail) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const InitiateEmailChangeInput = Schema.Struct({
  newEmail: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "initiateEmailChange",
    type: "mutation",
  }),
);
export type InitiateEmailChangeInput = typeof InitiateEmailChangeInput.Type;

// Output Schema (GraphQL selection set)
export const InitiateEmailChangeOutput = Schema.Boolean.pipe(
  T.ResponsePath("emailChangeInitiate"),
);
export type InitiateEmailChangeOutput = typeof InitiateEmailChangeOutput.Type;

/**
 * Initiate an email change request for a user
 */
export const initiateEmailChange = API.make(() => ({
  inputSchema: InitiateEmailChangeInput,
  outputSchema: InitiateEmailChangeOutput,
}));
