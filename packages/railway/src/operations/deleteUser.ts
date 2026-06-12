import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation userDelete {\n  userDelete\n}";

// Input Schema (GraphQL variables)
export const DeleteUserInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "userDelete",
    type: "mutation",
  }),
);
export type DeleteUserInput = typeof DeleteUserInput.Type;

// Output Schema (GraphQL selection set)
export const DeleteUserOutput = Schema.Boolean.pipe(
  T.ResponsePath("userDelete"),
);
export type DeleteUserOutput = typeof DeleteUserOutput.Type;

/**
 * Delete the currently authenticated user
 */
export const deleteUser = API.make(() => ({
  inputSchema: DeleteUserInput,
  outputSchema: DeleteUserOutput,
}));
