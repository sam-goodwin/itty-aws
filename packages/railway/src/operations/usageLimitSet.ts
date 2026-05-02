import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation usageLimitSet($input: UsageLimitSetInput!) {\n  usageLimitSet(input: $input)\n}";

// Input Schema (GraphQL variables)
export const UsageLimitSetInput = Schema.Struct({
  input: Schema.Struct({
    customerId: Schema.String,
    hardLimitDollars: Schema.optional(Schema.NullOr(Schema.Number)),
    softLimitDollars: Schema.Number,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "usageLimitSet",
    type: "mutation",
  }),
);
export type UsageLimitSetInput = typeof UsageLimitSetInput.Type;

// Output Schema (GraphQL selection set)
export const UsageLimitSetOutput = Schema.Boolean.pipe(
  T.ResponsePath("usageLimitSet"),
);
export type UsageLimitSetOutput = typeof UsageLimitSetOutput.Type;

/**
 * Set the usage limit for a customer
 */
export const usageLimitSet = API.make(() => ({
  inputSchema: UsageLimitSetInput,
  outputSchema: UsageLimitSetOutput,
}));
