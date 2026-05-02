import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation loginSessionCancel($code: String!) {\n  loginSessionCancel(code: $code) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const LoginSessionCancelInput = Schema.Struct({
  code: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "loginSessionCancel",
    type: "mutation",
  }),
);
export type LoginSessionCancelInput = typeof LoginSessionCancelInput.Type;

// Output Schema (GraphQL selection set)
export const LoginSessionCancelOutput = Schema.Boolean.pipe(
  T.ResponsePath("loginSessionCancel"),
);
export type LoginSessionCancelOutput = typeof LoginSessionCancelOutput.Type;

/**
 * Cancel a login session
 */
export const loginSessionCancel = API.make(() => ({
  inputSchema: LoginSessionCancelInput,
  outputSchema: LoginSessionCancelOutput,
}));
