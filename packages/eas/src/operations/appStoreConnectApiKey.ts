import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation appStoreConnectApiKey {\n  appStoreConnectApiKey\n}";

// Input Schema (GraphQL variables)
export const AppStoreConnectApiKeyInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "appStoreConnectApiKey",
    type: "mutation",
  }),
);
export type AppStoreConnectApiKeyInput = typeof AppStoreConnectApiKeyInput.Type;

// Output Schema (GraphQL selection set)
export const AppStoreConnectApiKeyOutput = Schema.Unknown;
export type AppStoreConnectApiKeyOutput =
  typeof AppStoreConnectApiKeyOutput.Type;

/**
 * Mutations that modify an App Store Connect Api Key
 */
export const appStoreConnectApiKey = API.make(() => ({
  inputSchema: AppStoreConnectApiKeyInput,
  outputSchema: AppStoreConnectApiKeyOutput,
}));
