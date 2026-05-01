import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation userAppPinsPinApp($appId: ID!) {\n  userAppPins {\n    pinApp(appId: $appId) {\n      __typename\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const UserAppPinsPinAppInput = Schema.Struct({
  appId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "userAppPinsPinApp",
    type: "mutation",
  }),
);
export type UserAppPinsPinAppInput = typeof UserAppPinsPinAppInput.Type;

// Output Schema (GraphQL selection set)
export const UserAppPinsPinAppOutput = Schema.String.pipe(
  T.ResponsePath("userAppPins.pinApp"),
);
export type UserAppPinsPinAppOutput = typeof UserAppPinsPinAppOutput.Type;

export const userAppPinsPinApp = API.make(() => ({
  inputSchema: UserAppPinsPinAppInput,
  outputSchema: UserAppPinsPinAppOutput,
}));
