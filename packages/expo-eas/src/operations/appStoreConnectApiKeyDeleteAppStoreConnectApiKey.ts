import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation appStoreConnectApiKeyDeleteAppStoreConnectApiKey($id: ID!) {\n  appStoreConnectApiKey {\n    deleteAppStoreConnectApiKey(id: $id) {\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const AppStoreConnectApiKeyDeleteAppStoreConnectApiKeyInput =
  Schema.Struct({
    id: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName: "appStoreConnectApiKeyDeleteAppStoreConnectApiKey",
      type: "mutation",
    }),
  );
export type AppStoreConnectApiKeyDeleteAppStoreConnectApiKeyInput =
  typeof AppStoreConnectApiKeyDeleteAppStoreConnectApiKeyInput.Type;

// Output Schema (GraphQL selection set)
export const AppStoreConnectApiKeyDeleteAppStoreConnectApiKeyOutput =
  Schema.Struct({
    id: Schema.String,
  }).pipe(T.ResponsePath("appStoreConnectApiKey.deleteAppStoreConnectApiKey"));
export type AppStoreConnectApiKeyDeleteAppStoreConnectApiKeyOutput =
  typeof AppStoreConnectApiKeyDeleteAppStoreConnectApiKeyOutput.Type;

export const appStoreConnectApiKeyDeleteAppStoreConnectApiKey = API.make(
  () => ({
    inputSchema: AppStoreConnectApiKeyDeleteAppStoreConnectApiKeyInput,
    outputSchema: AppStoreConnectApiKeyDeleteAppStoreConnectApiKeyOutput,
  }),
);
