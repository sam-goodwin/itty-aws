import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation removeUsageLimit($input: UsageLimitRemoveInput!) {\n  usageLimitRemove(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const RemoveUsageLimitInput = Schema.Struct({
  input: Schema.Struct({
    customerId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "removeUsageLimit",
    type: "mutation",
  }),
);
export type RemoveUsageLimitInput = typeof RemoveUsageLimitInput.Type;

// Output Schema (GraphQL selection set)
export const RemoveUsageLimitOutput = Schema.Boolean.pipe(
  T.ResponsePath("usageLimitRemove"),
);
export type RemoveUsageLimitOutput = typeof RemoveUsageLimitOutput.Type;

/**
 * Remove the usage limit for a customer
 */
export const removeUsageLimit = API.make(() => ({
  inputSchema: RemoveUsageLimitInput,
  outputSchema: RemoveUsageLimitOutput,
}));
