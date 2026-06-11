import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation confirmEmailChange($nonce: String!) {\n  emailChangeConfirm(nonce: $nonce) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const ConfirmEmailChangeInput = Schema.Struct({
  nonce: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "confirmEmailChange",
    type: "mutation",
  }),
);
export type ConfirmEmailChangeInput = typeof ConfirmEmailChangeInput.Type;

// Output Schema (GraphQL selection set)
export const ConfirmEmailChangeOutput = Schema.Boolean.pipe(
  T.ResponsePath("emailChangeConfirm"),
);
export type ConfirmEmailChangeOutput = typeof ConfirmEmailChangeOutput.Type;

/**
 * Change the User's account email if there is a valid change email request.
 */
export const confirmEmailChange = API.make(() => ({
  inputSchema: ConfirmEmailChangeInput,
  outputSchema: ConfirmEmailChangeOutput,
}));
