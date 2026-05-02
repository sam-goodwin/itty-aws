import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation customerCreateFreePlanSubscription($id: String!) {\n  customerCreateFreePlanSubscription(id: $id)\n}";

// Input Schema (GraphQL variables)
export const CustomerCreateFreePlanSubscriptionInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "customerCreateFreePlanSubscription",
    type: "mutation",
  }),
);
export type CustomerCreateFreePlanSubscriptionInput =
  typeof CustomerCreateFreePlanSubscriptionInput.Type;

// Output Schema (GraphQL selection set)
export const CustomerCreateFreePlanSubscriptionOutput = Schema.Boolean.pipe(
  T.ResponsePath("customerCreateFreePlanSubscription"),
);
export type CustomerCreateFreePlanSubscriptionOutput =
  typeof CustomerCreateFreePlanSubscriptionOutput.Type;

/**
 * Create a free plan subscription for a customer
 */
export const customerCreateFreePlanSubscription = API.make(() => ({
  inputSchema: CustomerCreateFreePlanSubscriptionInput,
  outputSchema: CustomerCreateFreePlanSubscriptionOutput,
}));
