import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation applePushKey {\n  applePushKey\n}";

// Input Schema (GraphQL variables)
export const ApplePushKeyInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "applePushKey",
    type: "mutation",
  }),
);
export type ApplePushKeyInput = typeof ApplePushKeyInput.Type;

// Output Schema (GraphQL selection set)
export const ApplePushKeyOutput = Schema.Unknown;
export type ApplePushKeyOutput = typeof ApplePushKeyOutput.Type;

/**
 * Mutations that modify an Apple Push Notification key
 */
export const applePushKey = API.make(() => ({
  inputSchema: ApplePushKeyInput,
  outputSchema: ApplePushKeyOutput,
}));
