import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation referralInfoUpdate($input: ReferralInfoUpdateInput!) {\n  referralInfoUpdate(input: $input) {\n    code\n    id\n    referralStats {\n      credited\n      pending\n    }\n    status\n  }\n}";

// Input Schema (GraphQL variables)
export const ReferralInfoUpdateInput = Schema.Struct({
  input: Schema.Struct({
    code: Schema.String,
    workspaceId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "referralInfoUpdate",
    type: "mutation",
  }),
);
export type ReferralInfoUpdateInput = typeof ReferralInfoUpdateInput.Type;

// Output Schema (GraphQL selection set)
export const ReferralInfoUpdateOutput = Schema.Struct({
  code: Schema.String,
  id: Schema.String,
  referralStats: Schema.Struct({
    credited: Schema.Number,
    pending: Schema.Number,
  }),
  status: Schema.String,
}).pipe(T.ResponsePath("referralInfoUpdate"));
export type ReferralInfoUpdateOutput = typeof ReferralInfoUpdateOutput.Type;

/**
 * Updates the ReferralInfo for the authenticated user.
 */
export const referralInfoUpdate = API.make(() => ({
  inputSchema: ReferralInfoUpdateInput,
  outputSchema: ReferralInfoUpdateOutput,
}));
