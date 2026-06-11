import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation twoFactorInfoDelete {\n  twoFactorInfoDelete {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const DeleteTwoFactorInfoInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "twoFactorInfoDelete",
    type: "mutation",
  }),
);
export type DeleteTwoFactorInfoInput = typeof DeleteTwoFactorInfoInput.Type;

// Output Schema (GraphQL selection set)
export const DeleteTwoFactorInfoOutput = Schema.Boolean.pipe(
  T.ResponsePath("twoFactorInfoDelete"),
);
export type DeleteTwoFactorInfoOutput = typeof DeleteTwoFactorInfoOutput.Type;

/**
 * Deletes the TwoFactorInfo for the authenticated user.
 */
export const deleteTwoFactorInfo = API.make(() => ({
  inputSchema: DeleteTwoFactorInfoInput,
  outputSchema: DeleteTwoFactorInfoOutput,
}));
