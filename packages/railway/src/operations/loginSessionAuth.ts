import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation loginSessionAuth($input: LoginSessionAuthInput!) {\n  loginSessionAuth(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const LoginSessionAuthInput = Schema.Struct({
  input: Schema.Struct({
    code: Schema.String,
    hostname: Schema.optional(Schema.NullOr(Schema.String)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "loginSessionAuth",
    type: "mutation",
  }),
);
export type LoginSessionAuthInput = typeof LoginSessionAuthInput.Type;

// Output Schema (GraphQL selection set)
export const LoginSessionAuthOutput = Schema.Boolean.pipe(
  T.ResponsePath("loginSessionAuth"),
);
export type LoginSessionAuthOutput = typeof LoginSessionAuthOutput.Type;

/**
 * Auth a login session for a user
 */
export const loginSessionAuth = API.make(() => ({
  inputSchema: LoginSessionAuthInput,
  outputSchema: LoginSessionAuthOutput,
}));
