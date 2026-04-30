import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation appStoreConnectApp {\n  appStoreConnectApp\n}";

// Input Schema (GraphQL variables)
export const AppStoreConnectAppInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "appStoreConnectApp",
    type: "mutation",
  }),
);
export type AppStoreConnectAppInput = typeof AppStoreConnectAppInput.Type;

// Output Schema (GraphQL selection set)
export const AppStoreConnectAppOutput = Schema.Unknown;
export type AppStoreConnectAppOutput = typeof AppStoreConnectAppOutput.Type;

/**
 * Mutations for App Store Connect apps.
 */
export const appStoreConnectApp = API.make(() => ({
  inputSchema: AppStoreConnectAppInput,
  outputSchema: AppStoreConnectAppOutput,
}));
