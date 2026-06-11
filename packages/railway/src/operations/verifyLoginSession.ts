import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation verifyLoginSession($code: String!) {\n  loginSessionVerify(code: $code) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const VerifyLoginSessionInput = Schema.Struct({
  code: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "verifyLoginSession",
    type: "mutation",
  }),
);
export type VerifyLoginSessionInput = typeof VerifyLoginSessionInput.Type;

// Output Schema (GraphQL selection set)
export const VerifyLoginSessionOutput = Schema.Boolean.pipe(
  T.ResponsePath("loginSessionVerify"),
);
export type VerifyLoginSessionOutput = typeof VerifyLoginSessionOutput.Type;

/**
 * Verify if a login session is valid
 */
export const verifyLoginSession = API.make(() => ({
  inputSchema: VerifyLoginSessionInput,
  outputSchema: VerifyLoginSessionOutput,
}));
