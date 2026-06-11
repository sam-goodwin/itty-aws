import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation loginSessionConsume($code: String!) {\n  loginSessionConsume(code: $code) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const ConsumeLoginSessionInput = Schema.Struct({
  code: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "loginSessionConsume",
    type: "mutation",
  }),
);
export type ConsumeLoginSessionInput = typeof ConsumeLoginSessionInput.Type;

// Output Schema (GraphQL selection set)
export const ConsumeLoginSessionOutput = Schema.NullOr(Schema.String).pipe(
  T.ResponsePath("loginSessionConsume"),
);
export type ConsumeLoginSessionOutput = typeof ConsumeLoginSessionOutput.Type;

/**
 * Get a token for a login session if it exists
 */
export const consumeLoginSession = API.make(() => ({
  inputSchema: ConsumeLoginSessionInput,
  outputSchema: ConsumeLoginSessionOutput,
}));
