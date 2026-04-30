import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation userAppPins {\n  userAppPins\n}";

// Input Schema (GraphQL variables)
export const UserAppPinsInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "userAppPins",
    type: "mutation",
  }),
);
export type UserAppPinsInput = typeof UserAppPinsInput.Type;

// Output Schema (GraphQL selection set)
export const UserAppPinsOutput = Schema.Unknown;
export type UserAppPinsOutput = typeof UserAppPinsOutput.Type;

/**
 * Mutations that create, update, and delete pinned apps
 */
export const userAppPins = API.make(() => ({
  inputSchema: UserAppPinsInput,
  outputSchema: UserAppPinsOutput,
}));
