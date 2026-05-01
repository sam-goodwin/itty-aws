import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation appStoreConnectAppDeleteAppStoreConnectApp($appStoreConnectAppId: ID!) {\n  appStoreConnectApp {\n    deleteAppStoreConnectApp(appStoreConnectAppId: $appStoreConnectAppId) {\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const AppStoreConnectAppDeleteAppStoreConnectAppInput = Schema.Struct({
  appStoreConnectAppId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "appStoreConnectAppDeleteAppStoreConnectApp",
    type: "mutation",
  }),
);
export type AppStoreConnectAppDeleteAppStoreConnectAppInput =
  typeof AppStoreConnectAppDeleteAppStoreConnectAppInput.Type;

// Output Schema (GraphQL selection set)
export const AppStoreConnectAppDeleteAppStoreConnectAppOutput = Schema.Struct({
  id: Schema.String,
}).pipe(T.ResponsePath("appStoreConnectApp.deleteAppStoreConnectApp"));
export type AppStoreConnectAppDeleteAppStoreConnectAppOutput =
  typeof AppStoreConnectAppDeleteAppStoreConnectAppOutput.Type;

export const appStoreConnectAppDeleteAppStoreConnectApp = API.make(() => ({
  inputSchema: AppStoreConnectAppDeleteAppStoreConnectAppInput,
  outputSchema: AppStoreConnectAppDeleteAppStoreConnectAppOutput,
}));
