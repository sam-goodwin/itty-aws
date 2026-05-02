import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation loginSessionCreate {\n  loginSessionCreate {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const LoginSessionCreateInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "loginSessionCreate",
    type: "mutation",
  }),
);
export type LoginSessionCreateInput = typeof LoginSessionCreateInput.Type;

// Output Schema (GraphQL selection set)
export const LoginSessionCreateOutput = Schema.String.pipe(
  T.ResponsePath("loginSessionCreate"),
);
export type LoginSessionCreateOutput = typeof LoginSessionCreateOutput.Type;

/**
 * Start a CLI login session
 */
export const loginSessionCreate = API.make(() => ({
  inputSchema: LoginSessionCreateInput,
  outputSchema: LoginSessionCreateOutput,
}));
