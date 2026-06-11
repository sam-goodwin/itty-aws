import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation updateReferralInfo($input: ReferralInfoUpdateInput!) {\n  referralInfoUpdate(input: $input) {\n    code\n    id\n    referralStats {\n      credited\n      pending\n    }\n    status\n  }\n}";

// Input Schema (GraphQL variables)
export const UpdateReferralInfoInput = Schema.Struct({
  input: Schema.Struct({
    code: Schema.String,
    workspaceId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "updateReferralInfo",
    type: "mutation",
  }),
);
export type UpdateReferralInfoInput = typeof UpdateReferralInfoInput.Type;

// Output Schema (GraphQL selection set)
export const UpdateReferralInfoOutput = Schema.Struct({
  code: Schema.String,
  id: Schema.String,
  referralStats: Schema.Struct({
    credited: Schema.Number,
    pending: Schema.Number,
  }),
  status: Schema.String,
}).pipe(T.ResponsePath("referralInfoUpdate"));
export type UpdateReferralInfoOutput = typeof UpdateReferralInfoOutput.Type;

/**
 * Updates the ReferralInfo for the authenticated user.
 */
export const updateReferralInfo = API.make(() => ({
  inputSchema: UpdateReferralInfoInput,
  outputSchema: UpdateReferralInfoOutput,
}));
