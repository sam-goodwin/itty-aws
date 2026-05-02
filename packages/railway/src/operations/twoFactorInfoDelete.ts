import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation twoFactorInfoDelete {\n  twoFactorInfoDelete\n}";

// Input Schema (GraphQL variables)
export const TwoFactorInfoDeleteInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "twoFactorInfoDelete",
    type: "mutation",
  }),
);
export type TwoFactorInfoDeleteInput = typeof TwoFactorInfoDeleteInput.Type;

// Output Schema (GraphQL selection set)
export const TwoFactorInfoDeleteOutput = Schema.Boolean.pipe(
  T.ResponsePath("twoFactorInfoDelete"),
);
export type TwoFactorInfoDeleteOutput = typeof TwoFactorInfoDeleteOutput.Type;

/**
 * Deletes the TwoFactorInfo for the authenticated user.
 */
export const twoFactorInfoDelete = API.make(() => ({
  inputSchema: TwoFactorInfoDeleteInput,
  outputSchema: TwoFactorInfoDeleteOutput,
}));
