import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation userBetaLeave {\n  userBetaLeave {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const LeaveUserBetaInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "userBetaLeave",
    type: "mutation",
  }),
);
export type LeaveUserBetaInput = typeof LeaveUserBetaInput.Type;

// Output Schema (GraphQL selection set)
export const LeaveUserBetaOutput = Schema.Boolean.pipe(
  T.ResponsePath("userBetaLeave"),
);
export type LeaveUserBetaOutput = typeof LeaveUserBetaOutput.Type;

/**
 * Unsubscribe from the Beta program.
 */
export const leaveUserBeta = API.make(() => ({
  inputSchema: LeaveUserBetaInput,
  outputSchema: LeaveUserBetaOutput,
}));
