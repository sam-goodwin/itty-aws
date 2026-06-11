import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation customerCreateFreePlanSubscription($id: String!) {\n  customerCreateFreePlanSubscription(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const CreateCustomerFreePlanSubscriptionInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "customerCreateFreePlanSubscription",
    type: "mutation",
  }),
);
export type CreateCustomerFreePlanSubscriptionInput =
  typeof CreateCustomerFreePlanSubscriptionInput.Type;

// Output Schema (GraphQL selection set)
export const CreateCustomerFreePlanSubscriptionOutput = Schema.Boolean.pipe(
  T.ResponsePath("customerCreateFreePlanSubscription"),
);
export type CreateCustomerFreePlanSubscriptionOutput =
  typeof CreateCustomerFreePlanSubscriptionOutput.Type;

/**
 * Create a free plan subscription for a customer
 */
export const createCustomerFreePlanSubscription = API.make(() => ({
  inputSchema: CreateCustomerFreePlanSubscriptionInput,
  outputSchema: CreateCustomerFreePlanSubscriptionOutput,
}));
