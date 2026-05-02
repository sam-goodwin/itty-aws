import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation userBetaLeave {\n  userBetaLeave {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const UserBetaLeaveInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "userBetaLeave",
    type: "mutation",
  }),
);
export type UserBetaLeaveInput = typeof UserBetaLeaveInput.Type;

// Output Schema (GraphQL selection set)
export const UserBetaLeaveOutput = Schema.Boolean.pipe(
  T.ResponsePath("userBetaLeave"),
);
export type UserBetaLeaveOutput = typeof UserBetaLeaveOutput.Type;

/**
 * Unsubscribe from the Beta program.
 */
export const userBetaLeave = API.make(() => ({
  inputSchema: UserBetaLeaveInput,
  outputSchema: UserBetaLeaveOutput,
}));
