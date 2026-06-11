import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getReferralInfo($workspaceId: String!) {\n  referralInfo(workspaceId: $workspaceId) {\n    code\n    id\n    referralStats {\n      credited\n      pending\n    }\n    status\n  }\n}";

// Input Schema (GraphQL variables)
export const GetReferralInfoInput = Schema.Struct({
  workspaceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getReferralInfo",
    type: "query",
  }),
);
export type GetReferralInfoInput = typeof GetReferralInfoInput.Type;

// Output Schema (GraphQL selection set)
export const GetReferralInfoOutput = Schema.Struct({
  code: Schema.String,
  id: Schema.String,
  referralStats: Schema.Struct({
    credited: Schema.Number,
    pending: Schema.Number,
  }),
  status: Schema.String,
}).pipe(T.ResponsePath("referralInfo"));
export type GetReferralInfoOutput = typeof GetReferralInfoOutput.Type;

/**
 * Gets the ReferralInfo for the authenticated user.
 */
export const getReferralInfo = API.make(() => ({
  inputSchema: GetReferralInfoInput,
  outputSchema: GetReferralInfoOutput,
}));
