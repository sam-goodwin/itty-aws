import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation userDelete {\n  userDelete {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const UserDeleteInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "userDelete",
    type: "mutation",
  }),
);
export type UserDeleteInput = typeof UserDeleteInput.Type;

// Output Schema (GraphQL selection set)
export const UserDeleteOutput = Schema.Boolean.pipe(
  T.ResponsePath("userDelete"),
);
export type UserDeleteOutput = typeof UserDeleteOutput.Type;

/**
 * Delete the currently authenticated user
 */
export const userDelete = API.make(() => ({
  inputSchema: UserDeleteInput,
  outputSchema: UserDeleteOutput,
}));
