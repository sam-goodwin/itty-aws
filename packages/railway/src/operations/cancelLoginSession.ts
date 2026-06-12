import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation loginSessionCancel($code: String!) {\n  loginSessionCancel(code: $code)\n}";

// Input Schema (GraphQL variables)
export const CancelLoginSessionInput = Schema.Struct({
  code: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "loginSessionCancel",
    type: "mutation",
  }),
);
export type CancelLoginSessionInput = typeof CancelLoginSessionInput.Type;

// Output Schema (GraphQL selection set)
export const CancelLoginSessionOutput = Schema.Boolean.pipe(
  T.ResponsePath("loginSessionCancel"),
);
export type CancelLoginSessionOutput = typeof CancelLoginSessionOutput.Type;

/**
 * Cancel a login session
 */
export const cancelLoginSession = API.make(() => ({
  inputSchema: CancelLoginSessionInput,
  outputSchema: CancelLoginSessionOutput,
}));
