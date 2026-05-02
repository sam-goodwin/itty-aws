import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation loginSessionVerify($code: String!) {\n  loginSessionVerify(code: $code) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const LoginSessionVerifyInput = Schema.Struct({
  code: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "loginSessionVerify",
    type: "mutation",
  }),
);
export type LoginSessionVerifyInput = typeof LoginSessionVerifyInput.Type;

// Output Schema (GraphQL selection set)
export const LoginSessionVerifyOutput = Schema.Boolean.pipe(
  T.ResponsePath("loginSessionVerify"),
);
export type LoginSessionVerifyOutput = typeof LoginSessionVerifyOutput.Type;

/**
 * Verify if a login session is valid
 */
export const loginSessionVerify = API.make(() => ({
  inputSchema: LoginSessionVerifyInput,
  outputSchema: LoginSessionVerifyOutput,
}));
