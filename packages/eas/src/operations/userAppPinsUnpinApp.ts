import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation userAppPinsUnpinApp($appId: ID!) {\n  userAppPins {\n    unpinApp(appId: $appId) {\n      __typename\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const UserAppPinsUnpinAppInput = Schema.Struct({
  appId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "userAppPinsUnpinApp",
    type: "mutation",
  }),
);
export type UserAppPinsUnpinAppInput = typeof UserAppPinsUnpinAppInput.Type;

// Output Schema (GraphQL selection set)
export const UserAppPinsUnpinAppOutput = Schema.NullOr(Schema.String).pipe(
  T.ResponsePath("userAppPins.unpinApp"),
);
export type UserAppPinsUnpinAppOutput = typeof UserAppPinsUnpinAppOutput.Type;

export const userAppPinsUnpinApp = API.make(() => ({
  inputSchema: UserAppPinsUnpinAppInput,
  outputSchema: UserAppPinsUnpinAppOutput,
}));
