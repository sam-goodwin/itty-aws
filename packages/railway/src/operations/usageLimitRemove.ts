import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation usageLimitRemove($input: UsageLimitRemoveInput!) {\n  usageLimitRemove(input: $input)\n}";

// Input Schema (GraphQL variables)
export const UsageLimitRemoveInput = Schema.Struct({
  input: Schema.Struct({
    customerId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "usageLimitRemove",
    type: "mutation",
  }),
);
export type UsageLimitRemoveInput = typeof UsageLimitRemoveInput.Type;

// Output Schema (GraphQL selection set)
export const UsageLimitRemoveOutput = Schema.Boolean.pipe(
  T.ResponsePath("usageLimitRemove"),
);
export type UsageLimitRemoveOutput = typeof UsageLimitRemoveOutput.Type;

/**
 * Remove the usage limit for a customer
 */
export const usageLimitRemove = API.make(() => ({
  inputSchema: UsageLimitRemoveInput,
  outputSchema: UsageLimitRemoveOutput,
}));
