import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation loginSessionCreate {\n  loginSessionCreate {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const CreateLoginSessionInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "loginSessionCreate",
    type: "mutation",
  }),
);
export type CreateLoginSessionInput = typeof CreateLoginSessionInput.Type;

// Output Schema (GraphQL selection set)
export const CreateLoginSessionOutput = Schema.String.pipe(
  T.ResponsePath("loginSessionCreate"),
);
export type CreateLoginSessionOutput = typeof CreateLoginSessionOutput.Type;

/**
 * Start a CLI login session
 */
export const createLoginSession = API.make(() => ({
  inputSchema: CreateLoginSessionInput,
  outputSchema: CreateLoginSessionOutput,
}));
