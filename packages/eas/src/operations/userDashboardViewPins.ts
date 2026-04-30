import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation userDashboardViewPins {\n  userDashboardViewPins\n}";

// Input Schema (GraphQL variables)
export const UserDashboardViewPinsInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "userDashboardViewPins",
    type: "mutation",
  }),
);
export type UserDashboardViewPinsInput = typeof UserDashboardViewPinsInput.Type;

// Output Schema (GraphQL selection set)
export const UserDashboardViewPinsOutput = Schema.Unknown;
export type UserDashboardViewPinsOutput =
  typeof UserDashboardViewPinsOutput.Type;

/**
 * Mutations that create, update, and delete pinned dashboard views
 */
export const userDashboardViewPins = API.make(() => ({
  inputSchema: UserDashboardViewPinsInput,
  outputSchema: UserDashboardViewPinsOutput,
}));
