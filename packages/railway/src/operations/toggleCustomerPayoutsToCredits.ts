import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation customerTogglePayoutsToCredits($customerId: String!, $input: customerTogglePayoutsToCreditsInput!) {\n  customerTogglePayoutsToCredits(customerId: $customerId, input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const ToggleCustomerPayoutsToCreditsInput = Schema.Struct({
  customerId: Schema.String,
  input: Schema.Struct({
    isWithdrawingToCredits: Schema.Boolean,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "customerTogglePayoutsToCredits",
    type: "mutation",
  }),
);
export type ToggleCustomerPayoutsToCreditsInput =
  typeof ToggleCustomerPayoutsToCreditsInput.Type;

// Output Schema (GraphQL selection set)
export const ToggleCustomerPayoutsToCreditsOutput = Schema.Boolean.pipe(
  T.ResponsePath("customerTogglePayoutsToCredits"),
);
export type ToggleCustomerPayoutsToCreditsOutput =
  typeof ToggleCustomerPayoutsToCreditsOutput.Type;

/**
 * Toggle whether a customer is automatically withdrawing to credits
 */
export const toggleCustomerPayoutsToCredits = API.make(() => ({
  inputSchema: ToggleCustomerPayoutsToCreditsInput,
  outputSchema: ToggleCustomerPayoutsToCreditsOutput,
}));
