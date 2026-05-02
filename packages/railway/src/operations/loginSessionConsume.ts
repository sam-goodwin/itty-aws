import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation loginSessionConsume($code: String!) {\n  loginSessionConsume(code: $code)\n}";

// Input Schema (GraphQL variables)
export const LoginSessionConsumeInput = Schema.Struct({
  code: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "loginSessionConsume",
    type: "mutation",
  }),
);
export type LoginSessionConsumeInput = typeof LoginSessionConsumeInput.Type;

// Output Schema (GraphQL selection set)
export const LoginSessionConsumeOutput = Schema.NullOr(Schema.String).pipe(
  T.ResponsePath("loginSessionConsume"),
);
export type LoginSessionConsumeOutput = typeof LoginSessionConsumeOutput.Type;

/**
 * Get a token for a login session if it exists
 */
export const loginSessionConsume = API.make(() => ({
  inputSchema: LoginSessionConsumeInput,
  outputSchema: LoginSessionConsumeOutput,
}));
