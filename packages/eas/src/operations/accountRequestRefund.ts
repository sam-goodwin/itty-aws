import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation accountRequestRefund($accountName: ID, $accountID: ID!, $chargeID: ID!, $description: String, $reason: String) {\n  account(accountName: $accountName) {\n    requestRefund(accountID: $accountID, chargeID: $chargeID, description: $description, reason: $reason) {\n      __typename\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const AccountRequestRefundInput = Schema.Struct({
  accountName: Schema.optional(Schema.NullOr(Schema.String)),
  accountID: Schema.String,
  chargeID: Schema.String,
  description: Schema.optional(Schema.NullOr(Schema.String)),
  reason: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "accountRequestRefund",
    type: "mutation",
  }),
);
export type AccountRequestRefundInput = typeof AccountRequestRefundInput.Type;

// Output Schema (GraphQL selection set)
export const AccountRequestRefundOutput = Schema.NullOr(Schema.Boolean).pipe(
  T.ResponsePath("account.requestRefund"),
);
export type AccountRequestRefundOutput = typeof AccountRequestRefundOutput.Type;

export const accountRequestRefund = API.make(() => ({
  inputSchema: AccountRequestRefundInput,
  outputSchema: AccountRequestRefundOutput,
}));
