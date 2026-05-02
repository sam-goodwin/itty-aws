import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation emailChangeConfirm($nonce: String!) {\n  emailChangeConfirm(nonce: $nonce)\n}";

// Input Schema (GraphQL variables)
export const EmailChangeConfirmInput = Schema.Struct({
  nonce: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "emailChangeConfirm",
    type: "mutation",
  }),
);
export type EmailChangeConfirmInput = typeof EmailChangeConfirmInput.Type;

// Output Schema (GraphQL selection set)
export const EmailChangeConfirmOutput = Schema.Boolean.pipe(
  T.ResponsePath("emailChangeConfirm"),
);
export type EmailChangeConfirmOutput = typeof EmailChangeConfirmOutput.Type;

/**
 * Change the User's account email if there is a valid change email request.
 */
export const emailChangeConfirm = API.make(() => ({
  inputSchema: EmailChangeConfirmInput,
  outputSchema: EmailChangeConfirmOutput,
}));
